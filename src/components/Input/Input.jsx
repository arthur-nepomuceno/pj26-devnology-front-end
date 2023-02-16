import React from 'react';
import '../Input/input.styles.css'


export function Input({...others}) {
    const {
        type, 
        id, 
        name, 
        placeholder, 
        value,
        onChange
    } = others

    return (
        <>
            <input type={type} id={id}  name={name} className='input' value={value} onChange={onChange} placeholder={placeholder} required/>
        </>
    )
}
