import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        // position: "fixed",
        display: "flex",
        height: "110vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader
          prefix={
            <i className="fa fa-bars fa-large" style={{ float: "right" }}></i>
          }
        ></CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/clients" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/clients" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Clients</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/invoices" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-invoice">
                Invoices
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
