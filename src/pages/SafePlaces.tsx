import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Shield, Hospital, Building } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SafePlaces = () => {
  const safeLocations = [
    {
      type: "Police Station",
      name: "Central Police Station",
      distance: "0.8 km",
      address: "MG Road, Sector 14",
      icon: Shield,
    },
    {
      type: "Hospital",
      name: "City General Hospital",
      distance: "1.2 km",
      address: "Hospital Road, Sector 18",
      icon: Hospital,
    },
    {
      type: "Women's Shelter",
      name: "SafeHaven Women's Shelter",
      distance: "2.5 km",
      address: "Park Street, Sector 22",
      icon: Building,
    },
    {
      type: "Police Station",
      name: "North District Police",
      distance: "3.1 km",
      address: "Market Area, Sector 45",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <MapPin className="h-8 w-8 text-primary" />
            Safe Places & Nearby Help
          </h1>
          <p className="text-muted-foreground">
            Find police stations, hospitals, and safe shelters near you
          </p>
        </div>

        <Alert className="mb-8 border-primary bg-primary/5">
          <MapPin className="h-5 w-5 text-primary" />
          <AlertDescription className="text-primary">
            Showing locations near your current area. Map functionality coming soon for better navigation.
          </AlertDescription>
        </Alert>

        {/* Map Placeholder */}
        <Card className="mb-8 shadow-medium">
          <CardContent className="p-0">
            <div className="h-96 bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map view with real-time locations and navigation will be displayed here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safe Locations List */}
        <div className="grid md:grid-cols-2 gap-4">
          {safeLocations.map((location, idx) => (
            <Card key={idx} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <location.icon className="h-5 w-5 text-primary" />
                  {location.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-1">{location.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{location.address}</p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">{location.distance} away</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Danger Zones Info */}
        <Card className="mt-8 shadow-soft border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zones Alert</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Areas with reported incidents will be highlighted on the map. Exercise extra caution in these zones
              and consider alternative routes when possible.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SafePlaces;
