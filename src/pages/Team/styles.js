import styled from "styled-components";
import { theme } from "../../constants/constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  &.formation-div {
    align-items: flex-start;
  }
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
    &.error,
    > div.error {
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
      margin-bottom: 2rem;
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
    margin-top: 5px;
    label {
      margin-right: 2rem;
    }
  }
  [type="radio"]:checked + label {
    color: ${theme.colors.primary};
  }
  [type="radio"]:not(:checked) + label {
    color: #d4d4d4;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    font-weight: 400;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: ${theme.gradients.buttonGradient};
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .player-list {
    justify-content: flex-start;
    max-height: 600px;
    overflow-y: auto;
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
