import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ restaurant: "", owner: "", email: "", password: "", confirm: "" });
  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const fields = [
    { key: "restaurant", label: "Restaurant Name", type: "text", placeholder: "The Green Kitchen" },
    { key: "owner", label: "Owner Name", type: "text", placeholder: "John Doe" },
    { key: "email", label: "Email", type: "email", placeholder: "you@restaurant.com" },
    { key: "password", label: "Password", type: "password", placeholder: "••••••••" },
    { key: "confirm", label: "Confirm Password", type: "password", placeholder: "••••••••" },
  ];

  return (
    <div className="min-h-screen animated-gradient-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-card glow-effect p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="w-12 h-12 text-primary mb-3" />
          <h1 className="font-display font-bold text-2xl gradient-text">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-1">Register your restaurant</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="text-xs text-muted-foreground mb-1 block">{f.label}</label>
              <input
                type={f.type}
                value={(form as any)[f.key]}
                onChange={update(f.key)}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          ))}
          <button type="submit" className="gradient-btn w-full py-3 text-sm font-semibold">Register</button>
          <Link to="/" className="block text-center text-xs text-muted-foreground hover:text-primary transition-colors">
            Back to Login
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
