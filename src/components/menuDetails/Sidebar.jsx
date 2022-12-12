import React from "react";
import "./Sidebar.css"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png"

const Sidebar = () => {
  return (
    <>
      <section className="p-0 position-fixed top-0 left-0">
        <div className="row">
          <div className="">
            <div style={{
              display: 'flex', height: '100vh', overflow: 'scroll initial',
            }} >
              <CDBSidebar className='sidebar' style={{ backgroundColor: 'var(--background-color)' }}>
                <CDBSidebarHeader >
                  <a
                    href="/"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    <img src={logo} alt="" />
                  </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                  <CDBSidebarMenu className="menu">
                    <NavLink exact to="/" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='table'>Dashboard</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/order" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='fa-solid fa-mug-hot'>Order</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/notification" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='fa fa-bell'>
                        Notification
                      </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/staffInformation" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='fa fa-address-book'>Staff Information</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/menu" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='fa-solid fa-book-open'>
                        Menu
                      </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/all-report" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='fa-solid fa-file-contract'>
                        All Report
                      </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/review" activeClassName="activeClicked">
                      <CDBSidebarMenuItem icon='pen'>
                        Review
                      </CDBSidebarMenuItem>
                    </NavLink>
                  </CDBSidebarMenu>
                </CDBSidebarContent>
              </CDBSidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
