import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import DashboardWidgets from "@/components/DashboardWidgets";
import LogCard from "@/components/LogCard";
import AnalyticsCharts from "@/components/AnalyticsCharts";

const violations = [
  { id: "V-1042", violation: "Food handler not wearing gloves", time: "12:04 PM", explanation: "AI detected bare hand contact with ready-to-eat food in kitchen zone B.", status: "flagged" as const },
  { id: "V-1041", violation: "Temperature deviation in cold storage", time: "11:22 AM", explanation: "Refrigerator unit 3 temperature recorded at 8.2°C, exceeding 5°C threshold.", status: "flagged" as const },
  { id: "V-1040", violation: "Surface contamination detected", time: "10:15 AM", explanation: "AI visual analysis flagged unsanitized cutting board after raw meat processing.", status: "certified" as const },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display font-bold text-2xl mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Real-time hygiene monitoring overview</p>
      </motion.div>

      <DashboardWidgets />

      <section>
        <h2 className="font-display font-semibold text-lg mb-4">Analytics</h2>
        <AnalyticsCharts />
      </section>

      <section>
        <h2 className="font-display font-semibold text-lg mb-4">Violation Logs</h2>
        <div className="space-y-4">
          {violations.map((v, i) => (
            <LogCard key={v.id} {...v} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default Dashboard;
