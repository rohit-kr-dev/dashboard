import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const propertyStatus = [
  { name: "For Sale", value: 42, color: "bg-blue-500" },
  { name: "For Rent", value: 28, color: "bg-green-500" },
  { name: "Sold", value: 15, color: "bg-purple-500" },
  { name: "Pending", value: 8, color: "bg-yellow-500" },
];

const propertiesData = [
  { 
    id: 1, 
    title: "Modern Downtown Apartment", 
    address: "123 Main St, New York, NY", 
    price: "$450,000", 
    beds: 2, 
    baths: 2, 
    sqft: 1200, 
    status: "For Sale", 
    type: "Apartment",
    image: "/placeholder.svg"
  },
  { 
    id: 2, 
    title: "Luxury Family Home", 
    address: "456 Oak Ave, Los Angeles, CA", 
    price: "$1,250,000", 
    beds: 4, 
    baths: 3, 
    sqft: 3200, 
    status: "For Sale", 
    type: "House",
    image: "/placeholder.svg"
  },
  { 
    id: 3, 
    title: "Waterfront Condo", 
    address: "789 Beach Blvd, Miami, FL", 
    price: "$850,000", 
    beds: 3, 
    baths: 2, 
    sqft: 1800, 
    status: "Pending", 
    type: "Condo",
    image: "/placeholder.svg"
  },
  { 
    id: 4, 
    title: "Cozy Studio Apartment", 
    address: "321 Park St, Chicago, IL", 
    price: "$2,200/mo", 
    beds: 1, 
    baths: 1, 
    sqft: 650, 
    status: "For Rent", 
    type: "Apartment",
    image: "/placeholder.svg"
  },
  { 
    id: 5, 
    title: "Suburban Townhouse", 
    address: "654 Elm St, Austin, TX", 
    price: "$650,000", 
    beds: 3, 
    baths: 2, 
    sqft: 2100, 
    status: "Sold", 
    type: "Townhouse",
    image: "/placeholder.svg"
  },
];

export const PropertiesManagement = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">93</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Property Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$725,000</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Properties Sold</CardTitle>
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Days on Market</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              -5 days from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Distribution */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Property Status Distribution</CardTitle>
              <CardDescription>Current status of all properties in the system</CardDescription>
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
            {propertyStatus.map((status, index) => (
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

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertiesData.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <div className="bg-muted h-48 relative">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <Badge 
                className="absolute top-3 right-3"
                variant={property.status === "For Sale" ? "default" : 
                        property.status === "For Rent" ? "secondary" : 
                        property.status === "Sold" ? "destructive" : "outline"}
              >
                {property.status}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{property.title}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {property.address}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-primary">{property.price}</span>
                <Badge variant="outline">{property.type}</Badge>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  {property.beds} beds
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {property.baths} baths
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {property.sqft} sqft
                </div>
              </div>
            </CardContent>
            <div className="px-6 py-3 bg-muted flex justify-between items-center">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Property</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Property
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
        ))}
      </div>

      {/* Properties Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Properties</CardTitle>
              <CardDescription>Complete list of all properties in the system</CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Property</th>
                  <th className="text-left py-3 px-4">Address</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Details</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {propertiesData.map((property) => (
                  <tr key={property.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{property.title}</p>
                        <Badge variant="outline" className="mt-1">{property.type}</Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        {property.address}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{property.price}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2 text-sm text-muted-foreground">
                        <span>{property.beds} bed</span>
                        <span>{property.baths} bath</span>
                        <span>{property.sqft} sqft</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={property.status === "For Sale" ? "default" : 
                                property.status === "For Rent" ? "secondary" : 
                                property.status === "Sold" ? "destructive" : "outline"}
                      >
                        {property.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

// Clock icon component since it's not in lucide-react
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);