import { useState, useEffect } from "react";
import "./popups.css";
import "./PermanentMessage.css";

function PermanentMessage(msg) {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(msg);
  }, []);

  function closeShow() {
    setShow(false);
  }

  return (
    <div className="container-message">
      {(() => {
        if (show) {
          return (
            <div className="permanent-message">
              <p className="message-text">{message}</p>
              <ul>
                <li className="message-button" onClick={closeShow()}>
                  <i class="bi bi-x"></i>
                </li>
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default PermanentMessage;
