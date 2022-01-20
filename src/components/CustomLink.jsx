import { Link } from "react-router-dom";

export default function CustomLink({ onClick, active, children, to }) {
  return (
    <Link to={to} onClick={() => onClick}>
      <p
        style={{
          color: active === "getting-started" ? "green" : "black",
        }}
      >
        {children}
      </p>
    </Link>
  );
}
