/** @format */

import { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, UserX, UserCheck } from "lucide-react";
import "./style.scss";

const UserActionsDropdown = ({ handleView }: { handleView: () => void }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="actions-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <MoreVertical size={16} color="#545f7d" />
      </button>

      {open && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={handleView}>
            <Eye size={14} />
            View Details
          </button>
          <button className="dropdown-item">
            <UserX size={14} />
            Blacklist User
          </button>
          <button className="dropdown-item">
            <UserCheck size={14} />
            Activate User
          </button>
        </div>
      )}
    </div>
  );
};

export default UserActionsDropdown;
