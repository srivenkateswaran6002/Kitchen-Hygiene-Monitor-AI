import { cn } from "@/lib/utils";

type Status = "certified" | "flagged" | "pending" | "accepted" | "rejected";

const statusConfig: Record<Status, { label: string; className: string }> = {
  certified: { label: "✅ Certified", className: "bg-success/20 text-success border-success/30" },
  flagged: { label: "⚠️ Flagged", className: "bg-warning/20 text-warning border-warning/30" },
  pending: { label: "🟡 Pending Review", className: "bg-warning/20 text-warning border-warning/30" },
  accepted: { label: "🟢 Appeal Accepted", className: "bg-success/20 text-success border-success/30" },
  rejected: { label: "🔴 Appeal Rejected", className: "bg-destructive/20 text-destructive border-destructive/30" },
};

const StatusBadge = ({ status }: { status: Status }) => {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border", config.className)}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
