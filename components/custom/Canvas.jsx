"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useScreenSize } from '@/app/provider'
import { useDragElementLayout } from '@/app/provider'
import { useEmailTemplate } from '@/app/provider'
import ColumnLayout from '../LayoutElements/columnLayout'
import ViewHTMLCode from './ViewHtmlDialog';




function Canvas({viewHTMLCode,closeDialog}) {
    const htmlRef=useRef();
    const {screenSize, setScreenSize}=useScreenSize();
    const  {dragElementLayout, setDragElementLayout} = useDragElementLayout();
    const  {emailTemplate, setEmailTemplate} =useEmailTemplate();
    const [dragOver, setDragOver] = useState(false);
    const [htmlCode,setHTMLCode]=useState();
    
    const onDragOver = (e) =>{
        e.preventDefault();
        setDragOver(true);
        console.log('... Over')
    }
    const onDropHandle = (e) =>{
        console.log(dragElementLayout)
        setDragOver(false);
        if(dragElementLayout?.dragLayout){ 
            setEmailTemplate(prev => [...prev,dragElementLayout?.dragLayout])
        }
    }

    const getLayoutComponent=(layout)=>{
        if(layout?.type=='column')
        {
            return <ColumnLayout layout={layout}/>
        }
    }

    useEffect(()=>{
      viewHTMLCode&&GetHTMLCode();
    },[viewHTMLCode])

    const GetHTMLCode=()=>{
      if(htmlRef.current)
      {
        const htmlContent=htmlRef.current.innerHTML;
        console.log(htmlContent);
        setHTMLCode(htmlContent);
      }
    }



   return (
  <div className='mt-20 flex justify-center'>
    <div
      className={`bg-white p-6 w-full 
        ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'} 
        ${dragOver ? 'bg-purple-100 p-4' : ''}`}
      onDragOver={onDragOver}
      onDrop={onDropHandle}
      ref={htmlRef}
    >
      {emailTemplate?. length>0? emailTemplate?.map((layout, index)=>(
        <div key={index}>
            {getLayoutComponent(layout)}
            </div>
      )):
      <h2 className='p-4 text-center bg-grey-100 border border-dash'>Add layout here</h2>
    }
    </div>
    <ViewHTMLCode openDialog={viewHTMLCode} htmlCode={htmlCode} closeDialog={closeDialog} />

  </div>
);

}
export default Canvas