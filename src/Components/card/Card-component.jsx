import React from "react";
import "./Card-style.css";

const Card = ({ id, name, email }) => {
  return (
    <main>
      <div id="card">
        <img
          src={`https://robohash.org/${id}?set=set5`}
          width="300px"
          alt="neighbor"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </main>
  );
};

export default Card;
