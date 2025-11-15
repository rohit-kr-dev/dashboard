import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Award,
  Target,
  Filter,
  Download
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const agentData = [
  { name: "John Smith", properties: 24, commission: 42000, rating: 4.8 },
  { name: "Sarah Johnson", properties: 19, commission: 35000, rating: 4.6 },
  { name: "Michael Brown", properties: 17, commission: 31000, rating: 4.5 },
  { name: "Emily Davis", properties: 15, commission: 28000, rating: 4.7 },
  { name: "Robert Wilson", properties: 12, commission: 22000, rating: 4.3 },
];

const performanceData = [
  { month: "Jan", sales: 45, targets: 50 },
  { month: "Feb", sales: 52, targets: 50 },
  { month: "Mar", sales: 48, targets: 50 },
  { month: "Apr", sales: 61, targets: 50 },
  { month: "May", sales: 55, targets: 50 },
  { month: "Jun", sales: 67, targets: 50 },
];

const topAgents = [
  { id: 1, name: "John Smith", sales: 24, commission: "$42,000", rating: 4.8, change: "+12%" },
  { id: 2, name: "Sarah Johnson", sales: 19, commission: "$35,000", rating: 4.6, change: "+8%" },
  { id: 3, name: "Michael Brown", sales: 17, commission: "$31,000", rating: 4.5, change: "+5%" },
];

export const AgentPerformance = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              +3 new agents this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Commission</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32,400</div>
            <p className="text-xs text-muted-foreground">
              +12.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Achievement</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112%</div>
            <p className="text-xs text-muted-foreground">
              Above monthly target
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Monthly sales vs targets</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Actual Sales" strokeWidth={2} />
              <Line type="monotone" dataKey="targets" stroke="#ef4444" name="Sales Target" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Agent Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Agents</CardTitle>
            <CardDescription>Agents with highest sales this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topAgents.map((agent, index) => (
                <div key={agent.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{agent.sales} properties</span>
                        <Badge variant="secondary">{agent.rating} ★</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{agent.commission}</p>
                    <p className="text-sm text-green-600">{agent.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Agent Commission Distribution</CardTitle>
            <CardDescription>Commission earnings by agent</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Bar dataKey="commission" fill="#3b82f6" name="Commission ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Agent Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Details</CardTitle>
          <CardDescription>Complete list of all agents and their performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Agent Name</th>
                  <th className="text-left py-3 px-4">Properties Sold</th>
                  <th className="text-left py-3 px-4">Commission Earned</th>
                  <th className="text-left py-3 px-4">Performance Rating</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {agentData.map((agent, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{agent.name}</td>
                    <td className="py-3 px-4">{agent.properties}</td>
                    <td className="py-3 px-4">${agent.commission.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="mr-2">{agent.rating}</span>
                        <Badge variant="secondary">★</Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">Active</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};