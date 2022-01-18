import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return(
    <header>
      <a href='/'>
        <p>Logo</p>
      </a>
      <Link to='/about'>
        <p>About</p>
      </Link>
      <Outlet />
    </header>
  )
}

export default NavBar;
