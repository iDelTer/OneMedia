import { useNavigate, Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div id="home-container">
      <p id="home-p-one">This is Home!</p>
      <p id="home-p-two">
        You should go to your <Link to="/account">profile</Link> or{" "}
        <Link to="/register">create a new account</Link>.
      </p>
    </div>
  );
}

export default Home;
