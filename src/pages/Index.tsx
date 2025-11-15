import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { TopPerformingAgents } from "@/components/TopPerformingAgents";
import { RecentActivities } from "@/components/RecentActivities";
import { QuickActions } from "@/components/QuickActions";
import { DollarSign, Users, Building2, TrendingUp, Home, BarChart3, UserSquare2, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FinancialDashboard } from "@/components/FinancialDashboard";
import { AgentPerformance } from "@/components/AgentPerformance";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { LeadsManagement } from "@/components/LeadsManagement";
import { PropertiesManagement } from "@/components/PropertiesManagement";
import { MarketingCampaigns } from "@/components/MarketingCampaigns";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userRole, setUserRole] = useState<any>(null);
  const navigate = useNavigate();

  // Check user role on component mount
  useEffect(() => {
    const roleData = localStorage.getItem("userRole");
    if (roleData) {
      try {
        const parsedRole = JSON.parse(roleData);
        setUserRole(parsedRole);
      } catch {
        // If parsing fails, redirect to role selection
        navigate("/roles");
      }
    } else {
      // If no role, redirect to role selection
      navigate("/roles");
    }
  }, [navigate]);

  // Menu items for the sidebar
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "financial", label: "Financial", icon: DollarSign },
    { id: "agent-performance", label: "Agent Performance", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "leads", label: "Leads & CRM", icon: UserSquare2 },
    { id: "properties", label: "Properties", icon: Building2 },
    { id: "marketing", label: "Marketing", icon: Megaphone },
  ];

  // Filter menu items based on user permissions
  const getFilteredMenuItems = () => {
    if (!userRole) return menuItems;
    
    return menuItems.filter(item => 
      userRole.permissions.includes(item.id)
    );
  };

  // Show access denied message if user doesn't have permission for the active tab
  const hasPermission = userRole ? userRole.permissions.includes(activeTab) : true;

  if (!userRole) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Redirecting to role selection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        menuItems={getFilteredMenuItems()} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {!hasPermission ? (
            <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Access Denied</CardTitle>
                  <CardDescription>
                    You don't have permission to access the {activeTab} section.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your current role ({userRole.name}) doesn't have access to this section.
                  </p>
                  <Button onClick={() => setActiveTab(userRole.permissions[0] || "dashboard")}>
                    Go to Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  {activeTab === "dashboard" && "Dashboard Overview"}
                  {activeTab === "financial" && "Financial Management"}
                  {activeTab === "agent-performance" && "Agent Performance"}
                  {activeTab === "analytics" && "Analytics & Reports"}
                  {activeTab === "leads" && "Leads & CRM"}
                  {activeTab === "properties" && "Property Listings"}
                  {activeTab === "marketing" && "Marketing Campaigns"}
                </h1>
                <p className="text-muted-foreground">
                  {activeTab === "dashboard" && "Welcome back! Here's what's happening today."}
                  {activeTab === "financial" && "Manage financial records and transactions."}
                  {activeTab === "agent-performance" && "Track agent performance metrics."}
                  {activeTab === "analytics" && "View detailed analytics and reports."}
                  {activeTab === "leads" && "Manage leads and customer relationships."}
                  {activeTab === "properties" && "View and manage property listings."}
                  {activeTab === "marketing" && "Create and monitor marketing campaigns."}
                </p>
              </div>

              {activeTab === "dashboard" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard
                      title="Total Revenue"
                      value="$284,500"
                      change="+2.5% from last month"
                      icon={DollarSign}
                      iconColor="bg-primary"
                    />
                    <StatCard
                      title="Active Agents"
                      value="48"
                      change="+3 new this week"
                      icon={Users}
                      iconColor="bg-secondary"
                    />
                    <StatCard
                      title="Properties Listed"
                      value="342"
                      change="+5 from last month"
                      icon={Building2}
                      iconColor="bg-chart-3"
                    />
                    <StatCard
                      title="Conversion Rate"
                      value="24.8%"
                      change="+2.3% increase"
                      icon={TrendingUp}
                      iconColor="bg-chart-4"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <TopPerformingAgents />
                    <RecentActivities />
                  </div>

                  <QuickActions />
                </>
              )}

              {activeTab === "financial" && <FinancialDashboard />}
              {activeTab === "agent-performance" && <AgentPerformance />}
              {activeTab === "analytics" && <AnalyticsDashboard />}
              {activeTab === "leads" && <LeadsManagement />}
              {activeTab === "properties" && <PropertiesManagement />}
              {activeTab === "marketing" && <MarketingCampaigns />}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;