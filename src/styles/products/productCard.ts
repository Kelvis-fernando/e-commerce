import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 250px;
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
    justify-content: space-around;
    padding-top: 0.3rem;
    width: 100%;
  }

  p {
    margin-top: 0.5rem;
    color: #a1a2a6;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const CardAction = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 0.3rem;

  svg {
    margin-top: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      color: #bd2a2e;
    }
  }
`;

export const CardButton = styled.button`
  border-radius: 0.3rem;
  background-color: #033b3d;
  color: #fff;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0d4a3a;
  }
`;
