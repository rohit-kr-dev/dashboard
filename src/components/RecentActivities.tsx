import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle } from "lucide-react";

const activities = [
  { 
    type: "property", 
    title: "New property listed", 
    description: "Luxury Villa - Downtown", 
    time: "5 minutes ago",
    color: "text-primary"
  },
  { 
    type: "lead", 
    title: "Lead assigned", 
    description: "Jane Doe → Sarah Johnson", 
    time: "12 minutes ago",
    color: "text-secondary"
  },
  { 
    type: "commission", 
    title: "Commission paid", 
    description: "$12,500 to Michael Chen", 
    time: "1 hour ago",
    color: "text-success"
  },
  { 
    type: "agent", 
    title: "New agent registered", 
    description: "Alex Thompson joined", 
    time: "2 hours ago",
    color: "text-chart-3"
  },
  { 
    type: "sale", 
    title: "Property sold", 
    description: "Penthouse Suite - Marina Bay", 
    time: "3 hours ago",
    color: "text-chart-4"
  },
  { 
    type: "campaign", 
    title: "Campaign launched", 
    description: "Summer Sale - Social Media", 
    time: "5 hours ago",
    color: "text-destructive"
  },
];

export const RecentActivities = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <Circle className={`w-2 h-2 mt-2 ${activity.color} fill-current`} />
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
