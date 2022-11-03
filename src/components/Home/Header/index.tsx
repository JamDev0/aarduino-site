import { HomeHeaderContainer } from "./styles";

import logo from '../../../assets/Logo.svg'

export function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <img src={logo} alt='app logo' />
    </HomeHeaderContainer>
  )
}