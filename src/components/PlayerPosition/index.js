import React, { useEffect, useState } from "react";
import { CircleContainer } from "./styles";
import { useDrop } from "react-dnd";

import PropTypes from "prop-types";

const PlayerPosition = ({ id, addPlayer, removePlayer, currPlayer }) => {
  const [name, setName] = useState(currPlayer.name);

  useEffect(() => {
    if (currPlayer.name) {
      let name = currPlayer.name;
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
      let initials = [...name?.matchAll(rgx)] || [];
      initials = (
        (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
      ).toUpperCase();
      setName(initials);
    }
  }, [currPlayer]);

  const [player, setPlayer] = useState();
  const changeItem = (item) => {
    const player = {
      id: item.player_key,
      position: id,
      name: item.player_name,
      age: item.player_age,
    };
    addPlayer(player);
    setPlayer(player);
    let name = player.name;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials = [...name?.matchAll(rgx)] || [];
    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();
    setName(initials);
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
      setName();
    }
  };

  return (
    <CircleContainer
      key={`${id}`}
      ref={drop}
      hasName={name ? true : false}
      onDoubleClick={(e) => handleClick(e)}
      onContextMenu={(e) => handleClick(e)}
      title={name || "Drop a player to add to this position"}
      id={`${id}`}
    >
      <span
        style={{
          boxShadow: isOver ? "0 0 10px 0 #552C8A" : "",
        }}
      >
        {name || "+"}
      </span>
    </CircleContainer>
  );
};

PlayerPosition.propTypes = {
  id: PropTypes.number.isRequired,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerPosition;
