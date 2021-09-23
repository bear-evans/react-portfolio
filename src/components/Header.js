import React from "react";

export default function Header() {
  const headerStyles = {
    backgroundImage: `url("./images/header-background.jpg")`,
    backgroundSize: "cover",
    height: "80vh",
    textAlign: "center",
    paddingTop: "10vh",
    fontFamily: "Impact, Serif",
    fontSize: "10em",
    color: "silver",
  };

  return (
    <div className="bg-dark rounded-lg" style={headerStyles}>
      <span style={{ paddingRight: "5em" }}>Hi,</span>
      <br /> I'm <span style={{ color: "white" }}>Bear</span>
    </div>
  );
}
