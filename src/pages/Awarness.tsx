import React from "react";
import {
  BookOpen,
  Scale,
  HeartPulse,
  Lock,
  Globe2,
  Users,
  Shield,
  Phone,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const AwarenessGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#3697d3] mb-8 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-[#3697d3]" />
          Women Safety & Awareness Guide
        </h1>

        {/* 🧑‍⚖️ Legal Awareness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Scale className="text-[#3697d3]" /> Legal Awareness
          </h2>
          <p className="mb-3 text-gray-700">
            Know your rights and laws that safeguard women in India.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Protection of Women from Domestic Violence Act, 2005:</strong> 
              Protects against physical, sexual, verbal, emotional, and economic abuse.
            </li>
            <li>
              <strong>Sexual Harassment at Workplace Act, 2013:</strong> 
              Ensures safe workplaces with internal complaint committees.
            </li>
            <li>
              <strong>Dowry Prohibition Act, 1961:</strong> 
              Makes dowry demand or giving punishable under law.
            </li>
            <li>
              <strong>Right to Free Legal Aid:</strong> 
              Women can seek free legal help via District Legal Services Authority.
            </li>
            <li>
              <strong>IPC Section 498A:</strong> 
              Protects against cruelty by husband or relatives.
            </li>
          </ul>
        </section>

        {/* ❤️ Health & Medical Awareness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <HeartPulse className="text-pink-500" /> Health & Medical Awareness
          </h2>
          <p className="mb-3 text-gray-700">
            Take care of your body and mind with essential health awareness.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Understand menstrual hygiene, safe periods, and nutrition balance.</li>
            <li>Regular check-ups for reproductive and breast health.</li>
            <li>Mental health counselling for stress and trauma recovery.</li>
            <li>Use government schemes like <strong>Janani Suraksha Yojana</strong> for maternal aid.</li>
            <li>Awareness about hygiene products and emergency sanitary facilities.</li>
          </ul>
        </section>

        {/* 🔐 Cyber & Digital Safety */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Lock className="text-purple-500" /> Cyber & Digital Safety
          </h2>
          <p className="mb-3 text-gray-700">
            Learn how to secure your online identity and prevent cybercrimes.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Use strong passwords with mix of letters, numbers, and symbols.</li>
            <li>Enable Two-Factor Authentication on all accounts.</li>
            <li>Report online abuse or harassment at <strong>cybercrime.gov.in</strong>.</li>
            <li>Never share OTP, bank info, or personal photos with strangers.</li>
            <li>Use verified privacy and safety tools for browsing protection.</li>
          </ul>
        </section>

        {/* 🧍 Self-Defense & Emergency Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Shield className="text-[#3697d3]" /> Self-Defense & Emergency Tools
          </h2>
          <p className="mb-3 text-gray-700">
            Empower yourself with practical defense and digital safety tools.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Learn basic self-defense through certified workshops or online videos.</li>
            <li>Keep a personal safety alarm or pepper spray during travel.</li>
            <li>Use mobile SOS features for instant help (press power button 3 times).</li>
            <li>Install safety apps like <strong>bSafe</strong>, <strong>112 India</strong>, or <strong>Raksha</strong>.</li>
            <li>Always keep emergency contacts accessible in phone favorites.</li>
          </ul>
        </section>

        {/* 🌐 Social & NGO Awareness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Users className="text-green-500" /> Social & NGO Awareness
          </h2>
          <p className="mb-3 text-gray-700">
            Build connections with verified NGOs and women safety communities.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Reach out to NGOs like <strong>Snehi</strong>, <strong>Sakhi</strong>, and <strong>Jagori</strong>.</li>
            <li>Participate in awareness campaigns and digital literacy drives.</li>
            <li>Report unsafe zones using “Safe Places” app module.</li>
            <li>Encourage open conversations about equality and empowerment.</li>
          </ul>
        </section>

        {/* 🌏 Global Awareness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Globe2 className="text-orange-500" /> Global Awareness
          </h2>
          <p className="mb-3 text-gray-700">
            Learn from international initiatives that promote gender safety.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>UN Women’s HeForShe Campaign</strong> promotes global gender equality.</li>
            <li>Study best practices like UK’s “Ask for Angela” safety code.</li>
            <li>Access global helplines for travellers and expats in distress.</li>
          </ul>
        </section>

        {/* ☎️ Helpline Resources */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Phone className="text-red-500" /> 24x7 National Helplines
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Women Helpline:</strong> 1091</li>
            <li><strong>Police:</strong> 100</li>
            <li><strong>Emergency Number (All-in-One):</strong> 112</li>
            <li><strong>Domestic Violence Helpline:</strong> 181</li>
            <li><strong>Cybercrime Helpline:</strong> 1930</li>
          </ul>
        </section>

        <div className="text-center border-t pt-6">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#3697d3]" />
            Empowered Women, Safer Future ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwarenessGuide;
