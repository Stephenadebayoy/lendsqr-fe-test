/** @format */

import { useState, useRef, useEffect } from "react";
import "./style.scss";
import { IoFilterSharp } from "react-icons/io5";

const OrganizationDropDown = () => {
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="users-page" ref={dropdownRef}>
      <div onClick={handleToggleFilter} className="organization-header">
        ORGANIZATION
        <IoFilterSharp size={14} />
      </div>

      {showFilter && (
        <div className="filter-dropdown">
          <form className="filter-form">
            <div className="form-group">
              <label htmlFor="org">Organization</label>
              <select id="org" name="org">
                <option>Select</option>
                <option>Lendsqr</option>
                <option>Irorun</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value="" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status">
                <option>Select</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Blacklisted</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="filter-buttons">
              <button type="reset" className="btn btn-reset">
                Reset
              </button>
              <button type="submit" className="btn btn-filter">
                Filter
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrganizationDropDown;
