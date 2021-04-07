import React from "react";
import { Container, Row } from "./styles";
import PlayerPosition from "../PlayerPosition";

const FormationCard = ({ formation, addPlayer, removePlayer, players }) => {
  let playerId = 0;
  const renderRows = () => {
    let formationArray = formation.split("-").map((e) => {
      return e.trim();
    });
    formationArray.reverse();
    let rows = [];
    formationArray.map((e) => {
      let row = [];
      for (let i = 1; i <= e; i++) {
        let currentPlayer = {};
        playerId++;
        if (players && players.length > 0 && players[playerId])
          currentPlayer = players[playerId];
        row.push(
          <PlayerPosition
            id={playerId}
            addPlayer={addPlayer}
            removePlayer={removePlayer}
            currPlayer={currentPlayer}
            key={`${playerId}`}
          />
        );
      }
      rows.push(<Row key={`${e}-${playerId}`}>{row}</Row>);
    });
    rows.push(
      <Row>
        <PlayerPosition
          id={0}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          currPlayer={(players && players[0]) || {}}
        />
      </Row>
    );
    return rows;
  };
  return (
    <Container>
      {renderRows()}
      <div className="divider" />
      <div className="divider-circle" />
    </Container>
  );
};

export default FormationCard;
