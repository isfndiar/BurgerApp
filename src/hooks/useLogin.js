import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";
export default function useLogin() {
  // const history = useLocation();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      // window.location.href = "/login";
      // history.push("/login");
    }
  }, []);
  return {
    username,
  };
}
