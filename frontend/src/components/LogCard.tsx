import { motion } from "framer-motion";
import { Camera, Clock } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { useNavigate } from "react-router-dom";

interface LogCardProps {
  id: string;
  violation: string;
  time: string;
  explanation: string;
  status: "flagged" | "certified";
  delay?: number;
}

const LogCard = ({ id, violation, time, explanation, status, delay = 0 }: LogCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass-card p-5 flex flex-col sm:flex-row gap-4"
    >
      <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
        <Camera className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="font-display font-semibold text-sm">{violation}</h4>
          <StatusBadge status={status} />
        </div>
        <p className="text-xs text-muted-foreground mb-2">{explanation}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{time}</span>
          <span>ID: {id}</span>
        </div>
      </div>
      {status === "flagged" && (
        <button
          onClick={() => navigate("/appeal")}
          className="gradient-btn self-start whitespace-nowrap text-xs"
        >
          Appeal
        </button>
      )}
    </motion.div>
  );
};

export default LogCard;
