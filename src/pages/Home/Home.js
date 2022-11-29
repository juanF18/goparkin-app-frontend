import React from "react";
import { NavBar } from "../../components/layout";
import { MapView } from "../../components/map";
import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <MapView />
    </div>
  );
}
