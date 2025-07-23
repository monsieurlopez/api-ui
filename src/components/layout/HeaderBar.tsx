import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  bg: string;
};

export const HeaderBar = ({ collapsed, toggleCollapsed, bg }: Props) => {
  const { t } = useTranslation();
  return (
    <Header
      style={{
        padding: "0 16px",
        background: bg,
        display: "flex",
        alignItems: "center",
      }}
      className="flex justify-between"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{ fontSize: "18px" }}
      />
      <h1 className="text-4xl font-extrabold mb-12 text-center lg:mt-10 mt-4">
        {t("pages.pricing")}
      </h1>
      <div className="align-right w-15">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </Header>
  );
};
