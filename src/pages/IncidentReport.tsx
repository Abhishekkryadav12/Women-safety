import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Upload } from "lucide-react";
import { toast } from "sonner";

const IncidentReport = () => {
  const [formData, setFormData] = useState({
    type: "",
    date: "",
    location: "",
    description: "",
    anonymous: false,
    contactInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.type && formData.date && formData.location && formData.description) {
      toast.success("Incident reported successfully. Authorities will be notified.");
      setFormData({
        type: "",
        date: "",
        location: "",
        description: "",
        anonymous: false,
        contactInfo: "",
      });
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            Report an Incident
          </h1>
          <p className="text-muted-foreground">
            Report harassment, abuse, or safety concerns anonymously or with your contact information
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Incident Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Type of Incident *</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="harassment">Harassment</SelectItem>
                      <SelectItem value="domestic-violence">Domestic Violence</SelectItem>
                      <SelectItem value="stalking">Stalking</SelectItem>
                      <SelectItem value="assault">Assault</SelectItem>
                      <SelectItem value="cybercrime">Cybercrime</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date of Incident *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      placeholder="Where did this occur?"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe what happened in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Upload Evidence (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload photos, videos, or documents
                    </p>
                    <Input
                      id="evidence"
                      type="file"
                      accept="image/*,video/*,.pdf"
                      multiple
                      className="max-w-xs mx-auto"
                    />
                  </div>
                </div>

                <div className="space-y-4 p-4 rounded-lg bg-secondary">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="anonymous" className="font-medium">
                      Submit this report anonymously
                    </Label>
                  </div>

                  {!formData.anonymous && (
                    <div className="space-y-2">
                      <Label htmlFor="contactInfo">Your Contact Information</Label>
                      <Input
                        id="contactInfo"
                        placeholder="Email or phone number for follow-up"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Report
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({
                      type: "",
                      date: "",
                      location: "",
                      description: "",
                      anonymous: false,
                      contactInfo: "",
                    })}
                  >
                    Clear Form
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  All reports are treated with confidentiality and are forwarded to appropriate authorities.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default IncidentReport;
