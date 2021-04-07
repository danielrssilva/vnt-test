import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 !important;
  font-weight: 500;
  padding: 1rem 0.5rem;
  th {
    position: relative;
    text-align: left;
    height: 3rem;
    padding-left: 2rem;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    &:first-of-type {
      width: 25%;
      position: relative;
      div {
        position: absolute;
        width: 1px;
        height: 2rem;
        background: #eeeeee;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    &:hover {
      color: #b13f7d;
      background: #f7eef7;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      right: 15px;
    }
    &:before {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;

      border-top: 5px solid #555759;
      border-bottom: 5px solid transparent;
      top: 28px;
    }
    &:after {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;

      border-bottom: 5px solid #555759;
      border-top: 5px solid transparent;
      top: 13px;
    }
    &.ascending {
      &:before {
        border-top: 5px solid #555759;
        border-bottom: 5px solid transparent;
      }
      &:after {
        border-bottom: 5px solid transparent;
        border-top: 5px solid transparent;
      }
    }
    &.descending {
      &:before {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
      &:after {
        border-bottom: 5px solid #555759;
        border-top: 5px solid transparent;
      }
    }
  }
  tr.team-row {
    transition: 0.2s all;
    border: 0;
    &:hover {
      color: #b13f7d;
      background: #f7eef7;
      button {
        display: inline-block;
      }
    }
  }
  td {
    padding: 1rem 2rem;
    border-bottom: 1px solid #eeeeee;
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

export const DescriptionRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  .buttons-row {
    display: flex;
    justify-content: space-between;
    > div {
      position: relative;
    }
  }
  button {
    display: none;
    height: 1.1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #b13f7d;
    &.disabled {
      color: gray;
      cursor: not-allowed;
    }
    &:hover {
      .tooltip {
        visibility: visible;
      }
    }
  }
`;

export const ButtonTooltip = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 2;
  left: -23px;
  background-color: #262626;
  color: white;
  padding: 5px 1rem;
  border-radius: 3px;
  top: -30px;
  animation: fadeIn 0.3s;

  :before {
    content: "";
    position: absolute;
    left: 30px;
    top: 15px;
    width: 13px;
    height: 13px;
    background-color: #262626;
    transform: rotate(45deg);
    border-radius: 1px;
    z-index: -1;
  }
  span {
    font-weight: 500;
    &.player-name {
      font-weight: 900;
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
`;
