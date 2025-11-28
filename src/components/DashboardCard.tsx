import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

const DashboardCard = ({ title, description, icon: Icon, onClick, className = "" }: DashboardCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all hover:shadow-medium hover:scale-105 ${className}`}
    >
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
