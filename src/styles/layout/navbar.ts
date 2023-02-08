import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  background-color: #444;
  height: 10vh;
  width: 100vw;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  justify-content: space-around;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
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
      color: #999;
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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4fdc7c;
    color: #fff;
    padding: 0.5rem;
    width: 5rem;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: bold;
    border: none;
    margin-right: 1rem;

    &:hover {
      background-color: #3faf63;
    }
  }
`;
