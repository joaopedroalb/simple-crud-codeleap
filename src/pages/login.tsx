import { useContext, useState } from "react";
import { Container, LoginBox, BtnContainer } from "../styles/Login";
import { Title, Label, Input, Button } from "../styles/defaultComponents";
import { useRouter } from "next/router";
import { validateString } from "../functions/validate";
import { UsernameContext } from "../context/UsernameContext";

export default function Login() {

    const router = useRouter();
    const [user,setUser] = useState<string|null>(null)
    const {setUsername} = useContext(UsernameContext)

    const handleClick = () =>{
        setUsername(user)
        router.push('/')
    }
    
    return (
    <Container>
        <LoginBox>
        <Title>Welcome to CodeLeap network!</Title>
        <Label>Please enter your username</Label>
        <Input placeholder="John doe" onChange={({target})=>setUser(target.value)}/>
        <BtnContainer>
            <Button onClick={handleClick} disabled={!validateString(user)}>ENTER</Button>
        </BtnContainer>
        </LoginBox>
    </Container>
    );
}
