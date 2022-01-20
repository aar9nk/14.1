import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ fontSize = 16, onClick, active, children, to }) {
  return (
    <Link to={to} onClick={() => onClick}>
      <p
        style={{
          color: active === {to} ? "green" : "black",
          fontSize: fontSize
        }}
      >
        {children}
      </p>
    </Link>
  );
}
