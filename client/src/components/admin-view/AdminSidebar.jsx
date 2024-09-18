import {
  ChartNoAxesCombined,
  ClipboardList,
  Grip,
  Menu,
  ShoppingBasket,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  {
    label: "Dashboard",
    icon: <ChartNoAxesCombined />,
    url: "/admin/dashboard",
  },
  {
    label: "Products",
    url: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    label: "Orders",
    url: "/admin/orders",
    icon: <ClipboardList />,
  },
  {
    label: "Features",
    url: "/admin/features",
    icon: <Grip />,
  },
];

function MenuItem({ openSidebar }) {
  return (
    <>
      {menuItems.map((menu, index) => {
        return (
          <span key={index} className="border-b-2 block">
            <Link
              to={menu.url}
              className="flex gap-4 text-xl font-medium text-black hover:text-black hover:bg-slate-400 px-3 py-4 hover:rounded-md"
              onClick={() => (openSidebar ? openSidebar(false) : null)}
            >
              {menu.icon}
              {menu.label}
            </Link>
          </span>
        );
      })}
    </>
  );
}

const AdminSidebar = ({ open, openSidebar }) => {
  return (
    <>
      <div className="hidden border-r-2 py-3 lg:block">
        <span className="text-3xl font-semibold mb-4 block px-4">
          Admin panel
        </span>
        <MenuItem />
      </div>
      <Sheet open={open} onOpenChange={openSidebar}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Admin Panel</SheetTitle>
            <SheetDescription className="px-0" >
              <MenuItem openSidebar={openSidebar} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AdminSidebar;
