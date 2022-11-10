import { Warning, XCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../libs/axios";
import { IndicatorContainer, RestartBtn, ResultPlumContainer } from "./styles";

export function ResultPlum() {
  const redirect = useNavigate()

  async function handleRestartClick() {
    await api.patch('data', {
      state: 'unread',
      fruit: ''
    })

    redirect('../results')
  }

  return (
    <ResultPlumContainer>
      <IndicatorContainer>
        <h1>Ameixa</h1>

        <Warning weight="bold" />
      </IndicatorContainer>

      <p>Pode ser ingerida pelo pet, ao dar a ele retire sua semente. Senão, ele poderá ser infectado por cianeto. Que é extremamente tóxico, até mesmo em pequenas quantidades</p>

      <RestartBtn onClick={() => handleRestartClick()}>Recomeçar análise</RestartBtn>
    </ResultPlumContainer>
  )
}