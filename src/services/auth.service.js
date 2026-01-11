import api from "./api";

export const loginAdmin = (data) =>
  api.post("/admin/login", data);

export const verifyAdmin = () =>
  api.post("/admin/verify");
