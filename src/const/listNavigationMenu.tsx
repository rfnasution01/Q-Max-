import {
  ArrowDownCircle,
  Component,
  HelpCircle,
  LandPlot,
  Landmark,
  LayoutDashboard,
  LayoutList,
  ShoppingBag,
} from "lucide-react";

export const listNavigationMenu = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    access: true,
    subMenu: [],
  },
  {
    name: "Katalog",
    icon: <LayoutList />,
    access: true,
    subMenu: [],
  },
  {
    name: "Feature",
    icon: <Landmark />,
    access: true,
    subMenu: [
      {
        name: "Buy",
        icon: <ShoppingBag />,
        access: false,
      },
      {
        name: "Earn",
        icon: <LandPlot />,
        access: false,
      },
      {
        name: "Airdrop",
        icon: <ArrowDownCircle />,
        access: false,
      },
      {
        name: "Claim",
        icon: <Component />,
        access: false,
      },
    ],
  },
  {
    name: "Bantuan",
    icon: <HelpCircle />,
    access: false,
    subMenu: [],
  },
];
