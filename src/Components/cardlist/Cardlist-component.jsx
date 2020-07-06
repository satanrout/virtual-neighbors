import React from "react";
import Card from "../card/Card-component";
import "./Cardlist-style.css";

const Cardlist = ({ neighbors }) => {
  return (
    <div id="cardlist">
      {neighbors.map((neighbor) => {
        return (
          <Card
            key={neighbor.id}
            id={neighbor.id}
            name={neighbor.name}
            email={neighbor.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
