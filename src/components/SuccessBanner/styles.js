import styled from "styled-components";
import { theme } from "../../constants/constants";
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
    flex-direction: column;
    width: 320px;
    height: 200px;
    background: white;
    border-radius: 10px;
    .loader {
      border: 3px solid #f3f3f3;
      border-radius: 50%;
      border-top: 3px solid ${theme.colors.primary};
      width: 35px;
      height: 35px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
