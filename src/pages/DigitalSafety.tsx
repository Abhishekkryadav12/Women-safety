import React from "react";
import {
  ShieldCheck,
  Lock,
  Wifi,
  Smartphone,
  Key,
  AlertTriangle,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const DigitalSafety = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#3697d3] mb-8 flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-[#3697d3]" />
          Digital Safety & Awareness Guide
        </h1>

        <p className="text-gray-700 mb-6">
          Protect your identity, privacy, and data while staying safe in the
          digital world. Learn best practices, tips, and reporting options to
          ensure your online presence is secure and positive.
        </p>

        {/* Quick Safety Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-[#3697d3]" />
              <h3 className="font-semibold text-lg">Account Security</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Use strong, unique passwords and enable two-factor authentication
              (2FA) on all major accounts.
            </p>
          </div>

          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Wifi className="w-6 h-6 text-[#3697d3]" />
              <h3 className="font-semibold text-lg">Safe Connectivity</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Avoid public Wi-Fi for sensitive transactions. Use VPNs for
              additional privacy and encryption.
            </p>
          </div>

          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="w-6 h-6 text-[#3697d3]" />
              <h3 className="font-semibold text-lg">Mobile Privacy</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Review app permissions regularly. Turn off mic, camera, and
              location access when not needed.
            </p>
          </div>

          <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Key className="w-6 h-6 text-[#3697d3]" />
              <h3 className="font-semibold text-lg">Password Hygiene</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Change passwords periodically and use a password manager to store
              them safely.
            </p>
          </div>
        </div>

        {/* Awareness Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#3697d3]">
            Key Digital Awareness Tips
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Phishing Scams:</strong> Don’t click unknown links or
              download suspicious attachments.
            </li>
            <li>
              <strong>Privacy Settings:</strong> Keep your profiles private and
              limit who can access your personal information.
            </li>
            <li>
              <strong>Device Safety:</strong> Update your OS and apps
              frequently, and install apps only from trusted stores.
            </li>
            <li>
              <strong>Data Encryption:</strong> Encrypt sensitive files and
              backups to prevent misuse.
            </li>
            <li>
              <strong>Digital Footprint:</strong> Think before sharing personal
              photos or data online.
            </li>
            <li>
              <strong>Mental Health:</strong> Limit screen time and avoid
              exposure to toxic or triggering online environments.
            </li>
          </ul>
        </section>

        {/* Reporting Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#3697d3]">
            Report & Support Channels
          </h2>
          <p className="mb-3 text-gray-700">
            If you face online abuse, financial fraud, or harassment, report
            immediately through verified platforms.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Cybercrime Portal:</strong>{" "}
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3697d3] underline"
              >
                cybercrime.gov.in
              </a>
            </li>
            <li>
              <strong>Helpline Number:</strong> Call <span>1930</span> for
              financial cyber fraud.
            </li>
            <li>
              <strong>Women Helpline:</strong> Dial <span>1091</span> or{" "}
              <span>112</span> for emergency women safety assistance.
            </li>
            <li>
              <strong>In-App Options:</strong> Use “Report Now” and “Privacy
              Check” buttons for direct help.
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#3697d3] text-white rounded-md flex items-center gap-2 text-sm font-medium shadow-sm"
            >
              <AlertTriangle className="w-4 h-4" /> Report Cybercrime
            </a>
            <a
              href="#"
              className="px-5 py-2 border border-[#3697d3] text-[#3697d3] rounded-md flex items-center gap-2 text-sm font-medium"
            >
              <ShieldCheck className="w-4 h-4" /> Run Privacy Check
            </a>
          </div>
        </section>

        {/* Global Awareness */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-[#3697d3] flex items-center gap-2">
            <Globe2 className="text-[#3697d3]" /> Global Digital Awareness
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              Learn from <strong>UN Women’s Cyber Safety</strong> and{" "}
              <strong>#TechForHer</strong> programs promoting global digital
              inclusion.
            </li>
            <li>
              Many countries have 24×7 cyber emergency response centers for
              online safety support.
            </li>
            <li>
              Adopt successful security measures like GDPR and AI-based threat
              detection used internationally.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DigitalSafety;
