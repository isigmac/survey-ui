import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Register: FC = () => {
  const nav = useNavigate();

  return (
    <div>
      <p>Register</p>
      <div>
        <button onClick={() => nav(-1)}>Return</button>
      </div>
    </div>
  );
};

export default Register;
