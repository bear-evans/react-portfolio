import React, { Fragment } from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  const headerStyles = {
    backgroundImage: `url("./images/header-background.jpg")`,
    backgroundSize: "cover",
    height: "50vh",
    textAlign: "center",
    fontFamily: "Impact, Serif",
    fontSize: "10em",
    color: "silver",
  };

  return (
    <Fragment>
      <div className="bg-dark rounded-lg" style={headerStyles}>
        <span style={{ paddingRight: "5em" }}>Hi,</span>
        <br /> I'm <span style={{ color: "white" }}>Bear</span>
      </div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Fragment>
  );
}
