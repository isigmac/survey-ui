import { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "antd";

import { LOGIN_PATHNAME, REGISTER_PATHNAME } from "../router";

const Home: FC = () => {
  const nav = useNavigate();

  function clickHandler() {
    // nav("/login?b=20");
    nav({ pathname: LOGIN_PATHNAME, search: "b=20" });
  }

  return (
    <div>
      <p>Home</p>
      <div>
        <Button onClick={clickHandler}>Login</Button>
        &nbsp;
        <Link to={REGISTER_PATHNAME}>Register/user-info</Link>
      </div>
    </div>
  );
};

export default Home;
