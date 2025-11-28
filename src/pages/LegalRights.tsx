import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Shield, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LegalRights = () => {
  const legalTopics = [
    {
      title: "Protection of Women from Domestic Violence Act, 2005",
      description: "Comprehensive protection against domestic violence including physical, emotional, sexual, and economic abuse.",
      points: [
        "Right to reside in shared household",
        "Protection orders against violence",
        "Monetary relief and compensation",
        "Custody of children",
        "Right to file complaints at police station"
      ]
    },
    {
      title: "Sexual Harassment at Workplace Act, 2013",
      description: "Protection against sexual harassment at workplace and mechanisms for complaints and redressal.",
      points: [
        "Right to work in safe environment",
        "Internal Complaints Committee (ICC) mandatory",
        "Protection against retaliation",
        "Confidentiality of proceedings",
        "Compensation and penalties"
      ]
    },
    {
      title: "Dowry Prohibition Act, 1961",
      description: "Prohibition of giving or taking dowry in connection with marriage.",
      points: [
        "Dowry demand is a criminal offense",
        "Punishment for dowry death",
        "Right to file complaints",
        "Protection for bride and family",
        "Recovery of dowry articles"
      ]
    }
  ];

  const cybercrimeInfo = [
    "Report cybercrime at cybercrime.gov.in",
    "Save all evidence (screenshots, messages, emails)",
    "Block and report the harasser on all platforms",
    "Contact local cyber cell immediately",
    "File FIR at nearest police station"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            Legal Rights & Information
          </h1>
          <p className="text-muted-foreground">
            Know your legal rights and protections under Indian law
          </p>
        </div>

        <Tabs defaultValue="rights" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="rights">Your Rights</TabsTrigger>
            <TabsTrigger value="cybercrime">Cybercrime</TabsTrigger>
            <TabsTrigger value="legal-steps">Legal Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="rights" className="space-y-6">
            {legalTopics.map((topic, idx) => (
              <Card key={idx} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="space-y-2">
                      {topic.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cybercrime">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Cybercrime Protection & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Common Cybercrimes Against Women:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Online harassment and stalking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Morphing and circulation of obscene content</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Identity theft and impersonation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Revenge porn and blackmail</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Steps to Report:</h3>
                  <ol className="space-y-3">
                    {cybercrimeInfo.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sm pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary">
                  <p className="text-sm font-medium text-primary">
                    📞 National Cybercrime Helpline: 155260
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available 24x7 for reporting cybercrime
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal-steps">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Taking Legal Action
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">How to File a Complaint:</h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-sm">Visit Nearest Police Station</p>
                        <p className="text-sm text-muted-foreground">File an FIR (First Information Report) with details of the incident</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-sm">Collect Evidence</p>
                        <p className="text-sm text-muted-foreground">Medical reports, photos, messages, witness statements</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-sm">Seek Legal Aid</p>
                        <p className="text-sm text-muted-foreground">Free legal aid available through State Legal Services Authority</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      <div>
                        <p className="font-medium text-sm">Follow Up</p>
                        <p className="text-sm text-muted-foreground">Track your case status and attend court proceedings</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="p-4 rounded-lg bg-secondary">
                  <h4 className="font-semibold mb-2">Important Helplines:</h4>
                  <div className="space-y-1 text-sm">
                    <p>Women Helpline: <span className="font-medium text-primary">181</span></p>
                    <p>Legal Services Authority: <span className="font-medium text-primary">15100</span></p>
                    <p>National Commission for Women: <span className="font-medium text-primary">7827-170-170</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default LegalRights;
