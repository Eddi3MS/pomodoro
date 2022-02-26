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
    span {
      font-family: "Azeret Mono", sans-serif;
      font-size: 3rem;
    }
  }

  .Buttons {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.5rem 1rem;
      border: 0;
      background-color: #f6f7f9;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.5px;
      &:hover {
        background-color: #d9e0ee;
      }
    }
  }
`;
