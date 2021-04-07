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

  const card = (
    <>
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
    </>
  );

  return collected.isDragging ? (
    <Container
      ref={dragPreview}
      key={player.player_key}
      className="player-card-drag"
    >
      {card}
    </Container>
  ) : (
    <Container
      ref={drag}
      key={player.player_key}
      id={`player-${player.player_key}`}
      className="player-card"
      {...collected}
    >
      {card}
    </Container>
  );
};

export default PlayerCard;
