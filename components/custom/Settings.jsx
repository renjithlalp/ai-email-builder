"use client"

import { useSelectedElement } from '@/app/provider'
import React, { use, useContext, useEffect, useState } from 'react'
import InputField from './settings/InputField';
import ColorPickerField from './settings/ColorPickerField';
import InputStyleField from './settings/InputStyleField';
import SliderField from './settings/SliderField';
import TextAreaField from './settings/TextAreaField';
import ImagePreview from './settings/ImagePreview';

function Settings() {
    const {selectedElement,setSelectedElement}=useSelectedElement();
    const[element,setElement]=useState();
    useEffect(()=>{
        
        setElement(selectedElement?.layout?.[selectedElement?.index])
    },[selectedElement])

    const onHandleInputChange = (fieldName, value)=>{   
        console.log(fieldName, "value" + value)
        //Copy of Current SelectedElement 
        const UpdatedData={...selectedElement}
        //Update the specific Field
        UpdatedData.layout[selectedElement.index][fieldName] = value
        //Update Orginal SelectedElement
        setSelectedElement(UpdatedData)
    }   

    const onHandleStyleChange=(fieldName,fieldValue)=>{
          //Copy of Current SelectedElement 
          /**
           * selectedElemet{
           * index:0,
           * layout:{
           * ...layout,
           * [0]{
           * style:{
           * ...style
           * }
           * }
           * }
           * }
           */
           let updatedElement={
             ...selectedElement,
             layout:{
                ...selectedElement?.layout,
                [selectedElement?.index]:{
                    ...selectedElement?.layout[selectedElement?.index],
                    style:{
                        ...selectedElement?.layout[selectedElement?.index]?.style,
                        [fieldName]: fieldValue,


                    }
                }
             }
           }
        setSelectedElement(updatedElement)
    }
    return (

    <div className='p-5 flex flex-col gap-4' >
        <h2 className='font-bold text-xl'>Settings</h2>
        {element?.imageUrl &&
        <ImagePreview  label={'Image Preview'} value={element?.imageUrl} 
        onHandleInputChange={(value)=>onHandleInputChange('imageUrl', value)}/>
        }


        {element?.type === "Button" &&
  <InputField
    label="Button Text"
    value={element?.content || ""}
    onHandleInputChange={(value) => onHandleInputChange("content", value)}
  />
}

       
       {element?.type === "Text" &&
  <InputField
    label="Text Content"
    value={element?.content || ""}
    onHandleInputChange={(value) => onHandleInputChange("content", value)}
  />
}

         {element?.url &&
        <InputField  label={'url'} value={element?.url} 
        onHandleInputChange={(value)=>onHandleInputChange('url', value)}/>
        }
         {element?.style?.width &&
        <SliderField label='Width'
         value={element?.style?.width}  
         type='%'
         onHandleStyleChange={(value)=>onHandleStyleChange('width', value)}
         />
        }
        {element?.style?.backgroundColor&&
        <ColorPickerField label='Background Color'
         value={element?.style?.backgroundColor}  
         onHandleStyleChange={(value)=>onHandleStyleChange('backgroundColor', value)}
         />
        }
         {element?.style?.color&&
        <ColorPickerField label='Text Color'
         value={element?.style?.color}  
         onHandleStyleChange={(value)=>onHandleStyleChange('color', value)}
         />
        }

      {element?.style?.fontSize &&
        <InputStyleField label='Font Size'
         value={element?.style?.fontSize}  
         onHandleStyleChange={(value)=>onHandleStyleChange('fontSize', value)}
         />
        }


 {element?.style?.padding &&
        <InputStyleField label='Padding'
         value={element?.style?.padding}  
         onHandleStyleChange={(value)=>onHandleStyleChange('padding', value)}
         />
        }

         {element?.style?.margin &&
        <InputStyleField label='Margin'
         value={element?.style?.margin}  
         onHandleStyleChange={(value)=>onHandleStyleChange('margin', value)}
         />
        }
        
 {element?.style?.borderRadius &&
        <SliderField label='Border Radius'
         value={element?.style?.borderRadius}  
         onHandleStyleChange={(value)=>onHandleStyleChange('borderRadius', value)}
         />
        }
        

    </div>
        
) 
}                                                                   

export default Settings