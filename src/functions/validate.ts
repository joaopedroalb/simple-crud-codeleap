export const validateString = (value:string|null) =>{
    return !(!value || value.length === 0)
}
