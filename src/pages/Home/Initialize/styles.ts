import styled from "styled-components";

export const HomeStartContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;

  margin-top: auto;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 8rem;
`

export const ConnectButton = styled.button`
  width: fit-content;

  border-radius: 6px;
  border: 0;

  padding: 0.25rem 1.5rem;

  font-weight: bold;
  font-size: 1rem;
  color: ${params => params.theme.colors.text.button};

  background-color: ${params => params.theme.colors.green[500]};

  cursor: pointer;

  transition: background-color 200ms ease-in-out;

  text-decoration: none;

  :hover {
    background-color: ${params => params.theme.colors.green[300]};
  }
`

export const StartButton = styled.button`
  border-radius: 8px;
  border: 0;

  padding: 1.25rem 2.5rem;

  font-weight: bold;
  font-size: 2rem;
  color: ${params => params.theme.colors.text.button};

  background-color: ${params => params.theme.colors.green[500]};

  cursor: pointer;

  transition: background-color 200ms ease-in-out;

  text-decoration: none;

  transition: opacity 350ms ease-in-out;

  :not(:disabled):hover {
    background-color: ${params => params.theme.colors.green[300]};
  }

  :disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }
`