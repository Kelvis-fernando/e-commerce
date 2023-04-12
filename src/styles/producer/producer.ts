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

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
    h1,
    h2 {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
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

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProducerItems = styled.div`
  margin-top: 2rem;
  width: 100%;

  table {
    width: 100%;

    thead {
      th {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #a1a2a6;
        padding: 1rem;

        span {
          width: 10%;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        width: 100%;

        th {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #a1a2a6;
          padding: 1rem;

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
              margin-left: 1rem;

              &:hover {
                color: #bd4646;
              }
            }
          }

          &:hover {
            background-color: #203d3e;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 0rem;

    h1 {
      font-size: 1.5rem;
    }

    table {
      thead {
        th {
          span {
            width: 15%;
          }
        }
      }
    }
  }
`;
