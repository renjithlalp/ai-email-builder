import React from 'react'
import { Input } from '@/components/ui/input';



function InputStyleField({label,value,onHandleStyleChange, type='px'}) {

    const FormattedValue=(value)=>{
       return typeof value === 'string' ? value.replace(type , '') : '';

    }

    return(
        <div className='flex'> 
            <label>{label}</label>
            <Input type='text' value={FormattedValue(value)} 
            onChange={(e)=>onHandleStyleChange(e.target.value + type)}
            />
            <h2 className='p-1 bg-gray-100 rounded-r-lg -ml-2'>{type}</h2>
        </div>
    )
}
     
export default InputStyleField