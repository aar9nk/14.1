import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return(
    <>
      <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link to="/">
          <p><strong>Website</strong></p>
        </Link>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/Resources">
            <p>Resources</p>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}