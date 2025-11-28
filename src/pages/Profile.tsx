import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Upload, History } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [silentMode, setSilentMode] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    email: "",
    parentName: "",
    parentMobile: "",
    address: "",
    policeStation: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const userPhoto = localStorage.getItem("userPhoto");
    if (userData) {
      setFormData(JSON.parse(userData));
    }
    if (userPhoto) {
      setPhotoPreview(userPhoto);
    }
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        localStorage.setItem("userPhoto", reader.result as string);
        toast.success("Profile photo updated!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pastAlerts = [
    { id: 1, type: "SOS Alert", time: "2 days ago", status: "Resolved" },
    { id: 2, type: "Danger Zone", time: "5 days ago", status: "Acknowledged" },
    { id: 3, type: "Emergency Call", time: "1 week ago", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <User className="h-8 w-8 text-primary" />
            My Profile
          </h1>
          <p className="text-muted-foreground">Manage your account information and settings</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button onClick={() => setIsEditing(false)} variant="outline">
                      Cancel
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover border-4 border-primary"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    {isEditing && (
                      <label
                        htmlFor="photo"
                        className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90"
                      >
                        <Upload className="h-4 w-4" />
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{formData.name || "Your Name"}</h3>
                    <p className="text-muted-foreground">{formData.email || "email@example.com"}</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhar Number</Label>
                    <Input
                      id="aadhar"
                      name="aadhar"
                      value={formData.aadhar}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentMobile">Parent/Guardian Mobile</Label>
                    <Input
                      id="parentMobile"
                      name="parentMobile"
                      value={formData.parentMobile}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="policeStation">Nearest Police Station</Label>
                    <Input
                      id="policeStation"
                      name="policeStation"
                      value={formData.policeStation}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Alert History */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Past Alerts History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pastAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary"
                    >
                      <div>
                        <p className="font-medium">{alert.type}</p>
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                      </div>
                      <span className="text-sm font-medium text-success">{alert.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Safety Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Silent SOS Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Trigger SOS without sound
                    </p>
                  </div>
                  <Switch checked={silentMode} onCheckedChange={setSilentMode} />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact support for any assistance
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
