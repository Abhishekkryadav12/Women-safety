import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  MapPin,
  Phone,
  CheckCircle,
  Compass,
  BellRing,
  AlertTriangle,
  Smartphone,
  Sun,
} from "lucide-react";

const TravelSafety = () => {
  const [expanded, setExpanded] = useState({
    tips: true,
    tools: false,
    actions: false,
    contacts: false,
  });

  const travelTips = [
    "Share your travel plans with family or trusted friends.",
    "Avoid using public Wi-Fi for sensitive information like banking or passwords.",
    "Always carry a portable charger and emergency cash.",
    "Keep soft copies of your ID proofs and travel documents on the cloud.",
    "Avoid accepting lifts or rides from strangers.",
    "Verify cab details and driver photo before starting a trip.",
    "During late night travel, share your live location with an emergency contact.",
    "Book rides and hotels only through verified apps or official websites.",
    "Get travel insurance for medical emergencies.",
    "Understand local language and cultural norms for safer interaction.",
  ];

  const smartTools = [
    "Use 'Find My Phone' or Google Location Sharing during trips.",
    "Install verified safety apps such as 'bSafe', '112 India', or 'Raksha App'.",
    "Enable the SOS feature on your smartphone for emergency alerts.",
    "Download offline maps in case of low network coverage.",
    "Keep Bluetooth and location visible only to trusted devices.",
    "Enable app notifications for travel alerts or security warnings.",
    "Carry a small power bank and portable light for night travel.",
  ];

  const emergencyActions = [
    "Dial 112 in case of an emergency — it is the All-in-One National Helpline.",
    "Press the SOS button on your phone to alert nearby people.",
    "Observe your surroundings and move to a safe area.",
    "Seek help from the nearest police station or public area if needed.",
    "For night travel, choose crowded and well-lit routes.",
  ];

  const emergencyContacts = [
    { name: "Police", number: "100" },
    { name: "Women Helpline", number: "1091" },
    { name: "Ambulance", number: "108" },
    { name: "Tourist Helpline (India)", number: "1363" },
    { name: "Railway Helpline", number: "139" },
    { name: "Airline Emergency", number: "112" },
  ];

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderList = (list, iconColor) =>
    list.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <CheckCircle className={`w-5 h-5 ${iconColor} mt-1`} />
        {item}
      </li>
    ));

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10 flex items-center gap-2 text-[#3697d3]">
        <Shield className="w-8 h-8 text-[#3697d3]" /> Travel Safety & Awareness Guide
      </h1>

      {/* Travel Tips */}
      <Card
        className="w-full max-w-3xl mb-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => toggleExpand("tips")}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-lg text-[#3697d3]">
            <MapPin className="text-[#3697d3]" /> Smart Travel Tips
          </CardTitle>
          <span className="text-gray-500">{expanded.tips ? "-" : "+"}</span>
        </CardHeader>
        {expanded.tips && (
          <CardContent>
            <ul className="space-y-3 text-gray-700">{renderList(travelTips, "text-green-500")}</ul>
          </CardContent>
        )}
      </Card>

      {/* Smart Tools */}
      <Card
        className="w-full max-w-3xl mb-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => toggleExpand("tools")}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-lg text-[#3697d3]">
            <Compass className="text-[#3697d3]" /> Smart Safety Tools
          </CardTitle>
          <span className="text-gray-500">{expanded.tools ? "-" : "+"}</span>
        </CardHeader>
        {expanded.tools && (
          <CardContent>
            <ul className="space-y-3 text-gray-700">{renderList(smartTools, "text-yellow-500")}</ul>
          </CardContent>
        )}
      </Card>

      {/* Emergency Actions */}
      <Card
        className="w-full max-w-3xl mb-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => toggleExpand("actions")}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-lg text-[#3697d3]">
            <AlertTriangle className="text-[#3697d3]" /> Emergency Response Actions
          </CardTitle>
          <span className="text-gray-500">{expanded.actions ? "-" : "+"}</span>
        </CardHeader>
        {expanded.actions && (
          <CardContent>
            <ul className="space-y-3 text-gray-700">{renderList(emergencyActions, "text-red-500")}</ul>
          </CardContent>
        )}
      </Card>

      {/* Emergency Contacts */}
      <Card
        className="w-full max-w-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => toggleExpand("contacts")}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-lg text-[#3697d3]">
            <Phone className="text-[#3697d3]" /> Important Emergency Contacts
          </CardTitle>
          <span className="text-gray-500">{expanded.contacts ? "-" : "+"}</span>
        </CardHeader>
        {expanded.contacts && (
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              {emergencyContacts.map((contact, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{contact.name}</span>
                  <span className="font-semibold text-[#3697d3]">{contact.number}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>

      <p className="mt-10 text-gray-500 flex items-center gap-2">
        <Sun className="w-5 h-5 text-[#3697d3]" />
        Safe Travels, Empowered Journeys ✨
      </p>
    </div>
  );
};

export default TravelSafety;
