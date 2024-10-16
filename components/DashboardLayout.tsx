import React from "react";
import { FaChevronLeft, FaUsers, FaListUl, FaBezierCurve, FaTools, FaCog } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import "./DashboardLayout.css";
import { UserProfile } from "../../types/types";
import { NavigateFunction } from "react-router-dom";

interface DashboardLayoutProps {
    children: React.ReactNode;
    isSidebarCollapsed: boolean;
    setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    activeComponent: string;
    handleNavigation: (componentName: string) => void;
    userProfile: UserProfile | null;
    navigate: NavigateFunction;
  }

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  activeComponent,
  handleNavigation,
}) => {
  const navItems = [
    { name: "Component1", icon: <MdOutlineConnectWithoutContact /> },
    { name: "Component2", icon: <FaListUl /> },
    { name: "Component3", icon: <FaBrain /> },
    { name: "Component4", icon: <FaUsers /> },
    { name: "Component5", icon: <FaBezierCurve /> },
  ];

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="logo-container">
          <img src="placeholder-logo.jpg" alt="Logo" className="logo" />
          {!isSidebarCollapsed && <span>App Name</span>}
          <button
            className="collapse-button"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <FaChevronLeft />
          </button>
        </div>
        <nav>
          <div className="nav-sections">
            <h3>Main Menu</h3>
            <div className="button-container">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`nav-button ${activeComponent === item.name ? "active" : ""}`}
                  onClick={() => handleNavigation(item.name)}
                >
                  {item.icon}
                  {!isSidebarCollapsed && item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="nav-sections">
            <h3>Tools</h3>
            <button className="nav-button">
              <FaTools />
              {!isSidebarCollapsed && "Tool"}
            </button>
          </div>
          <div className="user-profile">
            <img src="placeholder-avatar.jpg" alt="User avatar" className="profile-avatar" />
            {!isSidebarCollapsed && (
              <div className="profile-details">
                <h3>User Name</h3>
                <p>user@example.com</p>
                <p>Plan: Basic</p>
              </div>
            )}
          </div>
          <button
            className={`nav-button ${activeComponent === "Settings" ? "active" : ""}`}
            onClick={() => handleNavigation("Settings")}
          >
            <FaCog />
            {!isSidebarCollapsed && "Settings"}
          </button>
        </nav>
      </div>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;