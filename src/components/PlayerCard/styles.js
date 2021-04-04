import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  width: 100%;
  background: linear-gradient(to bottom, white, #e5e5e5);
  border: 2px dashed #e0e0e0;
  margin-top: 1rem;
  padding: 1rem 2rem;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
  }
  p {
    color: #ea2368;
    font-weight: 500;
    margin: 5px 0;
  }
  span {
    color: black;
    font-weight: bold;
  }
`;
