import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 250px;
  height: 300px;
  background-color: #f5f5f1;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 5px;

  &:hover {
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    height: 80%;
    width: 100%;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.1rem;
  }

  h2 {
    color: #333333;
    font-style: italic;
  }

  h3 {
    color: #999999;
    font-size: 1rem;
  }
`;
