import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  height: 3rem;
  font-weight: bold;
  padding: 0 1rem;

  input {
    height: 2.5rem;
    border: 1px solid #fff;
    background-color: #033b3d;
    padding-left: 0.5rem;
    margin-left: 1rem;
    color: #fff;
    border-radius: 0.2rem;
  }

  input::placeholder {
    color: #fff;
  }

  select {
    margin-left: 0.5rem;
    height: 2.5rem;
    border: 1px solid #fff;
    background-color: #033b3d;
    color: #fff;
    border-radius: 0.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 3rem;
    margin-top: 3rem;

    input {
      margin-top: 1rem;
      margin-left: 0;
      width: 100%;
    }

    select {
      margin-top: 1rem;
      margin-left: 0;
      width: 100%;
    }
  }
`;
