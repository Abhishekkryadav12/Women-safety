import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shield, Play, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelfDefence = () => {
  const [language, setLanguage] = useState("english");
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState("");

  const techniques = [
    {
      id: "knee-strike",
      title: language === "english" ? "Knee Strike" : "घुटने से प्रहार",
      description: language === "english" 
        ? "An effective close-range defense technique using your knee to strike an attacker's vulnerable areas."
        : "हमलावर के कमजोर क्षेत्रों पर प्रहार करने के लिए अपने घुटने का उपयोग करके एक प्रभावी निकट-सीमा रक्षा तकनीक।",
      steps: language === "english" 
        ? [
            "Stand in a stable position with feet shoulder-width apart",
            "Grab the attacker's shoulders or head for leverage",
            "Drive your knee upward forcefully into the attacker's groin or stomach",
            "Immediately create distance and call for help"
          ]
        : [
            "पैरों को कंधे की चौड़ाई के अनुसार फैलाकर स्थिर स्थिति में खड़े हों",
            "लाभ उठाने के लिए हमलावर के कंधों या सिर को पकड़ें",
            "अपने घुटने को हमलावर की कमर या पेट में जोर से ऊपर की ओर चलाएं",
            "तुरंत दूरी बनाएं और मदद के लिए बुलाएं"
          ],
      videoId: "T7aNSRoDCmg"
    },
    {
      id: "palm-strike",
      title: language === "english" ? "Palm Strike" : "हथेली प्रहार",
      description: language === "english"
        ? "Strike with the heel of your palm to the attacker's nose or chin."
        : "हमलावर की नाक या ठोड़ी पर अपनी हथेली की एड़ी से प्रहार करें।",
      steps: language === "english"
        ? [
            "Keep your fingers curled back to protect them",
            "Strike upward with the heel of your palm",
            "Aim for the nose, chin, or throat",
            "Follow through with the strike and escape"
          ]
        : [
            "अपनी उंगलियों को सुरक्षित रखने के लिए पीछे की ओर मोड़ें",
            "अपनी हथेली की एड़ी से ऊपर की ओर प्रहार करें",
            "नाक, ठोड़ी या गले को निशाना बनाएं",
            "प्रहार के साथ आगे बढ़ें और भागें"
          ],
      videoId: "KVpxP3ZZtAc"
    },
    {
      id: "elbow-strike",
      title: language === "english" ? "Elbow Strike" : "कोहनी प्रहार",
      description: language === "english"
        ? "Use your elbow for powerful close-range strikes."
        : "शक्तिशाली निकट-सीमा प्रहार के लिए अपनी कोहनी का उपयोग करें।",
      steps: language === "english"
        ? [
            "Raise your elbow to shoulder height",
            "Rotate your body for maximum power",
            "Strike horizontally or downward",
            "Target the face, ribs, or solar plexus"
          ]
        : [
            "अपनी कोहनी को कंधे की ऊंचाई तक उठाएं",
            "अधिकतम शक्ति के लिए अपने शरीर को घुमाएं",
            "क्षैतिज या नीचे की ओर प्रहार करें",
            "चेहरे, पसलियों या सोलर प्लेक्सस को निशाना बनाएं"
          ],
      videoId: "U4vfzy7WKbQ"
    }
  ];

  const openVideo = (videoId: string, title: string) => {
    setSelectedTechnique(title);
    setVideoOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              {language === "english" ? "Self Defence Techniques" : "आत्मरक्षा तकनीकें"}
            </h1>
            <p className="text-muted-foreground">
              {language === "english" 
                ? "Learn effective self-defense techniques to protect yourself"
                : "अपनी सुरक्षा के लिए प्रभावी आत्मरक्षा तकनीकें सीखें"}
            </p>
          </div>

          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">हिंदी</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techniques.map((technique) => (
            <Card key={technique.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">{technique.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{technique.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === "english" ? "Steps:" : "चरण:"}
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    {technique.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>

                <Button
                  onClick={() => openVideo(technique.videoId, technique.title)}
                  className="w-full"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {language === "english" ? "Watch Tutorial" : "ट्यूटोरियल देखें"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Centers */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {language === "english" ? "Nearby Training Centers" : "निकटतम प्रशिक्षण केंद्र"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {language === "english"
                ? "Find professional self-defense training centers in your area for hands-on training."
                : "व्यावहारिक प्रशिक्षण के लिए अपने क्षेत्र में पेशेवर आत्मरक्षा प्रशिक्षण केंद्र खोजें।"}
            </p>
          </CardContent>
        </Card>
      </main>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedTechnique}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/T7aNSRoDCmg"
              title="Self Defense Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SelfDefence;
