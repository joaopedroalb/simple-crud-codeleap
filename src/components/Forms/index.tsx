import { FormArticle, InputContainer } from "../../styles/Home";
import { BtnContainer, Title, Button } from "../../styles/defaultComponents";
import InputContent from "../Input";
import { useState } from "react";
import { validateString } from "../../functions/validate";

type Form = {
    title:string
    content:string
}

export default function Forms() {
    const [formObj, setFormObj] = useState<Form>({title:'',content:''})

    const validadeForm = () =>{
        return (validateString(formObj.title)&&validateString(formObj.content))
    }

    const onChange = (id:string,value:string|null) =>{
        setFormObj({...formObj,[id]:value})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        if(validadeForm()){
            console.log(formObj)
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
