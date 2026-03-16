import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const violationsData = [
  { day: "Mon", violations: 3 },
  { day: "Tue", violations: 1 },
  { day: "Wed", violations: 4 },
  { day: "Thu", violations: 2 },
  { day: "Fri", violations: 0 },
  { day: "Sat", violations: 1 },
  { day: "Sun", violations: 2 },
];

const complianceData = [
  { week: "W1", score: 78 },
  { week: "W2", score: 82 },
  { week: "W3", score: 85 },
  { week: "W4", score: 88 },
  { week: "W5", score: 92 },
];

const aiDecisionData = [
  { time: "8AM", decisions: 5 },
  { time: "10AM", decisions: 12 },
  { time: "12PM", decisions: 18 },
  { time: "2PM", decisions: 8 },
  { time: "4PM", decisions: 14 },
  { time: "6PM", decisions: 6 },
];

const chartStyle = {
  fontSize: 11,
  fill: "hsl(215 20% 55%)",
};

const AnalyticsCharts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
      <h3 className="font-display font-semibold text-sm mb-4">Violations Per Day</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={violationsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 16% 18%)" />
          <XAxis dataKey="day" tick={chartStyle} axisLine={false} />
          <YAxis tick={chartStyle} axisLine={false} />
          <Tooltip contentStyle={{ background: "hsl(220 20% 12%)", border: "1px solid hsl(220 16% 22%)", borderRadius: 12, fontSize: 12 }} />
          <Bar dataKey="violations" fill="hsl(160 84% 44%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
      <h3 className="font-display font-semibold text-sm mb-4">Compliance Score Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={complianceData}>
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160 84% 44%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160 84% 44%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 16% 18%)" />
          <XAxis dataKey="week" tick={chartStyle} axisLine={false} />
          <YAxis tick={chartStyle} axisLine={false} domain={[70, 100]} />
          <Tooltip contentStyle={{ background: "hsl(220 20% 12%)", border: "1px solid hsl(220 16% 22%)", borderRadius: 12, fontSize: 12 }} />
          <Area type="monotone" dataKey="score" stroke="hsl(160 84% 44%)" fill="url(#scoreGrad)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
      <h3 className="font-display font-semibold text-sm mb-4">AI Decision Timeline</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={aiDecisionData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 16% 18%)" />
          <XAxis dataKey="time" tick={chartStyle} axisLine={false} />
          <YAxis tick={chartStyle} axisLine={false} />
          <Tooltip contentStyle={{ background: "hsl(220 20% 12%)", border: "1px solid hsl(220 16% 22%)", borderRadius: 12, fontSize: 12 }} />
          <Line type="monotone" dataKey="decisions" stroke="hsl(187 80% 48%)" strokeWidth={2} dot={{ fill: "hsl(187 80% 48%)", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
);

export default AnalyticsCharts;
