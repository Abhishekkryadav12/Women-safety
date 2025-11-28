import { Droplet, FirstAidKit, MapPin, ShoppingBag, Heart, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SanitaryHealth = () => {
  const essentials = [
    "Always carry extra sanitary pads or tampons for emergencies.",
    "Change pads every 4–6 hours to avoid infection.",
    "Use gentle, unscented soaps while cleaning intimate areas.",
    "Keep a small hygiene pouch with wipes, sanitizer, and extra underwear.",
  ];

  const emergencyTips = [
    "Agar pads/tampons available nahi hain — use clean, soft cotton cloth temporarily (aur turant change karo).",
    "Agar bahut zyada bleeding ho rahi ho (1 pad <1 hour me bhar jaye), turant doctor se milo.",
    "Agar infection symptoms (itching, burning, foul smell) dikhe to delay mat karo — medical consult lo.",
  ];

  const helplines = [
    { name: "Women Helpline (All India)", number: "1091" },
    { name: "Emergency Helpline", number: "112" },
    { name: "National Health Helpline", number: "1800-180-1104" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-pink-600">
        <FirstAidKit className="w-8 h-8 text-pink-600" /> Emergency Sanitary Health
      </h1>

      {/* 💧 Hygiene Essentials */}
      <Card className="w-full max-w-3xl mb-8 shadow-md border border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-pink-600">
            <Droplet className="text-pink-500" /> Hygiene Essentials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {essentials.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ⚠️ Emergency Tips */}
      <Card className="w-full max-w-3xl mb-8 shadow-md border border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-pink-600">
            <AlertTriangle className="text-pink-500" /> Emergency Situations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {emergencyTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 🏪 Nearby Help */}
      <Card className="w-full max-w-3xl mb-8 shadow-md border border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-pink-600">
            <MapPin className="text-pink-500" /> Find Nearby Sanitary Help
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            In case of urgent sanitary needs, visit nearby:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pharmacies or medical stores for pads and tampons</li>
            <li>Public toilets or hospitals (many provide emergency supplies)</li>
            <li>Women’s shelters or community centers (free sanitary support)</li>
          </ul>
          <a
            href="https://www.google.com/maps/search/nearby+medical+store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-pink-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-pink-700"
          >
            <ShoppingBag className="w-4 h-4" /> Find Nearby Stores
          </a>
        </CardContent>
      </Card>

      {/* ☎️ Helplines */}
      <Card className="w-full max-w-3xl shadow-md border border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-pink-600">
            <Heart className="text-pink-500" /> Emergency Helplines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-700">
            {helplines.map((line, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{line.name}</span>
                <span className="font-semibold text-pink-600">{line.number}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ❤️ Footer Message */}
      <div className="mt-10 text-center max-w-xl">
        <Heart className="w-10 h-10 text-pink-500 mx-auto mb-3 animate-bounce" />
        <p className="text-lg italic text-gray-600">
          “Menstrual hygiene is self-care — be prepared, be proud, and never hesitate to ask for help.”
        </p>
      </div>
    </div>
  );
};

export default SanitaryHealth;
