// src/dashboard/auth.ts
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
