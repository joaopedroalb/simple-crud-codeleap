export const validateString = (value:string|null) =>{
    const valueWithoutSpace = value !== null ? value.replaceAll(' ',''):value 
    return !(!valueWithoutSpace || valueWithoutSpace.length === 0)
}
