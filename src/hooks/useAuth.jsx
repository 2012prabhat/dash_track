"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth(redirectToLogin = true) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("userDetails");

    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      setUser(null);

      // Redirect only if user is not logged in
      if (redirectToLogin) {
        router.push("/login");
      }
    }
  }, [router, redirectToLogin]);

  const logout = () => {
    localStorage.removeItem("userDetails");
    setUser(null);
    router.push("/login");
  };

  return { user, isAuthenticated: !!user, logout };
}
