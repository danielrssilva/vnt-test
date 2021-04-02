import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
  return (
    <Container>
      <Link to="/" className="logo-title">
        <Logo /> Squad Management Tool
      </Link>
      <div className="user-name">
        John Doe <div className="user-icon">JD</div>
      </div>
    </Container>
  );
};

export default Header;
