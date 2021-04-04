import React from "react";
import { Container, CircleContainer, Row } from "./styles";

const FormationCard = ({ formation }) => {
  const renderRows = () => {
    let formationArray = formation.split("-").map((e) => {
      return e.trim();
    });
    formationArray.reverse();
    let rows = [];
    formationArray.map((e) => {
      let row = [];
      // if (e % 2 === 0 && e !== "2") {
      //   for (let i = 1; i < e; i++) {
      //     row.push(
      //       <CircleContainer key={`circle-${i}`}>
      //         <span>+</span>
      //       </CircleContainer>
      //     );
      //   }
      //   rows.push(
      //     <Row>
      //       <CircleContainer key={`circle-offset`}>
      //         <span>+</span>
      //       </CircleContainer>
      //     </Row>
      //   );
      // } else {
      for (let i = 0; i < e; i++) {
        row.push(
          <CircleContainer key={`circle-offset`}>
            <span>+</span>
          </CircleContainer>
        );
        // }
      }
      rows.push(<Row>{row}</Row>);
    });
    return rows;
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
