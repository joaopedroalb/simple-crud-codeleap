import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { validateString } from '../functions/validate'
import {HomeContainer,FormArticle,InputContainer} from '../styles/Home'
import {Container,Header,BtnContainer,Title, Button} from '../styles/defaultComponents'
import Login from './login'
import Forms from '../components/Forms'
import Article from '../components/ArticleCard'

type ArticleData ={
  id:number
  username:string
  created_datetime:string
  title:string
  content:string
}

const Home: NextPage = () => {
  const {username} = useContext(UsernameContext)
  const [lstArticle,setLstArticle] = useState<Array<ArticleData>|null>(null)

  useEffect(()=>{
    async function getArticles(){
      const res = await fetch('https://dev.codeleap.co.uk/careers/')
      const data = await res.json()
      const lst = data.results
                  .sort((a:ArticleData,b:ArticleData)=>{return a.id - b.id})
      setLstArticle(lst)
    }

    getArticles()
  },[])

  const handleAdd = (article:ArticleData) =>{
    if(lstArticle !== null){
      const newLst = [...lstArticle,article]
      setLstArticle(newLst)
    }

    if(lstArticle === null)
      setLstArticle([article])
  }

  if(!validateString(username))
    return <Login/>

  return (
    <Container>
      <HomeContainer>
        <Header>
          <Title>CodeLeap Network</Title>
        </Header>
        <Forms handleAdd={handleAdd}/>
        {
          lstArticle!=null&&[...lstArticle].reverse().map((article,index)=><Article key={index} {...article}/>)
        }
      </HomeContainer>
    </Container>
  )
}

export default Home
