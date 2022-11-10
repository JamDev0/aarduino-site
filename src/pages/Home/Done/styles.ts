import styled from "styled-components";

export const HomeDoneContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 160%;
    color: ${params => params.theme.colors.green[300]};
  }

  > h2 {
    font-size: 2rem;
    line-height: 160%;
    color: ${params => params.theme.colors.text.text};
  }
`