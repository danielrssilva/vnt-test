import styled from "styled-components";

export const Container = styled.div`
  .input-tag {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background: white;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    padding: 15px;
    min-height: 100px;
    margin-top: 5px;
  }

  .input-tag input {
    border: none;
    width: 100%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .tags div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 20px;
    border-radius: 50px;
    background: #c50341;
    color: white;
    list-style: none;
    padding: 5px 10px;
    margin: 0 5px 5px 0;
  }

  .tags div button {
    align-items: center;
    background: none;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    line-height: 0;
    margin: 2px -8px 0 0;
  }

  .tags div.tag-input {
    background: none;
    flex-grow: 1;
  }
`;
