/** @format */

"use client";

import { useState } from "react";
import {
  Users,
  UserCheck,
  CreditCard,
  PiggyBank,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./style.scss";
import { IoFilterSharp } from "react-icons/io5";
import UserActionsDropdown from "./components/action-drop-down";
import { useNavigate } from "react-router-dom";
import OrganizationDropDown from "./components/organisation-dropdown";

import useUsers from "../../../../hooks/useUsers";

const statsData = [
  { icon: Users, label: "USERS", value: "2,453", color: "pink" },
  { icon: UserCheck, label: "ACTIVE USERS", value: "2,453", color: "blue" },
  {
    icon: CreditCard,
    label: "USERS WITH LOANS",
    value: "14,453",
    color: "orange",
  },
  {
    icon: PiggyBank,
    label: "USERS WITH SAVINGS",
    value: "102,453",
    color: "purple",
  },
];

const UsersComponent = () => {
  const { users } = useUsers();
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const navigate = useNavigate();
  const handleView = (userId: string) => {
    navigate(`/user/${userId}`);
  };
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "status--active";
      case "inactive":
        return "status--inactive";
      case "pending":
        return "status--pending";
      case "blacklisted":
        return "status--blacklisted";
      default:
        return "";
    }
  };

  const getStatCardClass = (color: string) => {
    switch (color) {
      case "pink":
        return "stat-card--pink";
      case "blue":
        return "stat-card--blue";
      case "orange":
        return "stat-card--orange";
      case "purple":
        return "stat-card--purple";
      default:
        return "";
    }
  };

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>

      <div className="users-page__stats">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${getStatCardClass(stat.color)}`}
          >
            <div className="stat-card__icon">
              <stat.icon size={18} />
            </div>
            <div className="stat-card__content">
              <p className="stat-card__label">{stat.label}</p>
              <h3 className="stat-card__value">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="users-table">
        <div className="users-table__container">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <OrganizationDropDown />
                </th>
                <th>
                  USERNAME
                  <IoFilterSharp size={14} />
                </th>
                <th>
                  EMAIL
                  <IoFilterSharp size={14} />
                </th>
                <th>
                  PHONE NUMBER
                  <IoFilterSharp size={14} />
                </th>
                <th>
                  DATE JOINED
                  <IoFilterSharp size={14} />
                </th>
                <th>
                  STATUS
                  <IoFilterSharp size={14} />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, itemsPerPage).map((user) => (
                <tr key={user.id}>
                  <td>Lendsqr</td> <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>2024-07-01</td>{" "}
                  <td>
                    <span
                      className={`status ${getStatusClass(
                        user?.status ?? "active"
                      )}`}
                    >
                      {user?.status ?? "Active"}
                    </span>
                  </td>
                  <td>
                    <UserActionsDropdown
                      handleView={() => handleView(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="users-table__footer">
          <div className="users-table__info">
            <span>Showing</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="items-select"
            >
              <option value={100}>100</option>
              <option value={50}>50</option>
              <option value={25}>25</option>
            </select>
            <span>out of 100</span>
          </div>

          <div className="pagination">
            <button className="pagination__btn">
              <ChevronLeft size={14} />
            </button>
            <button className="pagination__btn pagination__btn--active">
              1
            </button>
            <button className="pagination__btn">2</button>
            <button className="pagination__btn">3</button>
            <span className="pagination__ellipsis">...</span>
            <button className="pagination__btn pagination__btn--hidden-mobile">
              15
            </button>
            <button className="pagination__btn pagination__btn--hidden-mobile">
              16
            </button>
            <button className="pagination__btn">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
