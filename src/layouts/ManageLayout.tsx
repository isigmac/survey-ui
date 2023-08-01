import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Managelayout.module.scss";

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManageLayout left</p>
        <button>Create Survey</button>
        <button>My Survey</button>
        <button>Star Survey</button>
        <button>Trash</button>
      </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ManageLayout;
