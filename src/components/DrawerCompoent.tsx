import React, { useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer, Space, ConfigProvider, theme as antdTheme } from "antd";
import { DarkModeToggle } from "./DarkModeToogle";
import { LanguageSelector } from "./LanguageSelector";
import { useTheme } from "../context/useTheme";
import { ToolFilled } from "@ant-design/icons";
import "../assets/styles/Drawer.css";

export const DrawerComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("right");
  const { theme } = useTheme();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Space>
        <ToolFilled
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
          title="Configuración"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <table className="w-full table-auto">
            <tbody>
              <tr className="h-14">
                <td className="text-left font-medium text-lg">Tema</td>
                <td className="text-right">
                  <DarkModeToggle />
                </td>
              </tr>
              <tr className="h-14">
                <td className="text-left font-medium text-lg">Idioma</td>
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
