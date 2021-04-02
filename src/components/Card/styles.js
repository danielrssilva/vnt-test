import styled from "styled-components";
import { theme } from "../../constants/constants";

export const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0 0 2px 0 ${() => theme.colors.border};
  border-radius: 10px;
  flex: 1;
  margin: 0 2rem 2rem 2rem;
  .inner-card {
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2em;
  border-bottom: 1px solid ${() => theme.colors.border};
`;

export const Title = styled.h2`
  color: ${() => theme.colors.secondary};
`;

export const Button = styled.button`
  background: ${() => theme.gradients.buttonGradient};
  color: white;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 9px;
  font-weight: 100;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px 0 ${() => theme.colors.secondary}55;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    box-shadow: 0 0 0 3px ${() => theme.colors.tertiary};
    outline: none;
  }
`;
