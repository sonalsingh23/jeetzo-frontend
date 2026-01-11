import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyAdmin } from "../services/auth.service";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verifyAdmin();
        setAuthorized(true);
      } catch {
        localStorage.removeItem("token");
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return null;
  return authorized ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
