import Navbar from "@/components/Navbar";
import AnalyticsCharts from "@/components/AnalyticsCharts";
import DashboardWidgets from "@/components/DashboardWidgets";
import { motion } from "framer-motion";

const Reports = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display font-bold text-2xl mb-1">Reports</h1>
        <p className="text-sm text-muted-foreground">Detailed analytics and compliance reports</p>
      </motion.div>
      <DashboardWidgets />
      <AnalyticsCharts />
    </main>
  </div>
);

export default Reports;
