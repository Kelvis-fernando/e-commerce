import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 250px;
  height: 380px;
  background-color: #f5f5f1;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 5px;
  padding: 0.5rem;

  &:hover {
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 80%;
    width: 100%;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.3rem;
    text-align: center;
  }

  h2 {
    color: #555;
    font-style: italic;
    display: flex;
    padding-top: 0.3rem;
  }

  p {
    margin-top: 0.5rem;
    color: #A1A2A6;
    font-size: 0.8rem;
    text-align: center;
  }
`;
