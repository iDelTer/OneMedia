import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setMessage } from "../../actions";
import { error_messages as emsg } from "../../utils/error_messages";
import {
  getLocalUserSession,
  removeUserSession,
} from "../../utils/UserProfile";

function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const session = getLocalUserSession();
    session ? logginout() : navigate("/login");
  });

  const logginout = async () => {
    const res = await removeUserSession();
    if (res.message === 200) {
      navigate("/login");
    }
  };

  return (
    <div>
      <p>Te has desconectado exitosamente</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(null, mapDispatchToProps)(Logout);
// export default Logout;
