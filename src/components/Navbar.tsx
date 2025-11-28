import { NavLink, useNavigate } from "react-router-dom";
import { Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const navLinks = [
    { to: "/self-defence", label: "Self Defence" },
    { to: "/domestic-violence", label: "Domestic Violence" },
    { to: "/emergency", label: "Emergency" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <nav className="bg-card border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/dashboard" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Shield className="h-6 w-6" />
            <span>Brahmastra</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="ml-2"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <Button onClick={handleLogout} variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
