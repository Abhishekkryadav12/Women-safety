import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Upload, User, Phone, Mail, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    email: "",
    password: "",
    parentName: "",
    parentMobile: "",
    address: "",
    policeStation: "",
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        localStorage.setItem("userPhoto", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    localStorage.setItem("isAuthenticated", "true");
    toast.success("Account created successfully!");
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-medium">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Create Your SafeGuard Account</CardTitle>
          <CardDescription>Join our community for women's safety and awareness</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="relative">
                {photoPreview ? (
                  <img src={photoPreview} alt="Profile" className="h-24 w-24 rounded-full object-cover border-4 border-primary" />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <label htmlFor="photo" className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90">
                  <Upload className="h-4 w-4" />
                  <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                </label>
              </div>
              <p className="text-sm text-muted-foreground">Upload Profile Photo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="Enter mobile number" value={formData.mobile} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhar">Aadhar Number *</Label>
                <Input id="aadhar" name="aadhar" placeholder="Enter Aadhar number" value={formData.aadhar} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input id="password" name="password" type="password" placeholder="Create password" value={formData.password} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input id="parentName" name="parentName" placeholder="Enter parent name" value={formData.parentName} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentMobile">Parent/Guardian Mobile *</Label>
                <Input id="parentMobile" name="parentMobile" type="tel" placeholder="Enter parent mobile" value={formData.parentMobile} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="policeStation">Nearest Police Station *</Label>
                <Input id="policeStation" name="policeStation" placeholder="Enter police station name" value={formData.policeStation} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Complete Address *</Label>
              <Input id="address" name="address" placeholder="Enter your complete address" value={formData.address} onChange={handleChange} required />
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
