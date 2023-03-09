import styled from "styled-components";

export const Header = styled.header`
  background-color: #033b3d;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 0.3rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    margin: 1rem;

    &:hover {
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
      font-weight: bold;
    }
  }
`;

export const Search = styled.div`
  input {
    background-color: #fff;
    border: none;
    border-radius: 0.2rem;
    height: 25px;
  }
`;

export const Login = styled.div`
  display: flex;

  svg {
    cursor: pointer;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
    padding: 0.5rem;
    width: 5rem;
    border-radius: 0.4rem;
    cursor: pointer;
    font-weight: bold;
    border: none;
    margin-right: 1rem;

    &:hover {
      color: #555;
    }
  }
`;
