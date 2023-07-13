import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.id === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange()}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange()}
        />
        <input type="submit" value="Login" id="btn-login" />
      </form>
    </div>
  );
}

export default Register;
