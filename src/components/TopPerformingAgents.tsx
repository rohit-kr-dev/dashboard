import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const agents = [
  { name: "Sarah Johnson", sales: "$45,200", deals: "15 sales this month", initials: "SJ", color: "bg-primary" },
  { name: "Michael Chen", sales: "$38,400", deals: "12 sales this month", initials: "MC", color: "bg-secondary" },
  { name: "Emily Williams", sales: "$32,100", deals: "10 sales this month", initials: "EW", color: "bg-chart-3" },
  { name: "David Martinez", sales: "$24,800", deals: "8 sales this month", initials: "DM", color: "bg-chart-4" },
  { name: "Lisa Anderson", sales: "$22,300", deals: "7 sales this month", initials: "LA", color: "bg-chart-5" },
];

const getBadgeVariant = (index: number) => {
  if (index === 0) return "default";
  if (index === 1) return "secondary";
  return "outline";
};

export const TopPerformingAgents = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Performing Agents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {agents.map((agent, index) => (
          <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className={`${agent.color} w-10 h-10`}>
                <AvatarFallback className="text-white font-medium">{agent.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{agent.name}</p>
                <p className="text-sm text-muted-foreground">{agent.deals}</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-2">
              <div>
                <p className="font-semibold text-foreground">{agent.sales}</p>
                <Badge variant={getBadgeVariant(index)} className="text-xs mt-1">
                  {index === 0 ? "Gold" : index === 1 ? "Silver" : "Bronze"}
                </Badge>
              </div>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
