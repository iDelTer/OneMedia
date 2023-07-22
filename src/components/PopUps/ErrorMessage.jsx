import { useState, useEffect } from "react";
import "./ErrorMessage.css";

function ErrorMessage({ msg }) {
	const [display, setDisplay] = useState(true);
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage(msg);

		setTimeout(() => {
			setDisplay(false);
		}, 5000);
	}, []);

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
    )
}

export default ErrorMessage;
