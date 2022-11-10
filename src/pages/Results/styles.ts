import styled from "styled-components";

import { LoadingFeedback } from "../../components/LoadingFeedback/styles";

export const ResultsContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  color: ${params => params.theme.colors.text.text};
  
  > h1 {
    margin-bottom: 1rem;
    
    font-weight: bold;
  }
`

export const CustomLoadingFeedback = styled(LoadingFeedback)`
  font-size: 10rem;
`