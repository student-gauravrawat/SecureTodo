import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/todoSlice";
import Interface from "./pages/Interface";
import ProjectPage from "./pages/ProjectPage";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

   if (!user) {
    return <Interface />;
  }

  return (
    <>
       <Outlet/>
    </>
  );
}

export default App;
