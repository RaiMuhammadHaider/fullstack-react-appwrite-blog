import React from 'react'

const Button = ({
    children,
    type = 'button',
    textColor = 'text-white',
    className = '',
    bgColor = 'bg-blue-600',
    ...props
}) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className} `} {...props}> {children} </button>
    )
}

export default Button
