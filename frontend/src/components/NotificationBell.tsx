import { useState } from "react";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { id: 1, text: "Violation detected at 12:04 PM", time: "2 min ago" },
  { id: 2, text: "Compliance score updated to 92", time: "15 min ago" },
  { id: 3, text: "Appeal #V-1042 reviewed", time: "1 hr ago" },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="absolute right-0 top-12 w-80 glass-card p-4 z-50"
          >
            <h4 className="font-display font-semibold text-sm mb-3">Notifications</h4>
            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.id} className="flex justify-between items-start gap-3 text-sm">
                  <p className="text-foreground/80">{n.text}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{n.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBell;
