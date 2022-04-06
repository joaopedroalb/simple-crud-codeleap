import { ArticleCard, ContentInfo, ContentTop, Paragraph, NameUser, DateText, IconContainer,DeleteContainer,RowButtons } from './style'
import { BtnContainer, Header, Title, } from '../../styles/defaultComponents'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useState } from 'react'
import Modal from '../Modal'
import axios from 'axios'
import FormUpdate from '../FormUpdate'

type ArticleProps = {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
    handleDelete: any
    handleUpdate:any
}

export default function Article(props: ArticleProps) {

    const formatDate = (date: string) => {
        const dateNow = new Date()
        const dateValue = new Date(date)

        const ms = dateNow.getTime() - dateValue.getTime()

        const minutes = Math.floor(ms / 60000);

        if(minutes >= 1440)
            return `${Math.trunc(minutes/1440)} days ago`
        
        if(minutes >= 60)
            return `${Math.trunc(minutes/60)} hours ago`  
            
        if(minutes > 0)
            return `${minutes} minutes ago`
            
        return "seconds ago"
    }

    const [modalUpdate,setModalUpdate] = useState(false)
    const [modalDelete,setModalDelete] = useState(false)

    const stopProp = (event:any) =>{
        event.stopPropagation()
    }

    const handleDelete = async (idArticle:number) =>{
        await axios.delete(`https://dev.codeleap.co.uk/careers/${idArticle}/`)
        props.handleDelete(idArticle)
        setModalDelete(false);
    }

    return (
        <ArticleCard>
            <Header>
                <Title isArticle>{props.title}</Title>
                <IconContainer>
                    <FaTrash onClick={()=>setModalDelete(true)}/>
                    <FaEdit onClick={()=>setModalUpdate(true)}/>
                </IconContainer>
            </Header>
            <ContentInfo>
                <ContentTop>
                    <NameUser>@{props.username}</NameUser>
                    <DateText>{formatDate(props.created_datetime)}</DateText>
                </ContentTop>
                <Paragraph>
                    {props.content}
                </Paragraph>
            </ContentInfo>

            <Modal active={modalUpdate} onClose={()=>setModalUpdate(false)}>
                <FormUpdate stopProp={stopProp} id={props.id} closeModal={()=>setModalUpdate(false)} updateList={props.handleUpdate}/>
            </Modal>

            <Modal active={modalDelete} onClose={()=>setModalDelete(false)}>
                <DeleteContainer onClick={stopProp}>
                    <p>Are you sure you want to delete this item?</p>
                    <RowButtons>
                        <button onClick={()=>setModalDelete(false)}>Cancel</button>
                        <button onClick={()=>handleDelete(props.id)}>Ok</button>
                    </RowButtons>
                </DeleteContainer>
            </Modal>
        </ArticleCard>
    )
}
