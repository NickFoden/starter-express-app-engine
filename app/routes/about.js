import React from "react";
import { Link } from "react-router-dom";

export function meta({}) {
  return {
    title: "About Remix",
    description: `Learn more in the docs`,
  };
}

export default function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>About Remix</h2>
      <p>
        A remix is a piece of media which has been altered or contorted from its
        original state by adding, removing, and changing pieces of the item.{" "}
      </p>
    </div>
  );
}
