import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <a className="logo" href="/">
          NAME
        </a>
        <ul className="nav-links">
          <li>
            <a href="/recipe">Find Recipes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
