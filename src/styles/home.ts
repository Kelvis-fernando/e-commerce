import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
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

export const HomeWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  font-style: italic;
  text-align: center;

  h1 {
    color: #fff;
    font-weight: 400;
  }

  p {
    margin-top: 1rem;
    color: #B2BEBF;
    font-weight: 400;
  }

  a {
    margin-top: 1rem;
    border: none;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.3rem;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #555;
    }
  }
`;
