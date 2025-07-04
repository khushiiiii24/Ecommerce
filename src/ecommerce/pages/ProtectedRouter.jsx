import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function ProtectedRouter({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true/false = result

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const res = await axios.get("https://ecommerce-api-8ga2.onrender.com/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    verifyUser();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRouter;
