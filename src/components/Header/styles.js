import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 2rem;
  color: white;
  background: ${theme.gradients.primaryToSecondaryRight};
  .logo-title,
  .user-name {
    display: flex;
    align-items: center;
    .user-icon {
      width: 35px;
      height: 35px;
      margin-left: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 80px;
      background: #f3f5f7;
      color: ${theme.colors.tertiary};
      font-weight: bold;
      font-family: ${theme.fonts[0]};
    }
  }
  .logo-title {
    font-weight: bold;
    text-decoration: none;
    color: white;
    svg {
      height: 37px;
      width: 37px;
      margin-right: 12px;
    }
  }
`;
