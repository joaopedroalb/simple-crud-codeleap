import type { NextPage } from 'next'
import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { validateString } from '../functions/validate'
import {HomeContainer,FormArticle,InputContainer} from '../styles/Home'
import {Container,Header,BtnContainer,Title, Button} from '../styles/defaultComponents'
import Login from './login'
import Forms from '../components/Forms'
import Article from '../components/ArticleCard'


const Home: NextPage = () => {
  const {username} = useContext(UsernameContext)

  if(!validateString(username))
    return <Login/>

  return (
    <Container>
      <HomeContainer>
        <Header>
          <Title>CodeLeap Network</Title>
        </Header>
        <Forms/>
        <Article/>
        {username}
      </HomeContainer>
    </Container>
  )
}

export default Home
