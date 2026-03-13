import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import StatusBadge from "@/components/StatusBadge";
import { Camera, Upload, X } from "lucide-react";

const flaggedViolations = [
  { id: "V-1042", time: "12:04 PM", violation: "Food handler not wearing gloves", explanation: "AI detected bare hand contact with ready-to-eat food.", status: "pending" as const },
  { id: "V-1041", time: "11:22 AM", violation: "Temperature deviation in cold storage", explanation: "Refrigerator unit 3 temperature at 8.2°C.", status: "accepted" as const },
  { id: "V-1039", time: "Yesterday 3:45 PM", violation: "Missing hairnet in prep area", explanation: "Staff member in prep zone without required hairnet.", status: "rejected" as const },
];

const AppealPage = () => {
  const [selectedViolation, setSelectedViolation] = useState<string | null>(null);
  const [appealText, setAppealText] = useState("");

  const handleSubmit = () => {
    setSelectedViolation(null);
    setAppealText("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-display font-bold text-2xl mb-1">Appeal Hygiene Violation</h1>
          <p className="text-sm text-muted-foreground">Review and appeal flagged violations</p>
        </motion.div>

        <div className="space-y-4">
          {flaggedViolations.map((v, i) => (
            <GlassCard key={v.id} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-sm">{v.violation}</h3>
                    <StatusBadge status={v.status} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{v.explanation}</p>
                  <p className="text-xs text-muted-foreground">ID: {v.id} · {v.time}</p>
                </div>
                {v.status === "pending" && (
                  <button
                    onClick={() => setSelectedViolation(v.id)}
                    className="gradient-btn self-start whitespace-nowrap text-xs"
                  >
                    Submit Appeal
                  </button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        <AnimatePresence>
          {selectedViolation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card glow-effect p-8 w-full max-w-lg"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-display font-bold text-lg">Submit Appeal</h2>
                  <button onClick={() => setSelectedViolation(null)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Violation ID</label>
                    <input
                      value={selectedViolation}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Your Explanation</label>
                    <textarea
                      value={appealText}
                      onChange={(e) => setAppealText(e.target.value)}
                      rows={4}
                      placeholder="Explain why this violation should be reconsidered..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Upload Evidence (optional)</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                      <p className="text-xs text-muted-foreground">Click to upload supporting evidence</p>
                    </div>
                  </div>
                  <button onClick={handleSubmit} className="gradient-btn w-full py-3">
                    Submit Appeal
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AppealPage;
