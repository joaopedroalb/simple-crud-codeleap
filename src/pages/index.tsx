import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { validateString } from '../functions/validate'
import {HomeContainer} from '../styles/Home'
import {Container,Header,Title} from '../styles/defaultComponents'
import Login from './login'
import Forms from '../components/Forms'
import Article from '../components/ArticleCard'
import api from '../utils/api'

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
    async function handleRead(){
      const data = await api.get("careers/?limit=25").then(res=>res.data)
      const lst = data.results
                  .sort((a:ArticleData,b:ArticleData)=>{return b.id - a.id })
                  
      setLstArticle(lst)
    }

    handleRead()
  },[])

  const handleAdd = async (title:string,content:string) =>{
    const articleData = await api.post("careers/",{"username":username,"title":title, "content":content}
                                      ).then(resp=>resp.data)
    if(lstArticle !== null){
      const newLst = [articleData,...lstArticle]
      setLstArticle(newLst)
    }

    if(lstArticle === null)
      setLstArticle([articleData])
  }

  const handleDelete = async(id:number) =>{
    if(lstArticle === null) return 

    await api.delete(`careers/${id}/`)

    const newList = [...lstArticle].filter(article=> article.id !== id)
    setLstArticle(newList)
  }

  const handleUpdate = async (id:number,title:string,content:string) =>{
    if(lstArticle === null) return 

    const articleUpdated = await api.patch(`careers/${id}/`,{"title":title,"content":content}    
                                        ).then(res=>res.data)
    const newList = [...lstArticle].map(a=>{return a.id !== articleUpdated.id ? a:articleUpdated})

    setLstArticle(newList)
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
          lstArticle!=null&&lstArticle.map((article,index)=><Article key={index} 
                                                                    handleDelete={handleDelete} 
                                                                    handleUpdate={handleUpdate} 
                                                                    {...article} 
                                                              />)
        }
      </HomeContainer>
    </Container>
  )
}

export default Home
