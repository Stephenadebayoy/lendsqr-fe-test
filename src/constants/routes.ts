/** @format */

export const ROUTES = {
  auth: {
    login: "/login",
  },
  dashboard: {
    users: "/users",
    userDetails: (id: string | number) => `/user/${id}`,
  },
};
