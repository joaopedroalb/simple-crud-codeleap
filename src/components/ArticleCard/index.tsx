import {ArticleCard,ContentInfo,ContentTop,Paragraph,NameUser,DateText} from './style'
import {Header,Title,} from '../../styles/defaultComponents'

export default function Article() {
  return (
    <ArticleCard>
        <Header>
            
                <Title isArticle>My First Post at CodeLeap Network!</Title>
                <div>
                    x y
                </div>
            
        </Header>
        <ContentInfo>
            <ContentTop>
                <NameUser>@Victor</NameUser>
                <DateText>25 minutes ago</DateText>
            </ContentTop>
            <Paragraph>
            Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. 
            Duis vel nibh at velit scelerisque suscipit.

            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, 
            eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
            </Paragraph>
        </ContentInfo>
    </ArticleCard>
  )
}
