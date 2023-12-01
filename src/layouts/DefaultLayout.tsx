import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar.tsx";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* Add Footer */}
    </>
  );
};

export default DefaultLayout;
