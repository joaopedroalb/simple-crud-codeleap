import { Form } from "./style";
import { InputContainer } from "../../styles/Home";
import { BtnContainer, Title, Button } from "../../styles/defaultComponents";
import InputContent from "../Input";
import { useState } from "react";
import { validateString } from "../../functions/validate";
import axios from "axios";

type FormUpdateProps = {
  id: number;
  stopProp: any;
  closeModal: any;
  updateList:any
}

type FormUpdate = {
    titleUpdate:string
    contentUpdate:string
}

export default function FormUpdate({ id, stopProp,closeModal,updateList }: FormUpdateProps) {

    const [formObj, setFormObj] = useState<FormUpdate>({titleUpdate:'',contentUpdate:''})

    const validadeForm = () =>{
        return (validateString(formObj.titleUpdate)&&validateString(formObj.contentUpdate))
    }

    const onChange = (id:string,value:string|null) =>{
        setFormObj({...formObj,[id]:value})
    }

    const handleSubmit = async (event:any) =>{
        event.preventDefault()
        await handleUpdate()
        closeModal();
    }

    const handleUpdate = async () =>{
        const articleUpdated = await axios.patch(`http://dev.codeleap.co.uk/careers/${id}/`,
                                            {
                                                "title":formObj.titleUpdate,
                                                "content":formObj.contentUpdate
                                            }    
                                        ).then(res=>res.data)
        updateList(articleUpdated)
    }

    return (
        <Form onClick={stopProp} onSubmit={handleSubmit}>
        <Title>What’s on your mind?</Title>
        <InputContainer>

            <InputContent
                type="row"
                id="titleUpdate"
                label="Title"
                onChange={onChange}
                value={formObj.titleUpdate}
                placeholder="Hello world"
            />

            <InputContent
                type="box"
                id="contentUpdate"
                label="Content"
                onChange={onChange}
                value={formObj.contentUpdate}
                placeholder="Content here"
            />
        </InputContainer>
        <BtnContainer>
            <Button disabled={!validadeForm()}>Save</Button>
        </BtnContainer>
        </Form>
    );
}
