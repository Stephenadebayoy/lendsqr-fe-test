/** @format */

export const getStatCardClass = (color: string) => {
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
export const getStatusClass = (status: string) => {
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
