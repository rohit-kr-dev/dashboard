import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconColor: string;
}

export const StatCard = ({ title, value, change, icon: Icon, iconColor }: StatCardProps) => {
  const isPositive = change.includes("+");
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
            <p className={`text-sm ${isPositive ? "text-success" : "text-destructive"}`}>
              {change}
            </p>
          </div>
          <div className={`p-3 rounded-lg ${iconColor}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
