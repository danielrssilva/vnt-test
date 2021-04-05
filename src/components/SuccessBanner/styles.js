import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 3rem;
  height: 3rem;
  width: 100vw;
  height: calc(100vh - 3rem);
  background: #00000055;
  overflow: hidden;
  z-index: 2;
  color: #333333;
  font-weight: bold;
  font-size: 1.5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 200px;
    background: white;
    border-radius: 10px;
  }
`;
