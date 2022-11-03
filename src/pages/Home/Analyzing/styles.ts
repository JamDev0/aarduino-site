import styled from "styled-components";
import { LoadingFeedback } from "./LoadingFeedback/styles";

export const HomeAnalyzingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  margin-bottom: 8rem;

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