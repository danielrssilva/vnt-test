import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  background: ${theme.gradients.primaryToSecondaryBottomRight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  padding: 1rem;
  flex: 1;
  min-height: 600px;
  min-width: 320px;
  justify-self: flex-start;
  .divider {
    position: absolute;
    margin: auto;
    width: 100%;
    height: 1px;
    background: ${theme.colors.border}55;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .divider-circle {
    position: absolute;
    margin: auto;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 1px solid ${theme.colors.border}55;
  }
  @media (max-width: 1050px) {
    min-width: 380px;
  }
  @media (max-width: 450px) {
    min-width: 200px;
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;
