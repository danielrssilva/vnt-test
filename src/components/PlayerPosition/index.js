import React, { useEffect, useState } from "react";
import { Container, CircleContainer, PlayerInfo } from "./styles";
import { useDrop } from "react-dnd";
import { getPlayerInitials } from "../../constants/constants";

import PropTypes from "prop-types";

const PlayerPosition = ({ id, addPlayer, removePlayer, currPlayer }) => {
  const [renderInfo, setRenderInfo] = useState(false);
  useEffect(() => {
    if (currPlayer?.name) {
      setName(getPlayerInitials(currPlayer.name));
    }
  }, [currPlayer]);
  const [name, setName] = useState();
  const [player, setPlayer] = useState();
  const changeItem = (item) => {
    const player = {
      id: item.player_key,
      position: id,
      name: item.player_name,
      nacionality: item.player_country,
      age: item.player_age,
    };
    addPlayer(player);
    setPlayer(player);
    setName(getPlayerInitials(player.name));
  };

  const [{ isOver }, drop] = useDrop({
    accept: "player",
    drop: (item) => changeItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleClick = (e) => {
    if (player || currPlayer) {
      removePlayer(player || currPlayer);
      e.preventDefault();
      setPlayer();
      setName();
    }
  };

  return (
    <Container
      onMouseEnter={() => setRenderInfo(true)}
      onMouseLeave={() => setRenderInfo(false)}
    >
      <CircleContainer
        key={`${id}`}
        ref={drop}
        hasName={currPlayer?.name || player ? true : false}
        onDoubleClick={(e) => handleClick(e)}
        onContextMenu={(e) => handleClick(e)}
        onMouseEnter={() => setRenderInfo(true)}
        onMouseLeave={() => setRenderInfo(false)}
        isOver={isOver}
        id={`${id}`}
      >
        <span>{currPlayer?.name || player ? name : "+"}</span>
      </CircleContainer>
      {renderInfo && (
        <PlayerInfo hasPlayer={currPlayer?.name || player}>
          {currPlayer?.name || player ? (
            <div>
              <p>
                <span className="player-name">
                  {currPlayer?.name || player?.name}
                </span>
              </p>
              <div>
                <p>
                  <span>Nacionality: </span>
                  {currPlayer?.nacionality || player?.nacionality}
                </p>
                <p>
                  <span>Age: </span>
                  {currPlayer?.age || player?.age}
                </p>
              </div>
            </div>
          ) : (
            <span>Drop a player to add to this position</span>
          )}
        </PlayerInfo>
      )}
    </Container>
  );
};

PlayerPosition.propTypes = {
  id: PropTypes.number.isRequired,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerPosition;
