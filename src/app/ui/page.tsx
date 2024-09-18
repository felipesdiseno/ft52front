
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"

import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/src/components/ui/card";
import { Checkbox } from "@/src/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/src/components/ui/dropdown-menu";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/src/components/ui/hover-card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/src/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";
import { Switch } from "@/src/components/ui/switch";
import { Table } from "@/src/components/ui/table";
import { Textarea } from "@/src/components/ui/textarea";
import { Toast } from "@/src/components/ui/toast";
import { Toaster } from "@/src/components/ui/toaster";

const UIPage: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Avatar */}
      <div>
        <h2>Avatar</h2>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </div>

      {/* Button */}
      <div>
        <h2>Button</h2>
        <Button>Click me</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="destructive">Button</Button>
      </div>

      {/* Calendar */}
      <div>
        <h2>Calendar</h2>
        <Calendar />
      </div>

      {/* Card */}
      <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Card</h2>
      <Card className="bg-blue-500 border border-blue-900 shadow-md">
        <CardHeader className="bg-blue-200 p-4">
          <CardTitle className="text-blue-800">Card Title</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-gray-700">
          Content inside the card.
        </CardContent>
        <CardFooter className="bg-blue-100 p-4 text-gray-600">
          Footer content
        </CardFooter>
      </Card>
    </div>

      {/* Checkbox */}
      <div>
        <h2>Checkbox</h2>
        <Checkbox />
      </div>

      {/* Dropdown Menu */}
      <div>
        <h2>Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Hover Card */}
      <div>
        <h2>Hover Card</h2>
        <HoverCard>
          <HoverCardTrigger>
            <Button>Hover over me</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>This is some content displayed on hover!</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Navigation Menu */}
      <div>
        <h2>Navigation Menu</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>Sub Item 1</li>
                  <li>Sub Item 2</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>Sub Item A</li>
                  <li>Sub Item B</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Sheet */}
      <div>
        <h2>Sheet</h2>
        <Sheet>
          <SheetTrigger>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <p>This is a sheet's content.</p>
          </SheetContent>
        </Sheet>
      </div>

      {/* Switch */}
      <div>
        <h2>Switch</h2>
        <Switch />
      </div>

      {/* Table */}
      <div>
        <h2>Table</h2>
        <Table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Col 1</td>
              <td>Row 1, Col 2</td>
            </tr>
            <tr>
              <td>Row 2, Col 1</td>
              <td>Row 2, Col 2</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Textarea */}
      <div>
        <h2>Textarea</h2>
        <Textarea placeholder="Type something..." />
      </div>

      {/* Toast */}
      

      {/* Toaster */}
      <Toaster />
    </div>
  );
};

export default UIPage;
