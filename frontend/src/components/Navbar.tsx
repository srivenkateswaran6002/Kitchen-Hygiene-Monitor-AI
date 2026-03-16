import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, ShieldAlert, Award, LogOut, ShieldCheck } from "lucide-react";
import NotificationBell from "./NotificationBell";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/appeal", label: "Appeal Violation", icon: ShieldAlert },
  { to: "/certification", label: "Certification", icon: Award },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-border/50 bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-primary" />
            <span className="font-display font-bold text-lg gradient-text hidden sm:inline">
              Prepared with Hygiene
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  pathname === item.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NotificationBell />
            <Link to="/" className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
