import { XCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../libs/axios";
import { IndicatorContainer, RestartBtn, ResultGrapeContainer } from "./styles";

export function ResultGrape() {
  const redirect = useNavigate()

  async function handleRestartClick() {
    await api.patch('data', {
      state: 'unread',
      fruit: ''
    })

    redirect('../results')
  }

  return (
    <ResultGrapeContainer>
      <IndicatorContainer>
        <h1>Uva</h1>

        <XCircle weight="bold" />
      </IndicatorContainer>

      <p>Contém uma substância tóxica que pode levar a alterações, como aumento da frequência urinária e da ingestão de água, por provocar lesões nos rins.</p>

      <RestartBtn onClick={() => handleRestartClick()}>Recomeçar análise</RestartBtn>
    </ResultGrapeContainer>
  )
}