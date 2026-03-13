import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Clock, TrendingUp } from "lucide-react";
import GlassCard from "./GlassCard";

const CircularProgress = ({ value, max = 100 }: { value: number; max?: number }) => {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(220 16% 18%)" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r="40" fill="none"
          stroke="url(#progressGrad)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(160 84% 44%)" />
            <stop offset="100%" stopColor="hsl(187 80% 48%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-bold text-lg">{value}</span>
      </div>
    </div>
  );
};

const DashboardWidgets = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <GlassCard delay={0} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
        <ShieldCheck className="w-6 h-6 text-success" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">Live Hygiene Status</p>
        <p className="font-display font-bold text-success text-lg">Certified</p>
      </div>
    </GlassCard>

    <GlassCard delay={0.1} className="flex items-center gap-4">
      <CircularProgress value={92} />
      <div>
        <p className="text-xs text-muted-foreground">Compliance Score</p>
        <p className="font-display font-bold text-lg">92 / 100</p>
      </div>
    </GlassCard>

    <GlassCard delay={0.2} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-warning" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">Today's Violations</p>
        <p className="font-display font-bold text-lg">3</p>
      </div>
    </GlassCard>

    <GlassCard delay={0.3} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
        <Clock className="w-6 h-6 text-accent" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">Last AI Audit</p>
        <p className="font-display font-bold text-lg">12:30 PM</p>
      </div>
    </GlassCard>
  </div>
);

export default DashboardWidgets;
