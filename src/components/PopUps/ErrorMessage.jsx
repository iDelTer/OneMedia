import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { resetMessage } from "../../actions";
import "./ErrorMessage.css";

function ErrorMessage({ message, resetMessage }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
      resetMessage();
    }, 5000);
  }, [message]);

  return (
    display && (
      <div className="error-container">
        <div className="error-text">
          <span>{message}</span>
        </div>
        <div className="error-menu">
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  resetMessage: () => dispatch(resetMessage()), // Mapea la nueva acción a props
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);

// export default ErrorMessage;
