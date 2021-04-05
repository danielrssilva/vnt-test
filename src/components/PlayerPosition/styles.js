import styled from "styled-components";

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 1rem;
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
    box-shadow: ${({ hasName }) => (hasName ? "0 0 5px 0 #ffffff99" : "none")};
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
