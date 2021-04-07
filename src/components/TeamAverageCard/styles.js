import styled from "styled-components";

export const Container = styled.div`
  margin: 1.3rem;
  margin-top: 0;
  flex: 1;
  color: #353535;
  flex-wrap: wrap;
  line-break: auto;
  p {
    font-weight: bold;
  }
`;

export const TeamsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #e8e2e7;
  padding: 0 4px 4px 4px;
  border-radius: 10px;
  a {
    text-decoration: none;
  }
`;

export const TeamRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: white;
  border-radius: 5px;
  margin-top: 4px;
  border: ${({ highlight }) => (highlight ? "1px solid #c50341" : "none")};
  color: #353535;
  cursor: pointer;
  &:hover {
    color: #b13f7d;
    background: #f7eef7;
    button {
      display: inline-block;
    }
  }
  .team-avg {
    font-weight: bold;
  }
  &::first-of-type {
    margin-top: 10px;
  }
`;
