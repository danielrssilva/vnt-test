import React from "react";
import { Container } from "./styles";

const PlayerCard = ({ player }) => {
  return (
    <Container>
      <div>
        <p>
          <span>Name:</span> {player.name}
        </p>
        <p>
          <span>Age:</span> {player.age}
        </p>
      </div>
      <div>
        <p>
          <span>Nacionality:</span> {player.nacionality}
        </p>
      </div>
    </Container>
  );
};

export default PlayerCard;
