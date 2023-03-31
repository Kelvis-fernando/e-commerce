import styled from "styled-components";

export const ProductExpandedModalContainer = styled.div`
  display: flex;
  position: relative;

  img {
    width: 20rem;
    height: 25rem;
  }
`;

export const CoffeInfo = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  span {
    color: #555;
    margin-top: 0.3rem;
  }

  svg {
    width: 3rem;
    color: #f2ae30;
  }

  button {
    border-radius: 0.3rem;
    background-color: #033b3d;
    color: #fff;
    border: none;
    padding: 10px;
    margin-top: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #0d4a3a;
    }
  }
`;

export const CoffeSpecification = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;

  div {
    margin: 0.5rem;

    h3 {
      font-size: 0.9rem;
      color: #555;
      font-style: italic;
    }
  }
`;
