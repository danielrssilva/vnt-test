import React from "react";
import { Container, CircleContainer, Row } from "./styles";

const FormationCard = ({ formation }) => {
  const renderRows = () => {
    let formationArray = formation.split("-").map((e) => {
      return e.trim();
    });
    let rows = [];
    formationArray.reverse();
    formationArray.map((e) => {
      let row = [];
      if (e % 2 === 0 && e !== "2") {
        for (let i = 1; i < e; i++) {
          row.push(Circle(`circle-${i}`));
        }
        rows.push(<Row>{Circle("circle-offset")}</Row>);
      } else {
        for (let i = 0; i < e; i++) {
          row.push(Circle("circle-offset"));
        }
      }
      rows.push(<Row>{row}</Row>);
    });
    return rows;
  };
  const Circle = (key) => {
    return (
      <CircleContainer key={key}>
        <span>+</span>
      </CircleContainer>
    );
  };
  return (
    <Container>
      {renderRows()}
      <Row>
        <CircleContainer>
          <span>+</span>
        </CircleContainer>
      </Row>
      <div className="divider" />
      <div className="divider-circle" />
    </Container>
  );
};

export default FormationCard;
