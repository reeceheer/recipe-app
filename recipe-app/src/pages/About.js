import React from "react";
import "../about.css";
import NavBar from "../NavBar";

export default function About() {
  return (
    <body className="AboutBody">
      <section className="aboutTEXT">
        <NavBar />
        <h1>
          <span>THIS RECIPE WEBSITE ALLOWS YOU TO SEARCH FOR</span>
          <span>RECIPES EASILY WITHIN A FEW CLICKS. IT IS </span>
          <span>DESIGNED THIS WAY SO USERS WHO HAVE</span>
          <span>
            VISUAL IMPAIRMENT ISSUES CAN EASILY BROWSE THROUGH RECIPES WITHOUT{" "}
          </span>
          <span>DISCOMFORT.</span>
        </h1>
      </section>
    </body>
  );
}
