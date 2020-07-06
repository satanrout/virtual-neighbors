import React from "react";
import "./Header-style.css";

const Header = ({ searchChange }) => {
  return (
    <header>
      <h1>Virtual Neighbors</h1>
      <input
        onChange={searchChange}
        type="search"
        placeholder="search neighbors"
      />
    </header>
  );
};

export default Header;
