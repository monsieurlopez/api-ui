import {
  HomeOutlined,
  FileTextOutlined,
  MailOutlined,
  DollarOutlined,
  ToolOutlined,
  SettingOutlined,
  SwapOutlined,
} from "@ant-design/icons";

export type NavItem = {
  key: string;
  path: string;
  label: string;
  icon?: React.ReactNode;
  i18nKey?: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    key: "1",
    path: "/",
    label: "Home",
    icon: <HomeOutlined />,
    i18nKey: "pages.home",
  },
  {
    key: "2",
    path: "/docs",
    label: "Documentation",
    icon: <FileTextOutlined />,
    i18nKey: "pages.docs",
  },
  {
    key: "3",
    path: "/contact",
    label: "Contact",
    icon: <MailOutlined />,
    i18nKey: "pages.contact",
  },
  {
    key: "4",
    path: "/pricing",
    label: "Pricing",
    icon: <DollarOutlined />,
    i18nKey: "pages.pricing",
  },
  {
    key: "5",
    path: "/settings",
    label: "Settings",
    icon: <ToolOutlined />,
    i18nKey: "pages.settings",
    children: [
      {
        key: "6",
        path: "/settings/api",
        label: "API key & Usage",
        icon: <SwapOutlined />,
        i18nKey: "pages.api",
      },
      {
        key: "7",
        path: "/settings/account",
        label: "Account",
        icon: <SettingOutlined />,
        i18nKey: "pages.account",
      },
    ],
  },
];
