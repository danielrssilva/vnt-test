import React from "react";
import { Container } from "./styles";

const SuccessBanner = () => {
  return (
    <Container data-testid="modal-success">
      <div>
        <p>Saving changes...</p>
        <div className="loader"></div>
      </div>
    </Container>
  );
};

export default SuccessBanner;
