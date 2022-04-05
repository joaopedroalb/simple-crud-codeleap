import { FormArticle, InputContainer } from "../../styles/Home";
import { BtnContainer, Title, Button } from "../../styles/defaultComponents";
import InputContent from "../Input";
import { useContext, useState } from "react";
import { validateString } from "../../functions/validate";
import { UsernameContext } from "../../context/UsernameContext";

type Form = {
    title:string
    content:string
}

type FormProps = {
    handleAdd:any
}

export default function Forms({handleAdd}:FormProps) {
    const [formObj, setFormObj] = useState<Form>({title:'',content:''})
    const {username} = useContext(UsernameContext)

    const validadeForm = () =>{
        return (validateString(formObj.title)&&validateString(formObj.content))
    }

    const onChange = (id:string,value:string|null) =>{
        setFormObj({...formObj,[id]:value})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        if(validadeForm()){

            handleAdd({
                id:1,
                username:username,
                created_datetime:new Date().toString(),
                title:formObj.title,
                content:formObj.content,
            })
            setFormObj({title:'',content:''})
        }
        
    }

    return (
        <FormArticle onSubmit={handleSubmit}>
            <Title>What’s on your mind?</Title>
            <InputContainer>
                <InputContent   type="row" 
                                id="title" 
                                label="Title" 
                                onChange={onChange} 
                                value={formObj.title} 
                                placeholder="Hello world"
                />
                <InputContent type="box" 
                                id="content" 
                                label="Content" 
                                onChange={onChange} 
                                value={formObj.content} 
                                placeholder="Content here"
                />
            </InputContainer>
            <BtnContainer>
                <Button disabled={!validadeForm()}>Create</Button>
            </BtnContainer>
        </FormArticle>
    );
}
