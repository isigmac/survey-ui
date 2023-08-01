import { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";

const UserInfo: FC = () => {
  return (
    <div>
      <Link to={LOGIN_PATHNAME}>Login</Link>
    </div>
  );
};

export default UserInfo;
