import { useState } from 'react'; 

export const useForm = (initialState={}) => {
    const [ formState, setFormState ] = useState(initialState);

    const handleChange = ({target}) => {
        const { name,value } = target;

        setFormState({
            ...formState,
            [ name ]:value
        }); 
    }

    const reset = () => {
        setFormState(initialState);   
    }

    return{
        ...formState,
        formState,
        handleChange,
        reset
    }
}