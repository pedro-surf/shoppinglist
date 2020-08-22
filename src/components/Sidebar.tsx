import React from "react";
import {
  PowerIcon,
  ToolIcon,
  GemIcon,
  ClockHistoryIcon,
  PeopleIcon,
  CloudDownloadIcon,
  SlidersIcon,
  CursorIcon,
  ArrowUpRightSquareIcon,
  BrandIcon,
} from "./icons";
import { SidebarItem } from ".";

const Sidebar = () => {
  return (
    <nav
      style={{ height: "100vh", width: "4vw" }}
      className="d-flex flex-column justify-content-between bg-dark sidebar p-0"
    >
      <div className="pt-2">
        <SidebarItem mb={true} tooltip="Home" to="/" icon={BrandIcon()} />
        <SidebarItem
          tooltip="Análises"
          to="settings"
          icon={ClockHistoryIcon()}
        />
        <SidebarItem tooltip="Jornadas" to="add" icon={CursorIcon()} />
        <SidebarItem tooltip="Clientes" to="customers" icon={PeopleIcon()} />
        <SidebarItem tooltip="Cloud" to="view" icon={CloudDownloadIcon()} />
        <hr
          className="my-2"
          style={{ maxWidth: "40%", backgroundColor: "#74BBFB" }}
        />
        <SidebarItem
          tooltip="Versão 1.0"
          to="view"
          icon={ArrowUpRightSquareIcon()}
        />
      </div>

      <div className="py-2">
        <SidebarItem tooltip="Administração" to="/settings  " icon={GemIcon()} />
        <SidebarItem tooltip="Configuração" to="/settings" icon={ToolIcon()} />
        <SidebarItem tooltip="Historico" to="/" icon={SlidersIcon()} />
        <SidebarItem tooltip="Sair" to="/" icon={PowerIcon()} />
      </div>
    </nav>
  );
};

export default Sidebar;
