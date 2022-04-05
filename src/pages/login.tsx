import {} from "react";
import { Container, LoginBox, BtnContainer } from "../styles/Login";
import { Title, Label, Input, Button } from "../styles/defaultComponents";
import { useRouter } from "next/router";

export default function Login() {

    const router = useRouter();

    const handleClick = () =>{
        router.push('/')
    }
    
    return (
    <Container>
        <LoginBox>
        <Title>Welcome to CodeLeap network!</Title>
        <Label>Please enter your username</Label>
        <Input placeholder="John doe" />
        <BtnContainer>
            <Button onClick={handleClick}>ENTER</Button>
        </BtnContainer>
        </LoginBox>
    </Container>
    );
}
