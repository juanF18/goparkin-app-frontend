import React from "react";
import { NavBar } from "../../components/Layout";
import "./UnLoggedLayout.css";

export function UnLoggedLayout(props) {
  const { children } = props;
  return (
    <>
      <NavBar />
      <div className="children-container">{children}</div>
    </>
  );
}
