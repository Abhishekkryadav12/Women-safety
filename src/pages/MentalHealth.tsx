import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Smile, Phone, Brain, CheckCircle2 } from "lucide-react";

const MentalHealth = () => {
  const wellnessTips = [
    "Roz 10-15 minutes meditation karo aur deep breathing practice karo.",
    "Kisi trusted dost ya family member se apni feelings share karo.",
    "Social media se break lo jab bhi overwhelmed feel karo.",
    "Regular physical activity jaise walk ya yoga stress kam karta hai.",
    "Sufficient sleep aur healthy diet maintain karo.",
  ];

  const helplines = [
    { name: "Vandrevala Foundation Helpline", number: "1860 266 2345" },
    { name: "AASRA Helpline", number: "91-9820466726" },
    { name: "Snehi Helpline", number: "91-9582208181" },
    { name: "iCall Mental Health Helpline", number: "91-9152987821" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-primary">
        <Brain className="w-8 h-8 text-primary" /> Mental Health & Wellness
      </h1>

      {/* 🌿 Mindfulness Tips */}
      <Card className="w-full max-w-2xl mb-8 shadow-lg border border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Smile className="text-green-500" /> Daily Wellness Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            {wellnessTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 💬 Emotional Support Lines */}
      <Card className="w-full max-w-2xl shadow-lg border border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Phone className="text-red-500" /> Emotional Support Helplines (India)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            {helplines.map((h, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{h.name}</span>
                <span className="font-semibold text-primary">{h.number}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ❤️ Self-Love Quote */}
      <div className="mt-10 text-center max-w-xl">
        <Heart className="w-10 h-10 text-pink-500 mx-auto mb-3 animate-bounce" />
        <p className="text-lg italic text-muted-foreground">
          "It's okay to not be okay — take a pause, breathe, and remind yourself: you're doing your best."
        </p>
      </div>
    </div>
  );
};

export default MentalHealth;
