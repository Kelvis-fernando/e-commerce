import styled from "styled-components";

export const ProducerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const ProducerActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1rem;

  button {
    margin-left: 0.5rem;
    height: 2.5rem;
    border: 1px solid #fff;
    background-color: #033b3d;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    svg {
      font-size: 1.2rem;
      margin-right: 0.2rem;
    }

    &:hover {
      color: #b2bebf;
    }
  }
`;

export const ProducerItems = styled.div`
  margin-top: 2rem;
  width: 100%;

  table {
    width: 100%;
  }
  thead {
    display: flex;
    flex-direction: row;

    tr {
      margin-top: 1rem;
      width: 100%;
      th {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #a1a2a6;
        padding: 1rem;
        width: 100%;

        svg {
          cursor: pointer;
          color: #f2ae30;
          &:hover {
            color: #f5c46b;
          }
        }

        span {
          width: 10%;
          text-align: center;
        }
      }
    }
  }

  tbody {
    display: flex;

    tr {
      margin-top: 1rem;
      width: 100%;
      th {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #a1a2a6;
        padding: 1rem;
        width: 100%;

        svg {
          cursor: pointer;
          color: #f2ae30;
          &:hover {
            color: #f5c46b;
          }
        }

        span {
          width: 20%;
          text-align: left;
          svg {
            color: #bd2a2e;
            &:hover {
              color: #bd4646;
            }
            margin-left: 1rem;
          }
        }

        &:hover {
          background-color: #203d3e;
        }
      }
    }
  }
`;
