import { HomeStartContainer, StartButton } from "./styles";

export function HomeStart() {
  return (
    <HomeStartContainer>
      <StartButton to='/analyze'>Iniciar análise</StartButton>
    </HomeStartContainer>
  )
}