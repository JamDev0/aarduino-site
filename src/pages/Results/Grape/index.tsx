import { XCircle } from "phosphor-react";
import { IndicatorContainer, ResultGrapeContainer } from "./styles";

export function ResultGrape() {
  return (
    <ResultGrapeContainer>
      <IndicatorContainer>
        <h1>Uva</h1>

        <XCircle weight="bold" />
      </IndicatorContainer>
    </ResultGrapeContainer>
  )
}