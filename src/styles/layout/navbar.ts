import styled from "styled-components";

export const Header = styled.header`
  background-color: #033b3d;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
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

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

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
    margin-top: 1rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Login = styled.div`
  display: flex;
  margin-top: 1rem;

  svg {
    cursor: pointer;
    &:hover {
      color: #b2bebe;
    }
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
