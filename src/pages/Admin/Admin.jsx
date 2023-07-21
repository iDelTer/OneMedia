import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalUserSession, askAuthoritation } from "../../utils/UserProfile";

function Admin() {
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    const session = getLocalUserSession();
    if (!session) navigate("/404");

    const fetchStatus = async () => {
      const data = await askAuthoritation();
      if (data.status === 404) navigate("/404");
    };
    fetchStatus();

    setLoad(true);
  }, []);

  return (
    <div>
      {load ? (
        <div id="admin-container">
          <p>Admin!</p>
        </div>
      ) : (
        <div>
          <p>Looking for the page if exists...</p>
        </div>
      )}
    </div>
  );
}

export default Admin;
