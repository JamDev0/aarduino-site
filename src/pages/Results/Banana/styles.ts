import styled from "styled-components";

export const ResultBananaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding: 3rem;

  > p {
    font-size: 2rem;

    margin-inline: 10rem;

    text-align: justify;
  }
`

export const IndicatorContainer = styled.div`
  width: 100%;

display: flex;
column-gap: 0.75rem;
align-items: center;
justify-content: center;

color: ${params => params.theme.colors.text.banana};

margin-bottom: 5rem;

> h1 {
  min-width: 5rem;

  font-family: 'Roboto Slab';
  font-size: 3.5rem;
  line-height: 120%;
  font-weight: bold;
  text-align: center;

  padding-bottom: 0.1875rem;

  border-bottom: 3px solid ${params => params.theme.colors.green[300]};
}

> svg {
  color: ${params => params.theme.colors.green[300]};

  font-size: 3.5rem;

  line-height: 0;
}
`

export const RestartBtn = styled.button`
  border: 3px solid ${params => params.theme.colors.text.banana};

  border-radius: 8px;
  background-color: transparent;

  padding: 0.5rem 1rem;

  cursor: pointer;

  font-weight: bold;
  font-size: 2.5rem;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  :hover {
    background-color: ${params => params.theme.colors.text.banana};

    color: ${params => params.theme.colors.text.button};
  }
` 