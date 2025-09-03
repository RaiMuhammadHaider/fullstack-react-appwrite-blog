import React, {useId} from 'react'

const Select = ({
    className='',
    label,
    options,
    ...props


},ref) => {
const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} ></label> }
        <select 
         id= {id}
         {...props}
         ref={ref}
         className={`px-3 py-2 rounded-lg bg-black text-white focus:bg-gray-500 duration-200 border border-gray-200  w-full ${className}`}>
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
         </select>
    </div>
  )
}

export default React.forwardRef(Select) // this is also a way to use forword ref