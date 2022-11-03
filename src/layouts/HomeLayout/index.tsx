import { Outlet } from 'react-router-dom'
import { HomeHeader } from '../../components/Home/Header'
import { HomeLayoutContainer } from './styles'

export function HomeLayout() {
  return(
    <HomeLayoutContainer>
      <HomeHeader />
      <Outlet />
    </HomeLayoutContainer>
  )
}