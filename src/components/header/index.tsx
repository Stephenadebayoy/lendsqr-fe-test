/** @format */

import "./style.scss";
import logo from "../../assets/logo.png";
import { faker } from "@faker-js/faker";
import { Bell, Menu, Search, X } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { menuItems } from "../../constants/data";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__left">
          <img src={logo} alt="Logo" className="header__logo" />
          <div className="header__search">
            <input
              type="text"
              className="search_input"
              placeholder="Search for anything"
            />
            <button className="header__search-btn">
              <Search size={14} />
            </button>
          </div>
        </div>

        <div className="header__right">
          <a href="#" className="header__link">
            Docs
          </a>
          <button className="header__icon">
            <Bell />{" "}
          </button>

          <section className="header__icon_container">
            <img
              src={faker.image.avatar()}
              alt="User"
              className="header__avatar"
            />
            <span className="header__name">Adadeji </span>
            <IoMdArrowDropdown />
          </section>
        </div>
      </header>
      <section className="responsive-header">
        <section className="responsive-flex">
          <img src={logo} alt="Logo" className="header__logo" />
          {isSidebarOpen ? (
            <X className="icon-menu" onClick={() => setIsSidebarOpen(false)} />
          ) : (
            <Menu
              className="icon-menu"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </section>
        {isSidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          >
            <aside
              className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-sidebar__content">
                <section className="close-icon">
                  <X
                    className="close-menu"
                    onClick={() => setIsSidebarOpen(false)}
                  />
                </section>
                <nav className="mobile-nav">
                  {menuItems.map((item, index) => {
                    if ("section" in item) {
                      return (
                        <div className="menu-section" key={index}>
                          <p className="section-title">{item.section}</p>
                          <ul className="menu-list">
                            {item.items.map((subItem) => (
                              <li
                                key={subItem.id}
                                className={`menu-item ${
                                  subItem.active ? "active" : ""
                                }`}
                              >
                                <subItem.icon className="menu-icon" />
                                <span>{subItem.label}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    return (
                      <li
                        key={item.id}
                        className={`menu-item ${item.active ? "active" : ""}`}
                      >
                        <item.icon className="menu-icon" />
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
