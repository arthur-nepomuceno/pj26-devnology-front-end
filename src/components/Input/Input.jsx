import React from 'react';
import '../Input/input.styles.css'


export function Input({type, id, name, placeholder}) {

    return (
        <>
            <input type={type} id={id}  name={name} className='input' placeholder={placeholder}/>

        </>
    )
}
