import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 !important;
  font-weight: 500;
  padding: 1rem 0.5rem;
  th {
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
  }
  tr.team-row {
    transition: 0.2s all;
    border: 0;
    button {
      display: none;
      height: 1.1rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: #b13f7d;
    }
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
  display: flex;
  justify-content: space-between;
`;
