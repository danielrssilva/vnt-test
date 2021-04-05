import React from "react";
import { Container } from "./styles";
import { useDrag } from "react-dnd";
const PlayerCard = ({ player }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "player",
    item: player,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return collected.isDragging ? (
    <Container ref={dragPreview}>
      <div>
        <p>
          <span>Name:</span> {player.player_name}
        </p>
        <p>
          <span>Age:</span> {player.player_age}
        </p>
      </div>
      <div>
        <p>
          <span>Nacionality:</span> {player.player_country}
        </p>
      </div>
    </Container>
  ) : (
    <Container ref={drag} {...collected}>
      <div>
        <p>
          <span>Name:</span> {player.player_name}
        </p>
        <p>
          <span>Age:</span> {player.player_age}
        </p>
      </div>
      <div>
        <p>
          <span>Nacionality:</span> {player.player_country}
        </p>
      </div>
    </Container>
  );
};

export default PlayerCard;
