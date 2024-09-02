import { useDispatch, useSelector } from "react-redux";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Home from "./pages/Home";
import ImportantTasks from "./pages/ImportantTasks";
import InCompltedTasks from "./pages/InCompltedTasks";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { authActions } from "./stores/auth";

import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      if (!isLoggedIn) {
        dispatch(authActions.login());
      }
    } else if (
      !isLoggedIn &&
      location.pathname !== "/signup" &&
      location.pathname !== "/signin"
    ) {
      navigate("/signin");
    }
  }, [isLoggedIn, location.pathname, navigate, dispatch]);

  return (
    <div className="p-2 bg-gray-900 text-white h-screen relative">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<Home />}>
          <Route index element={<AllTasks />} />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
          <Route path="/incompleted-tasks" element={<InCompltedTasks />} />
          <Route path="/important-tasks" element={<ImportantTasks />} />
        </Route>
      </Routes>
    </div>
  );
}
