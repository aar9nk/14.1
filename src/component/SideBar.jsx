import { Outlet } from "react-router";

function SideBar() {
  return(
    <div>
      <p>I'm a Side bar</p>
      <Outlet />
    </div>
  )
}

export default SideBar;
