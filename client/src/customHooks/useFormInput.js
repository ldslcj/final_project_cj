import {useState} from 'react'


export const useFormInput = (initialValue, label='') => {
    const [formValue, setFromValue] = useState (initialValue)

    return {
        label,
        placeholder: `Enter ${label}`,
        value: formValue,
        onChange: (e,{value}) => setFromValue(value)
    }
    
}