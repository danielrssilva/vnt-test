import React from "react";
import { Container } from "./styles";

const PlayerPickRateCard = () => {
  return (
    <Container>
      <div>
        <h2>Most picked player</h2>
        <div className="player-info">
          <div className="player-icon-wrapper highest">
            <div className="player-icon">CR</div>
          </div>
          <span>75%</span>
        </div>
      </div>
      <div className="divider" />
      <div className="divider-circle" />
      <div>
        <h2>Less picked player</h2>
        <div className="player-info">
          <div className="player-icon-wrapper">
            <div className="player-icon">NJ</div>
          </div>
          <span>25%</span>
        </div>
      </div>
    </Container>
  );
};

export default PlayerPickRateCard;
