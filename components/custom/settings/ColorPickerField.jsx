import React, { use } from 'react'

function ColorPickerField({ label, value, onHandleStyleChange }){
    return (
        <div className='flex flex-col gap-1'>
            <div><label>{label}</label></div>
            <input type='color' value={value} 
            onChange={(e)=>console.log(e.target.value)} />
        </div>
    )
}


export default ColorPickerField 