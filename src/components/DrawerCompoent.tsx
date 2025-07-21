import React, { useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer, Space, ConfigProvider, theme as antdTheme } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../context/useTheme";
import { SettingFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "../assets/styles/Drawer.css";

export const DrawerComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("right");
  const { theme } = useTheme();
  const { t } = useTranslation();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Space>
        <SettingFilled
          type="primary"
          onClick={showDrawer}
          className="button-drawer"
        />
      </Space>

      <ConfigProvider
        theme={{
          algorithm:
            theme === "dark"
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}
      >
        <Drawer
          title={t("settings.title", "Settings")}
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <table className="w-full table-auto">
            <tbody>
              <tr className="h-14">
                <td className="text-left font-medium text-lg">
                  {t("settings.theme", "Mode")}
                </td>
                <td className="text-right">
                  <DarkModeToggle />
                </td>
              </tr>
              <tr className="h-14">
                <td className="text-left font-medium text-lg">
                  {t("settings.language", "Language")}
                </td>
                <td className="text-right">
                  <LanguageSelector />
                </td>
              </tr>
            </tbody>
          </table>
        </Drawer>
      </ConfigProvider>
    </>
  );
};
