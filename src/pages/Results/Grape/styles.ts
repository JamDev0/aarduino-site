import styled from "styled-components";

export const ResultGrapeContainer = styled.div`
  width: 100%;

  padding: 3rem;

  `

export const IndicatorContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;

  color: ${params => params.theme.colors.text.grape};

  > h1 {
    min-width: 5rem;

    font-family: 'Roboto Slab';
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    padding-bottom: 0.1875rem;

    border-bottom: 3px solid ${params => params.theme.colors.red};
  }

  > svg {
    color: ${params => params.theme.colors.red};

    font-size: 2.25rem;

    line-height: 0;
  }
`