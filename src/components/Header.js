import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <code>iK I am header component</code>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/side">Side page</Link>
          </li>
          <li>
            <Link to="/form">Form page</Link>
          </li>
          <li>
            <Link to="/404">404 page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
