import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { getTeams } from "../../services/session";
import { getPlayerInitials } from "../../constants/constants";

const PlayerPickRateCard = () => {
  const [mostPickedPlayer, setMostPickedPlayer] = useState({ percentage: 0 });
  const [leastPickedPlayer, setLeastPickedPlayer] = useState({
    percentage: 101,
  });

  const getFrequency = (players) => {
    const totalItems = players.length;
    const uniqueItems = players.filter(
      (player, index, self) =>
        index ===
        self.findIndex((t) => t.id === player.id && t.name === player.name)
    );
    uniqueItems.forEach((currentPlayer) => {
      const numItems = players.filter(
        (player) => player.id === currentPlayer.id
      );
      const percentage = parseFloat(
        ((numItems.length * 100) / totalItems).toFixed(1)
      );
      if (percentage > mostPickedPlayer.percentage)
        setMostPickedPlayer({
          name: currentPlayer.name,
          percentage,
        });
      if (percentage < leastPickedPlayer.percentage)
        setLeastPickedPlayer({
          name: currentPlayer.name,
          percentage,
        });
    });
  };

  useEffect(() => {
    let teams = JSON.parse(getTeams());
    let players = [];
    teams?.forEach((team) => {
      team.players.forEach((player) => {
        if (player.id) players.push(player);
      });
    });
    getFrequency(players);
  });

  return (
    <Container isRed={false}>
      <div>
        <h2>Most picked player</h2>
        <div className="player-info">
          <div className="player-icon-wrapper highest">
            <div className="player-icon">
              {mostPickedPlayer.name
                ? getPlayerInitials(mostPickedPlayer.name)
                : "-"}
            </div>
          </div>
          <span>
            {mostPickedPlayer.percentage !== 0
              ? `${mostPickedPlayer.percentage}%`
              : "0%"}
          </span>
        </div>
      </div>
      <div className="divider" />
      <div className="divider-circle" />
      <div>
        <h2>Less picked player</h2>
        <div className="player-info">
          <div className="player-icon-wrapper">
            <div className="player-icon">
              {leastPickedPlayer.name
                ? getPlayerInitials(leastPickedPlayer.name)
                : "-"}
            </div>
          </div>
          <span>
            {leastPickedPlayer.percentage !== 101
              ? `${leastPickedPlayer.percentage}%`
              : "0%"}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default PlayerPickRateCard;
