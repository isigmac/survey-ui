import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/edit/Index";
import Statistics from "../pages/question/statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //home
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      //manage
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          { path: "list", element: <List /> },
          { path: "star", element: <Star /> },
          { path: "trash", element: <Trash /> },
        ],
      },

      //question
      {
        path: "question",
        element: <QuestionLayout />,
        children: [
          { path: "edit/:id", element: <Edit /> },
          { path: "statistics/:id", element: <Statistics /> },
        ],
      },

      { path: "*", element: <NotFound /> }, // 404 路由配置，都写在最后（兜底）
    ],
  },
]);

export default router;