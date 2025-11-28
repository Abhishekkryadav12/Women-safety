import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Scale,
  MapPin,
  FileText,
  Users,
  Camera,
  AlertTriangle,
  WifiOff,
  Phone,
  Siren,
  HeartHandshake,
  Shield,
  BookOpen,
  Lock,
  Bus,
  Smile,
  Droplets,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import SOSButton from "@/components/SOSButton";
import DashboardCard from "@/components/DashboardCard";
import EmergencyCard from "@/components/EmergencyCard";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Dashboard = () => {
  const navigate = useNavigate();
  const isOffline = false;

  const featureCards = [
    { title: "Legal Rights", description: "Know your legal protections", icon: Scale, route: "/legal-rights" },
    { title: "Safe Places", description: "Find safe zones nearby", icon: MapPin, route: "/safe-places" },
    { title: "Incident Report", description: "Report incidents anonymously", icon: FileText, route: "/incident-report" },
    { title: "Community Forum", description: "Connect with supportive community", icon: Users, route: "/community" },
    { title: "Camera Monitoring", description: "AI-based live safety watch", icon: Camera, route: "/camera" },

    { title: "Self Defence", description: "Interactive tutorials for safety", icon: Shield, route: "/self-defence" },
    { title: "Awareness Guide", description: "Educate yourself with case studies", icon: BookOpen, route: "/awareness-guide" },
    { title: "Digital Safety", description: "Stay secure from cyber crimes", icon: Lock, route: "/digital-safety" },
    { title: "Travel Safety", description: "Track route and alert contacts", icon: Bus, route: "/travel-safety" },
    { title: "Mental Health", description: "Talk to counsellors anytime", icon: Smile, route: "/mental-health" },
    { title: "Period & Hormonal Health", description: "Track cycles, health & mood", icon: Droplets, route: "/period-tracker" },
  ];

  const emergencyContacts = [
    { title: "Police", number: "100", icon: Phone },
    { title: "Emergency", number: "112", icon: Siren },
    { title: "Women Helpline", number: "1091", icon: HeartHandshake },
    { title: "Domestic Violence", number: "181", icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      <main className="container mx-auto px-4 py-8 pb-24">
        {isOffline && (
          <Alert className="border-destructive bg-destructive/5 mb-6">
            <WifiOff className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              You are offline. Cached data used for emergency assistance.
            </AlertDescription>
          </Alert>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Emergency Quick Dial</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyContacts.map((contact) => (
              <EmergencyCard key={contact.title} {...contact} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Smart Safety, Health & Awareness Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <DashboardCard key={card.title} {...card} onClick={() => navigate(card.route)} />
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-[9999]">
        <SOSButton />
      </div>
    </div>
  );
};

export default Dashboard;
