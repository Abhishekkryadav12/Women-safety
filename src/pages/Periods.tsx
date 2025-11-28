import React from "react";
import { Droplet, HeartPulse, CalendarDays, AlertCircle, Apple } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Periods = () => {
  const selfCareTips = [
    "Hydrated raho — pani aur herbal tea zyda lo.",
    "Iron-rich foods jaise spinach, beetroot aur dry fruits apni diet me lo.",
    "Period pain ke liye heating pad ya gentle yoga try karo.",
    "Stress kam karne ke liye meditation aur rest zaroor lo.",
    "Regular exercise aur balanced diet cycle ko healthy banati hai.",
  ];

  const emergencyCare = [
    "Agar period 7 din se zyada chale ya bahut heavy flow ho, doctor se consult karo.",
    "Severe cramps ya dizziness ho to rest lo aur medical help lo.",
    "Irregular cycles repeat ho rahe ho to gynaecologist ko zaroor dikhao.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-rose-600">
        <Droplet className="w-8 h-8 text-rose-600" /> Periods & Menstrual Health
      </h1>

      {/* 🌺 About Section */}
      <Card className="w-full max-w-3xl mb-8 shadow-md border border-rose-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-rose-600">
            <HeartPulse className="text-rose-500" /> Understanding Your Cycle
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700">
          <p>
            Menstrual cycle har month uterus ke lining build aur shed karne ka natural process hai.
            Average cycle 28 din ka hota hai (kabhi 24-35 din tak bhi normal hai).
            Har body unique hoti hai — so apni rhythm samajhna important hai.
          </p>
        </CardContent>
      </Card>

      {/* 🍎 Self-care Tips */}
      <Card className="w-full max-w-3xl mb-8 shadow-md border border-rose-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-rose-600">
            <Apple className="text-rose-500" /> Self-Care & Nutrition Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {selfCareTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 🩸 Emergency Advice */}
      <Card className="w-full max-w-3xl shadow-md border border-rose-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-rose-600">
            <AlertCircle className="text-rose-500" /> When to Seek Medical Help
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {emergencyCare.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 🗓️ Period Tracker Note */}
      <div className="mt-10 text-center max-w-xl">
        <CalendarDays className="w-10 h-10 text-rose-500 mx-auto mb-3 animate-pulse" />
        <p className="text-lg italic text-gray-600">
          “Track your cycle regularly to understand your body better — awareness brings comfort & control.”
        </p>
      </div>
    </div>
  );
};

export default Periods;
