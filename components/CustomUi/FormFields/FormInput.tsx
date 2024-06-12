import React from 'react'
import { Input } from '@/components/ui/input'

type FormInputProps = {
    className?: string,
    placeholder?: string,
    zodField?: object,
}

const FormInput = ({className , placeholder , zodField} : FormInputProps) => {
  return (
    <Input placeholder={placeholder} className={`bg-transparent w-[300px] border-t-0 border-r-0 border-l-0  rounded-none border-b-2 border-[#D0D0D0] focus-visible:ring-0 focus:border-[#373737] focus-visible:ring-offset-0 capitalize text-xl text-center placeholder-[#868686] ${className}`} {...zodField} />
  )
}

export default FormInput