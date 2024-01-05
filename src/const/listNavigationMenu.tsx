import {
  ArrowDownCircle,
  Component,
  HelpCircle,
  LandPlot,
  LayoutDashboard,
  LayoutList,
  ShoppingBag,
} from "lucide-react";

export const listNavigationMenu = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Katalog",
    icon: <LayoutList />,
  },
  {
    name: "Buy",
    icon: <ShoppingBag />,
  },
  {
    name: "Earn",
    icon: <LandPlot />,
  },
  {
    name: "Airdrop",
    icon: <ArrowDownCircle />,
  },
  {
    name: "Claim",
    icon: <Component />,
  },
  {
    name: "Bantuan",
    icon: <HelpCircle />,
  },
];
