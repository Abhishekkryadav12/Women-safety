import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface EmergencyCardProps {
  title: string;
  number: string;
  icon: LucideIcon;
}

const EmergencyCard = ({ title, number, icon: Icon }: EmergencyCardProps) => {
  const handleCall = () => {
    toast.success(`Calling ${title}: ${number}`);
    // In production, this would initiate an actual call
  };

  return (
    <Card
      onClick={handleCall}
      className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-medium"
    >
      <CardContent className="p-4 flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <div className="flex-1">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm opacity-90">{number}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyCard;
