//* Todo el codigo comentado es para poder usar Vercel y Clerk *//
import { Layout, Grid } from "antd";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ButtonCollapseSider } from "../global/ButtonCollapseSider";
import { BreadcrumbComponent } from "../global/BreadcrumbComponent";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/useTheme";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
};

export const HeaderBar = ({ collapsed, toggleCollapsed }: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.xs && !screens.sm;

  const isMobileBoxShadow =
    isMobile && theme !== "dark"
      ? "shadow-xs"
      : isMobile && theme === "dark"
        ? "shadow-sm shadow-gray-100"
        : "";

  return (
    <Header
      style={{
        backgroundColor: theme === "dark" ? "#001529" : "#fff",
        margin: 0,
        padding: isMobile ? 2 : 0,
        position: isMobile ? "sticky" : "relative",
        top: isMobile ? 0 : undefined,
        zIndex: isMobile ? 100 : undefined,
      }}
      className={`flex justify-between items-center ${isMobileBoxShadow} sm:border-l border-gray-200 dark:border-gray-700`}
    >
      <ButtonCollapseSider
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        theme={theme}
        iconSize={15}
        style={{ display: isMobile ? "flex" : "none" }}
      />

      <BreadcrumbComponent
        style={{
          display: isMobile ? "block" : "none",
          cursor: "default",
          color: theme === "dark" ? "#fff" : "#001529",
        }}
        separator
      />

      <div className={`${isMobile ? "flex" : "absolute right-2"}`}>
        <SignedOut>
          <SignInButton>
            <Button
              type={theme === "dark" ? "primary" : "default"}
              shape="circle"
              icon={<UserOutlined />}
              title={t("header.signin")}
              size={isMobile ? undefined : "large"}
            ></Button>
          </SignInButton>
        </SignedOut>
        <div className={`${isMobile ? "flex mr-1" : "hidden"}`}>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </Header>
  );
};
