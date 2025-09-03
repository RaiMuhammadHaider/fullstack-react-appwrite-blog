import React from 'react'
import { useId } from 'react'
const Input = React.forwardRef(
    function Input({
        label,
        type = "text",
        className = "",
        ...props
    }, ref) {
        const id = useId()
        return (
            <div className='w-full'>
                {
                    label && <label
                        htmlFor={id}
                        className='inline-block mb-1 pl-1 '
                    >{label}</label>

                }
                <input
                    className={`px-4 py-2 rounded-lg text-white bg-black outline-none focus:bg-gray-50 duration border-gray-500 w-full ${className} `}
                    ref={ref}
                    id={id}
                    {...props}
                    type={type} />
            </div>
        )
    }
)

export default Input