import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center shadow-medium">
            <Shield className="h-12 w-12 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            SafeGuard
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Women Safety & Awareness System
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your comprehensive platform for safety resources, emergency assistance, and community support
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/signup">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
              Login
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 rounded-lg bg-card shadow-soft">
            <h3 className="font-semibold text-lg mb-2 text-primary">24/7 Emergency Support</h3>
            <p className="text-sm text-muted-foreground">
              Quick access to emergency contacts and SOS alerts
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card shadow-soft">
            <h3 className="font-semibold text-lg mb-2 text-primary">Safety Resources</h3>
            <p className="text-sm text-muted-foreground">
              Self-defense training, legal rights, and awareness information
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card shadow-soft">
            <h3 className="font-semibold text-lg mb-2 text-primary">Community Support</h3>
            <p className="text-sm text-muted-foreground">
              Connect with others in a safe, supportive environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
