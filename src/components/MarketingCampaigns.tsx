import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  TrendingUp,
  Eye,
  MousePointerClick,
  Users,
  Calendar,
  Filter,
  Download,
  Plus,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const campaignStatus = [
  { name: "Active", value: 12, color: "bg-green-500" },
  { name: "Draft", value: 5, color: "bg-yellow-500" },
  { name: "Completed", value: 8, color: "bg-blue-500" },
  { name: "Paused", value: 3, color: "bg-gray-500" },
];

const campaignData = [
  { 
    id: 1, 
    name: "Summer Home Showcase", 
    channel: "Social Media", 
    budget: "$5,000", 
    spent: "$3,200", 
    reach: "12,500", 
    clicks: "1,250", 
    conversions: 24, 
    status: "Active",
    startDate: "2023-06-01",
    endDate: "2023-06-30"
  },
  { 
    id: 2, 
    name: "Email Newsletter Campaign", 
    channel: "Email", 
    budget: "$1,200", 
    spent: "$800", 
    reach: "8,200", 
    clicks: "2,460", 
    conversions: 42, 
    status: "Active",
    startDate: "2023-05-15",
    endDate: "2023-07-15"
  },
  { 
    id: 3, 
    name: "Google Ads - Property Search", 
    channel: "PPC", 
    budget: "$3,500", 
    spent: "$3,500", 
    reach: "24,800", 
    clicks: "3,224", 
    conversions: 68, 
    status: "Completed",
    startDate: "2023-05-01",
    endDate: "2023-05-31"
  },
  { 
    id: 4, 
    name: "Neighborhood Guide Series", 
    channel: "Content", 
    budget: "$2,000", 
    spent: "$0", 
    reach: "0", 
    clicks: "0", 
    conversions: 0, 
    status: "Draft",
    startDate: "2023-07-01",
    endDate: "2023-07-31"
  },
];

const performanceData = [
  { date: "Jun 1", impressions: 1200, clicks: 120, conversions: 8 },
  { date: "Jun 2", impressions: 1800, clicks: 180, conversions: 12 },
  { date: "Jun 3", impressions: 1500, clicks: 150, conversions: 10 },
  { date: "Jun 4", impressions: 2100, clicks: 210, conversions: 18 },
  { date: "Jun 5", impressions: 1900, clicks: 190, conversions: 15 },
  { date: "Jun 6", impressions: 2400, clicks: 240, conversions: 22 },
  { date: "Jun 7", impressions: 2200, clicks: 220, conversions: 20 },
];

const channelData = [
  { name: "Social Media", value: 45, color: "#3b82f6" },
  { name: "Email", value: 25, color: "#10b981" },
  { name: "PPC", value: 20, color: "#f59e0b" },
  { name: "Content", value: 10, color: "#8b5cf6" },
];

export const MarketingCampaigns = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +3 new this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,700</div>
            <p className="text-xs text-muted-foreground">
              $3,200 remaining
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">154</div>
            <p className="text-xs text-muted-foreground">
              +24 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Distribution */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Campaign Status Distribution</CardTitle>
              <CardDescription>Current status of all marketing campaigns</CardDescription>
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
          <div className="flex items-center justify-between">
            {campaignStatus.map((status, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${status.color} flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-white font-bold text-lg">{status.value}</span>
                </div>
                <p className="text-sm font-medium">{status.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Performance</CardTitle>
          <CardDescription>Daily campaign performance over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="impressions" stroke="#3b82f6" name="Impressions" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="#10b981" name="Clicks" strokeWidth={2} />
              <Line type="monotone" dataKey="conversions" stroke="#8b5cf6" name="Conversions" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Channel Distribution</CardTitle>
            <CardDescription>Budget allocation by marketing channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Campaigns</CardTitle>
            <CardDescription>Campaigns with highest conversion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaignData.slice(0, 3).map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{campaign.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{campaign.channel}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {campaign.conversions} conversions
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{((campaign.conversions / parseInt(campaign.clicks)) * 100).toFixed(1)}%</p>
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Campaigns</CardTitle>
              <CardDescription>Manage and track all marketing campaigns</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Campaign</th>
                  <th className="text-left py-3 px-4">Channel</th>
                  <th className="text-left py-3 px-4">Budget</th>
                  <th className="text-left py-3 px-4">Performance</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Dates</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((campaign) => (
                  <tr key={campaign.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{campaign.channel}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{campaign.budget}</p>
                        <p className="text-sm text-muted-foreground">{campaign.spent} spent</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Eye className="h-4 w-4 mr-1 text-muted-foreground" />
                          {campaign.reach}
                        </div>
                        <div className="flex items-center text-sm">
                          <MousePointerClick className="h-4 w-4 mr-1 text-muted-foreground" />
                          {campaign.clicks}
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          {campaign.conversions}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={campaign.status === "Active" ? "default" : 
                                campaign.status === "Draft" ? "secondary" : 
                                campaign.status === "Completed" ? "outline" : "destructive"}
                      >
                        {campaign.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      <div>{campaign.startDate}</div>
                      <div>{campaign.endDate}</div>
                    </td>
                    <td className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete Campaign</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

// DollarSign icon component since it's not in lucide-react
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);