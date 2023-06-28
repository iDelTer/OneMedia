import { useState, useEffect } from "react";

function TemporalMessage(msg) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => setMessage(msg), []);

  useEffect(() => {
    setTimeout(() => setShow(false), 3000);
  }, [show]);

  return (
    <div className="temporal-message">
      <p className="message-text">{message}</p>
    </div>
  );
}

export default TemporalMessage;
