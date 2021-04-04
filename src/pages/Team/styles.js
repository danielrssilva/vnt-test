import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3em 1em;
  flex-wrap: wrap;
  section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #8d8d8d;
  font-size: 1rem;
  text-align: center;
  margin: 2rem 3rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 4%;
    box-sizing: border-box;
    justify-content: space-between;
    .tags-div {
      margin-top: 3rem;
    }
    &.error {
      label {
        color: #c50341;
      }
      input,
      textarea {
        border: 1px solid #c50341;
        color: #c50341;
      }
    }
    button {
      background: linear-gradient(to bottom, #9b357d, #782c7f);
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
      margin-top: 1rem;
      padding: 10px;
      color: #ffffff;
      font-weight: bold;
    }
  }
  label.input-label {
    font-weight: bold;
    color: #333333;
    margin: 2rem 0 5px 0;
  }
  input,
  textarea {
    border-radius: 3px;
    border: 1px solid #dadada;
    padding: 8px 10px;
    resize: none;
    ::placeholder {
      color: #d1d1d1;
    }
  }
  textarea {
    height: 200px;
  }
  .radio-div {
    display: flex;
    flex-direction: row;
    padding: 0;
    label {
      margin-right: 2rem;
    }
  }
  input[type="radio"] {
    height: 15px;
    width: 15px;
    margin-right: 5px;
  }
  .player-list {
    justify-content: flex-start;
  }
`;

export const Select = styled.select`
  position: relative;
  display: inline-block;
  font-family: Arial;
  margin-left: 2rem;
  width: 130px;
  height: 25px;
  padding-left: 1rem;
`;
