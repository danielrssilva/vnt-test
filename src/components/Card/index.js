import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Header, Title, Button } from "./styles";

const Card = ({ children, title, button }) => {
  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        {button && (
          <Link
            to={{
              pathname: "/team",
              teamProps: {},
            }}
          >
            <Button> +</Button>
          </Link>
        )}
      </Header>
      {children}
    </CardContainer>
  );
};

export default Card;
