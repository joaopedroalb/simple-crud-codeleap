import {} from 'react'
import {Container,LoginBox,BtnContainer} from '../styles/Login'
import {Title,Label,Input, Button} from '../styles/defaultComponents'

export default function Login() {
  return (
    <Container>
        <LoginBox>
            <Title>Welcome to CodeLeap network!</Title>
            <Label>Please enter your username</Label>
            <Input placeholder='John doe'/>
            <BtnContainer>
                <Button>ENTER</Button>
            </BtnContainer>
        </LoginBox>
    </Container>
  )
}
