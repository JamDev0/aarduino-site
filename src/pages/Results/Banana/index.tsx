import { Check } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../libs/axios";
import { IndicatorContainer, RestartBtn, ResultBananaContainer } from "./styles";

export function ResultBanana() {
  const redirect = useNavigate()

  async function handleRestartClick() {
    await api.patch('data', {
      state: 'unread',
      fruit: ''
    })

    redirect('../')
  }

  return (
    <ResultBananaContainer>
      <IndicatorContainer>
        <h1>Banana</h1>

        <Check weight="bold" />
      </IndicatorContainer>

      <p>Rica em potássio, ajuda no regulamento do intestino do seu animal e previne alergias.</p>

      <RestartBtn onClick={() => handleRestartClick()}>Recomeçar análise</RestartBtn>
    </ResultBananaContainer>
  )
}