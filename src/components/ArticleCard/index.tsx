import { ArticleCard, ContentInfo, ContentTop, Paragraph, NameUser, DateText, IconContainer } from './style'
import { Header, Title, } from '../../styles/defaultComponents'
import { FaEdit, FaTrash } from 'react-icons/fa'

type ArticleProps = {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}

export default function Article(props: ArticleProps) {

    const formatDate = (date: string) => {
        const dateNow = new Date()
        const dateValue = new Date(date)

        const ms = dateNow.getTime() - dateValue.getTime()

        const minutes = Math.floor(ms / 60000);

        if(minutes >= 1440)
            return `${Math.trunc(minutes/14400)} days ago`
        
        if(minutes >= 60)
            return `${Math.trunc(minutes/60)} hours ago`  
            
        if(minutes > 0)
            return `${minutes} minutes ago`
            
        return "seconds ago"
    }

    return (
        <ArticleCard>
            <Header>
                <Title isArticle>{props.title}</Title>
                <IconContainer>
                    <FaTrash />
                    <FaEdit />
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
        </ArticleCard>
    )
}
