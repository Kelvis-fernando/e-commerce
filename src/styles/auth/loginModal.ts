import styled from "styled-components";

export const AuthModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  h2 {
    margin-top: 1rem;
    cursor: pointer;
  }

  h3 {
    font-size: 1.2rem;
    color: #a1a2a6;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  input {
    width: 20rem;
    height: 2.3rem;
    border: 1px solid #0d4a3a;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 1rem;
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
  }

  select {
    width: 20rem;
    height: 2.3rem;
    border: 1px solid #0d4a3a;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin-top: 0.3rem;
  }

  span {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    width: 100%;

    h2 {
      cursor: pointer;

      &:hover {
        color: #555;
      }
    }
  }
`;
