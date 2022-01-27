import React from 'react'
import Directory from '../../Components/directory/directory.component'
import { HomePageContainer } from './homepage.styles'

function HomePage({ history }) {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}
export default HomePage
