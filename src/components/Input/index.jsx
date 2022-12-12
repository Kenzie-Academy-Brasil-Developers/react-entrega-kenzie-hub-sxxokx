import React from "react";

export const Input = ({ id, label, type,register, placeholder, disabled}) => {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} disabled={disabled} {...register} />
        </div>
    )
}