/** @format */

import { ChevronDown } from "lucide-react";
import { menuItems } from "../../constants/data";
import "./style.scss";
import type { SidebarProps } from "../../types/types";

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <aside className={`sidebar `}>
      {menuItems.map((item, index) => {
        if ("section" in item) {
          return (
            <div key={index} className="sidebar__section">
              <h3
                className={`sidebar__section-title ${
                  item.section === "CUSTOMERS" ? "dashboard_padding" : ""
                }  `}
              >
                {item.section}
              </h3>
              <ul className="sidebar__menu">
                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`sidebar__menu-item ${
                      subItem.active ? "sidebar__menu-item--active" : ""
                    }  `}
                  >
                    <a
                      href="#"
                      onClick={onClose}
                      className={`sidebar__menu-link ${
                        subItem.id === "1" ? "dashboard_padding" : ""
                      } `}
                    >
                      <subItem.icon size={16} />
                      <span>{subItem.label}</span>
                      {subItem.id === "1" && <ChevronDown size={14} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        } else {
          return (
            <ul key={index} className="sidebar__menu">
              <li
                className={`sidebar__menu-item ${
                  item.active ? "sidebar__menu-item--active" : ""
                } ${item.id === "1" ? "dashboard__menu" : "dashboard__menu"}  `}
              >
                <a href="#" onClick={onClose} className="sidebar__menu-link">
                  <item.icon size={16} color="#213f7d" />
                  <span>{item.label}</span>
                  {item?.id === "1" && <ChevronDown />}
                </a>
              </li>
            </ul>
          );
        }
      })}
    </aside>
  );
};

export default Sidebar;
