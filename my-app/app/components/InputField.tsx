import React from 'react'

interface IInput{
    label:string,
    placeholder:string,
    value:string,
    onChange:(e:React.FormEvent<HTMLInputElement>)=>void
}

const InputField = ({label,placeholder,value,onChange}:IInput) => {
  return (
    <div className='flex flex-col'>
        <h1 className='pb-2 text-base font-medium'>{label}</h1>
        <input type={`${label==='Password'?'password':'text'}`} className='border outline-blue-300 px-4 py-2 cursor-pointer rounded-md text-gray-700' placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default InputField