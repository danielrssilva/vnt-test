import React from "react";
import { CardContainer, Header, Title, Button } from "./styles";
import { useHistory } from "react-router-dom";

const Card = ({ children, title, button }) => {
  const history = useHistory();
  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        {button && <Button onClick={() => history.push("/team")}>+</Button>}
      </Header>
      {children}
    </CardContainer>
  );
};

export default Card;
