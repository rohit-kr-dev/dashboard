import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-12 text-base font-medium" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Property
        </Button>
        <Button variant="secondary" className="h-12 text-base font-medium" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Create Lead
        </Button>
        <Button variant="secondary" className="h-12 text-base font-medium" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Agent
        </Button>
      </div>
    </div>
  );
};
