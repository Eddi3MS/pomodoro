import styled from "styled-components";

import "@fontsource/azeret-mono";

export const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #f6f7f9;

  .Timer {
    display: flex;
    align-items: center;

    span {
      font-family: "Azeret Mono", sans-serif;
      font-size: 3rem;
    }
  }

  .Buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 0;
      border: 0;
      background-color: #f6f7f9;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.5px;

      display: flex;
      align-items: center;

      span {
        padding: 0.5rem 1rem;
        display: inline-block;
        width: 50%;
        height: 100%;
        transition: all 0.2s ease-in-out;
      }

      .start {
        background-color: ${(props) => (props.isPaused ? "#f6f7f9" : "green")};
        color: ${(props) => (props.isPaused ? "#202023" : "#f6f7f9")};

        &:hover {
          background-color: #189118;
          color: #f6f7f9;
        }
      }

      .pause {
        background-color: ${(props) => (props.isPaused ? "red" : "#f6f7f9")};
        color: ${(props) => (props.isPaused ? "#f6f7f9" : "#202023")};

        &:hover {
          background-color: #bd1c1c;
          color: #f6f7f9;
        }
      }

      .restart {
        width: 100%;
        background-color: #f6f7f9;
        color: #202023;

        &:hover {
          background-color: #2e63ce;
          color: #f6f7f9;
        }
      }
    }
  }
`;
