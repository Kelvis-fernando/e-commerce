import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.2rem;

  img {
    height: 40rem;
    width: 65rem;
  }

  h1 {
    font-size: 3rem;
    color: #b2bebf;
    font-weight: 400;
  }
  h2 {
    font-size: 2.5rem;
    color: #b2bebf;
    font-weight: 300;
  }
`;

export const HomeProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #889c9b;
  width: 98vw;
  margin-top: 1rem;

  h1 {
    color: #FFF;
    font-weight: 400;
  }
`;
