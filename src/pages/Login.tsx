import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

interface Role {
  id: string;
  name: string;
  password: string;
  permissions: string[];
}

const roles: Role[] = [
  {
    id: "super-admin",
    name: "Super Admin",
    password: "super@1234",
    permissions: ["dashboard", "financial", "agent-performance", "analytics", "leads", "properties", "marketing"]
  },
  {
    id: "admin",
    name: "Admin",
    password: "admin@1234",
    permissions: ["agent-performance", "analytics", "leads", "properties", "marketing"]
  },
  {
    id: "manager",
    name: "Manager",
    password: "manager@1234",
    permissions: ["leads", "properties", "marketing"]
  }
];

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get the role from the URL search params
    const searchParams = new URLSearchParams(location.search);
    const roleId = searchParams.get("role") || "";
    
    const role = roles.find(r => r.id === roleId);
    
    if (!role) {
      setError("Invalid role selected");
      return;
    }
    
    if (password === role.password) {
      // Store role information in localStorage
      localStorage.setItem("userRole", JSON.stringify({
        id: role.id,
        name: role.name,
        permissions: role.permissions
      }));
      
      navigate(from, { replace: true });
    } else {
      setError("Incorrect password");
    }
  };
  
  // Get the role from URL to display in the form
  const searchParams = new URLSearchParams(location.search);
  const roleId = searchParams.get("role") || "";
  const role = roles.find(r => r.id === roleId);
  
  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Invalid Role</CardTitle>
            <CardDescription className="text-center">
              The selected role is invalid. Please go back and select a valid role.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Building2 className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Role Authentication</CardTitle>
          <CardDescription>
            Enter password for {role.name} role
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && (
              <div className="text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              <p>Password: {role.password}</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}