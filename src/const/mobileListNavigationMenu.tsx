import {
  ArrowDownCircle,
  Component,
  LandPlot,
  LayoutList,
  ShoppingBag,
} from "lucide-react";

export const mobileListNavigationMenu = [
  {
    name: "Katalog",
    url: "/katalog",
    icon: <LayoutList size={20} />,
    access: true,
    subMenu: [],
  },
  {
    name: "Buy",
    url: "/feature/buy",
    icon: <ShoppingBag size={20} />,
    access: false,
  },
  {
    name: "Earn",
    url: "/feature/earn",
    icon: <LandPlot size={20} />,
    access: false,
  },
  {
    name: "Airdrop",
    url: "/feature/airdrop",
    icon: <ArrowDownCircle size={20} />,
    access: false,
  },
  {
    name: "Claim",
    url: "/feature/claim",
    icon: <Component size={20} />,
    access: false,
  },
];
