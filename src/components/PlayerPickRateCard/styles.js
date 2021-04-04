import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  background: ${theme.gradients.primaryToSecondaryBottom};
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 10px;
  flex: 1;
  margin: 0 2rem;
  padding: 2rem 5rem;
  h2 {
    margin-top: 0;
  }
  .divider {
    position: absolute;
    margin: auto;
    width: 1px;
    height: 100%;
    background: ${theme.colors.border}55;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .divider-circle {
    position: absolute;
    margin: auto;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 1px solid ${theme.colors.border}55;
  }
  .player-info {
    display: flex;
  }
  .player-icon-wrapper {
    &.highest {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23AD7FC7FF' stroke-width='7' stroke-dasharray='13%2c 13' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
    }
    padding: 10px;
    border-radius: 100px;
  }
  .player-icon {
    height: 130px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #ffffff;
    color: #353535;
    box-shadow: 0 0 0 2px #a40862;
    box-shadow: 0 0 7px 0 ${theme.colors.primary};

    font-size: 2.5rem;
    font-weight: bold;
  }
  span {
    border-bottom: 1px solid white;
    height: 25px;
    width: 55px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
