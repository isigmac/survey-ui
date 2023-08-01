import { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "antd";

const Home: FC = () => {
  const nav = useNavigate();

  function clickHandler() {
    // nav("/login?b=20");
    nav({ pathname: "/login", search: "b=20" });
  }

  return (
    <div>
      <p>Home</p>
      <div>
        <Button onClick={clickHandler}>Login</Button>
        &nbsp;
        <Link to="/register?a=10">Register</Link>
      </div>
    </div>
  );
};

export default Home;
