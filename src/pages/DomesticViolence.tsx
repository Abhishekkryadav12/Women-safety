import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, FileText, AlertTriangle, Info } from "lucide-react";

const DomesticViolence = () => {
  const navigate = useNavigate();

  const helplineNumbers = [
    { name: "Women Helpline", number: "181", available: "24/7" },
    { name: "Domestic Violence Helpline", number: "1091", available: "24/7" },
    { name: "Police Emergency", number: "100", available: "24/7" },
    { name: "National Commission for Women", number: "7827-170-170", available: "10 AM - 6 PM" },
  ];

  const articles = [
    {
      title: "Recognizing Domestic Violence",
      content: "Learn to identify various forms of domestic violence including physical, emotional, financial, and psychological abuse."
    },
    {
      title: "Safety Planning",
      content: "Create a personal safety plan including emergency contacts, safe places to go, and important documents to keep ready."
    },
    {
      title: "Legal Rights and Protection",
      content: "Understand your legal rights under the Protection of Women from Domestic Violence Act, 2005."
    }
  ];

  const emergencySteps = [
    "Move to a safe location immediately",
    "Call emergency helpline (181 or 1091)",
    "Inform a trusted friend or family member",
    "Document evidence (photos, medical records, messages)",
    "Contact local police station",
    "Seek legal assistance and protection orders"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className="h-8 w-8 text-primary" />
            Domestic Violence Awareness
          </h1>
          <p className="text-muted-foreground">
            Information, support, and resources for victims of domestic violence
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-destructive bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            If you are in immediate danger, call 100 (Police) or 181 (Women Helpline) immediately.
          </AlertDescription>
        </Alert>

        {/* Helpline Numbers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Phone className="h-6 w-6 text-primary" />
            Emergency Helpline Numbers
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {helplineNumbers.map((helpline) => (
              <Card key={helpline.number} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{helpline.name}</h3>
                  <p className="text-2xl font-bold text-primary my-2">{helpline.number}</p>
                  <p className="text-sm text-muted-foreground">Available: {helpline.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Steps */}
        <section className="mb-12">
          <Card className="shadow-soft border-primary">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Info className="h-5 w-5" />
                Emergency Action Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {emergencySteps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Information & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.title} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Report Incident */}
        <Card className="shadow-medium bg-primary/5 border-primary">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Need to Report an Incident?</h3>
            <p className="text-muted-foreground mb-4">
              Report harassment or abuse anonymously through our secure incident reporting system
            </p>
            <Button onClick={() => navigate("/incident-report")} size="lg">
              Report Incident
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DomesticViolence;
