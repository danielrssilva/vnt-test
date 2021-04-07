import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  overflow: visible;

  @media (max-width: 450px) {
    margin: 0;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' ${({ hasName }) => (hasName ? "stroke='%23FFFFFF'" : "stroke='%23FFFFFF55'")} stroke-width='3' stroke-dasharray='5%2c 5' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 50px;
  user-select: none;
  span {
    transition: 0.2s all;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ hasName }) => (hasName ? "#ffffff55" : "#ffffff55")};
    box-shadow: ${({ isOver, hasName }) =>
      hasName
        ? "0 0 8px 2px #ffffff55"
        : "" || isOver
        ? "0 0 10px 0 #552C8A"
        : ""};
    width: 60px;
    height: 60px;
    border: none;
    color: #ffffff;
    font-size: ${({ hasName }) => (hasName ? "1.5rem" : "2rem")};
    border-radius: 50px;
    font-weight: 100;
    padding-bottom: ${({ hasName }) => (hasName ? "3px" : "9px")};
    box-sizing: border-box;
  }

  @media (max-width: 450px) {
    margin: 0;
    margin: 0 5px;
    span {
      width: 40px;
      height: 40px;
    }
  }
`;

export const PlayerInfo = styled.div`
  position: absolute;
  z-index: 2;
  left: 80px;
  width: ${({ hasPlayer }) => (hasPlayer ? "230px" : "280px")};
  background-color: #f7f3f7;
  color: #262626;
  padding: 5px 1rem;
  border-radius: 5px;
  animation: fadeIn 0.3s;
  border: 2px solid ${theme.colors.tertiary};

  :before {
    content: "";
    position: absolute;
    left: -16.9px;
    top: 50%;
    width: 13px;
    height: 13px;
    background-color: #f7f3f7;
    border-bottom: 3px solid ${theme.colors.tertiary};
    border-left: 3px solid ${theme.colors.tertiary};
    transform: rotate(45deg) translateY(-69%);
    border-bottom-left-radius: 6px;
  }
  span {
    font-weight: 500;
    &.player-name {
      font-weight: 900;
      color: ${theme.colors.primary};
    }
  }
  p {
    font-weight: 100;
    margin: 5px;
  }
  div div {
    display: flex;
    justify-content: space-between;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
