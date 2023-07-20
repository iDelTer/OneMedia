import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalUserSession,
  removeUserSession,
} from "../../utils/UserProfile";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const session = getLocalUserSession();
    session ? removeUserSession() : navigate("/login");
  });

  return (
    <div>
      <p>Te has desconectado exitosamente</p>
    </div>
  );
}

export default Logout;
