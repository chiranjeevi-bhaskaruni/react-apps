import React from 'react'
import './FormInput.scss'
const FormInput = ({changeHandler, ...otherProps}) => {
    return (
        <>
            <input {...otherProps}  onChange={changeHandler} />
        </>
    )
}

export default FormInput
