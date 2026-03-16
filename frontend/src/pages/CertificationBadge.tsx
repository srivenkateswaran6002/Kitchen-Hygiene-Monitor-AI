import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import { ShieldCheck, Copy, Check, QrCode } from "lucide-react";

const CertificationBadge = () => {
  const [copied, setCopied] = useState(false);
  const certId = "PWH-2026-AX7K92";
  const embedCode = `<a href="https://preparedwithhygiene.ai/verify/${certId}"><img src="https://preparedwithhygiene.ai/badge/${certId}.svg" alt="Prepared with Hygiene - AI Verified" /></a>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-display font-bold text-2xl mb-1">Certification Badge</h1>
          <p className="text-sm text-muted-foreground">Display your AI-verified hygiene certification</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Badge Preview */}
          <GlassCard className="flex flex-col items-center py-12 badge-glow">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-primary" />
              </div>
              <h2 className="font-display font-bold text-xl gradient-text mb-1">Prepared with Hygiene</h2>
              <p className="text-sm text-muted-foreground mb-4">AI Verified Restaurant</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Certification ID:</span>
                <code className="px-2 py-1 rounded-md bg-secondary font-mono">{certId}</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Last Audit: March 12, 2026 · 12:30 PM</p>
            </motion.div>
          </GlassCard>

          {/* QR & Embed */}
          <div className="space-y-6">
            <GlassCard delay={0.1}>
              <h3 className="font-display font-semibold text-sm mb-4">QR Verification Code</h3>
              <div className="w-40 h-40 rounded-xl bg-secondary border border-border flex items-center justify-center mx-auto">
                <QrCode className="w-20 h-20 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Customers can scan to verify certification
              </p>
            </GlassCard>

            <GlassCard delay={0.2}>
              <h3 className="font-display font-semibold text-sm mb-4">Embed Badge on Website</h3>
              <div className="relative">
                <pre className="p-4 rounded-xl bg-secondary text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap break-all font-mono">
                  {embedCode}
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CertificationBadge;
