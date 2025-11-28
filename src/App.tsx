import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🔹 Import all pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SelfDefence from "./pages/SelfDefence";
import DomesticViolence from "./pages/DomesticViolence";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";
import IncidentReport from "./pages/IncidentReport";
import SafePlaces from "./pages/SafePlaces";
import Community from "./pages/Community";
import LegalRights from "./pages/LegalRights";
import Camera from "./pages/Camera";
import Awarness from "./pages/Awarness";
import NotFound from "./pages/NotFound";

// 🔹 Newly added pages
import DigitalSafety from "./pages/DigitalSafety";
import TravelSafety from "./pages/Travelsafety";
import MentalHealth from "./pages/MentalHealth";
import Periods from "./pages/Periods"; // ✅ Added new page

// 🔹 React Query setup
const queryClient = new QueryClient();

// 🔒 Protected route setup
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// 🔹 Main App Component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/self-defence"
            element={
              <ProtectedRoute>
                <SelfDefence />
              </ProtectedRoute>
            }
          />

          <Route
            path="/domestic-violence"
            element={
              <ProtectedRoute>
                <DomesticViolence />
              </ProtectedRoute>
            }
          />

          <Route
            path="/emergency"
            element={
              <ProtectedRoute>
                <Emergency />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/incident-report"
            element={
              <ProtectedRoute>
                <IncidentReport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/safe-places"
            element={
              <ProtectedRoute>
                <SafePlaces />
              </ProtectedRoute>
            }
          />

          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />

          <Route
            path="/legal-rights"
            element={
              <ProtectedRoute>
                <LegalRights />
              </ProtectedRoute>
            }
          />

          <Route
            path="/awareness-guide"
            element={
              <ProtectedRoute>
                <Awarness />
              </ProtectedRoute>
            }
          />

          <Route
            path="/camera"
            element={
              <ProtectedRoute>
                <Camera />
              </ProtectedRoute>
            }
          />

          {/* 🔹 New Feature Routes */}
          <Route
            path="/digital-safety"
            element={
              <ProtectedRoute>
                <DigitalSafety />
              </ProtectedRoute>
            }
          />

          <Route
            path="/travel-safety"
            element={
              <ProtectedRoute>
                <TravelSafety />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mental-health"
            element={
              <ProtectedRoute>
                <MentalHealth />
              </ProtectedRoute>
            }
          />

          {/* ✅ Periods Route */}
          <Route
            path="/periods"
            element={
              <ProtectedRoute>
                <Periods />
              </ProtectedRoute>
            }
          />

          {/* ❌ 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
