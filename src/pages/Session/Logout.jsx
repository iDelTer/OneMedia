import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserSession, removeUserSession } from "../../utils/UserProfile";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const session = getUserSession();
    session ? removeUserSession() : navigate("/login");
  });

  return <div></div>;
}

export default Logout;
