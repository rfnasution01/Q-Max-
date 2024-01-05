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
    icon: <LayoutDashboard size={16} />,
    access: true,
    subMenu: [],
  },
  {
    name: "Katalog",
    icon: <LayoutList size={16} />,
    access: true,
    subMenu: [],
  },
  {
    name: "Feature",
    icon: <Landmark size={16} />,
    access: true,
    subMenu: [
      {
        name: "Buy",
        icon: <ShoppingBag size={16} />,
        access: false,
      },
      {
        name: "Earn",
        icon: <LandPlot size={16} />,
        access: false,
      },
      {
        name: "Airdrop",
        icon: <ArrowDownCircle size={16} />,
        access: false,
      },
      {
        name: "Claim",
        icon: <Component size={16} />,
        access: false,
      },
    ],
  },
  {
    name: "Bantuan",
    icon: <HelpCircle size={16} />,
    access: false,
    subMenu: [],
  },
];
