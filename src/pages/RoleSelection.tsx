import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Shield, User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: "super-admin",
    name: "Super Admin",
    description: "Full access to all system features and data",
    icon: Shield,
    permissions: ["dashboard", "financial", "agent-performance", "analytics", "leads", "properties", "marketing"]
  },
  {
    id: "admin",
    name: "Admin",
    description: "Manage agents, leads, properties, and marketing",
    icon: User,
    permissions: ["agent-performance", "analytics", "leads", "properties", "marketing"]
  },
  {
    id: "manager",
    name: "Manager",
    description: "Manage leads and marketing campaigns",
    icon: Users,
    permissions: ["leads", "properties", "marketing"]
  }
];

export default function RoleSelection() {
  const navigate = useNavigate();
  
  const handleSelectRole = (roleId: string) => {
    navigate(`/login?role=${roleId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Select Your Role</CardTitle>
          <CardDescription>
            Choose a role to access the system with appropriate permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card 
                  key={role.id} 
                  className="hover:border-primary transition-colors cursor-pointer"
                  onClick={() => handleSelectRole(role.id)}
                >
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg text-center">{role.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {role.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Select Role
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}