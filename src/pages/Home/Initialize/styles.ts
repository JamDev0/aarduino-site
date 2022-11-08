import styled from "styled-components";

export const HomeStartContainer = styled.main`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 8rem;
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

  :hover {
    background-color: ${params => params.theme.colors.green[300]};
  }
`