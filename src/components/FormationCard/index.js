import React, { useState } from "react";
import { Container, CircleContainer, Row } from "./styles";
import { useDrop } from "react-dnd";
const DropTarget = (config, id) => {
  const [name, setName] = useState();
  const [player, setPlayer] = useState();
  const changeItem = (item) => {
    setPlayer(item);
    let name = item.player_name;
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
    e.preventDefault();
    setName();
  };

  return (
    <>
      <CircleContainer
        key={`circle-${config}-${id}`}
        ref={drop}
        hasName={name ? true : false}
        onDoubleClick={(e) => handleClick(e)}
        onContextMenu={(e) => handleClick(e)}
        title={player?.player_name}
      >
        <span
          style={{
            boxShadow: isOver ? "0 0 10px 0 #552C8A" : "",
          }}
        >
          {name ? name : "+"}
        </span>
      </CircleContainer>
    </>
  );
};
const FormationCard = ({ formation }) => {
  const renderRows = () => {
    let formationArray = formation.split("-").map((e) => {
      return e.trim();
    });
    formationArray.reverse();
    let rows = [];
    formationArray.map((e) => {
      let row = [];
      for (let i = 0; i < e; i++) {
        row.push(DropTarget(e, i));
      }
      rows.push(<Row>{row}</Row>);
    });
    return rows;
  };
  return (
    <Container>
      {renderRows()}
      <Row>{DropTarget("keeper", "0")}</Row>
      <div className="divider" />
      <div className="divider-circle" />
    </Container>
  );
};

export default FormationCard;
