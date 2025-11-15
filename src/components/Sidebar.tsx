import { Home, DollarSign, Users, BarChart3, UserSquare2, Building2, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  menuItems?: Array<{ id: string; label: string; icon: React.ComponentType<any> }>;
}

const defaultMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "financial", label: "Financial", icon: DollarSign },
  { id: "agent-performance", label: "Agent Performance", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "leads", label: "Leads & CRM", icon: UserSquare2 },
  { id: "properties", label: "Properties", icon: Building2 },
  { id: "marketing", label: "Marketing", icon: Megaphone },
];

export const Sidebar = ({ activeTab, onTabChange, menuItems = defaultMenuItems }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">RealEstate CRM</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground px-3 mb-2">Main Menu</p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  activeTab === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
      
      <div className="p-4 border-t border-border">
        <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Teams
        </button>
      </div>
    </aside>
  );
};