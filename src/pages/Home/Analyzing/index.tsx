import { CustomLoadingFeedback, HomeAnalyzingContainer } from "./styles";

export function HomeAnalyzing() {
  return (
    <HomeAnalyzingContainer>
      <h1>Analisando</h1>

      <CustomLoadingFeedback weight="bold" />
    </HomeAnalyzingContainer>
  )
}