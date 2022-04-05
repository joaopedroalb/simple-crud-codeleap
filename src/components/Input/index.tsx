import {Label,Input,InputTextBox} from '../../styles/defaultComponents'
import {Container} from './style'

type InputProps = {
    type: "row"|"box"
    label:string
    id: string
    onChange:any
    value:string
    placeholder:string
    
}

export default function InputContent(props:InputProps) {
  return (
    <Container>
        <Label htmlFor={props.id}>{props.label}</Label>
        {
            props.type=="row" ? (
                <Input  id={props.id} 
                        onChange={({target})=>props.onChange(props.id,target.value)} 
                        value={props.value}
                        placeholder={props.placeholder}
                />
            ):(
                <InputTextBox   id={props.id} 
                                onChange={({target})=>props.onChange(props.id,target.value)}
                                value={props.value}
                                placeholder={props.placeholder}
                />
            )
        }
    </Container>
  )
}
