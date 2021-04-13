import React from "react";
import "../home.css";
import NavBar from "../NavBar";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Home() {
  return (
    <body className="HomeBody">
      <section>
        <NavBar />
        <h1 className="homeh1">Find new Recipe's today!</h1>
        <h2 className="homeh2">Click below to get started</h2>
        <Link to="/recipe">
          <button
            className="homeBtn"
            alt="Button to redirect to the recipe page"
            src=""
          >
            {" "}
            Find Recipe's Now{" "}
          </button>
        </Link>
      </section>
    </body>
  );
}
