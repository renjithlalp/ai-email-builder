"use client"
import Image from 'next/image'
import React, { use } from 'react'
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useScreenSize } from '@/app/provider'


function EditorHeader({ viewHTMLCode }) {
    const {screenSize, setScreenSize}=useScreenSize();
    return (
        <div className='flex justify-between items-center p-4 shadow-sm px-10'>
            <Image src={'/logo.svg'} alt='logo'
            width={180}
            height={140}
            />
                    <div className='flex gap-3'>
                        <Button variant='ghost' onClick={()=>setScreenSize('desktop')} 
                        className={"${screenSize == 'desktop' && 'bg-purple-100 text-primary'}"}><Monitor/>Desktop</Button>
                        <Button variant='ghost' onClick={()=>setScreenSize('mobile')} 
                        className={"${screenSize == 'mobile' && 'bg-purple-100 text-primary'}"}><Smartphone />Mobile</Button>
                    </div>
                    <div className='flex gap-3 items-center'>
                         <Button variant='ghost' 
                         className="hover:text-primary hover:bg-purple-100"
                          onClick={()=>viewHTMLCode(true)}
                         >
                           
                            <Code/></Button>
                         <Button variant="outline" className="hover:text-primary hover:bg-purple-100"> Send Test Template</Button>
                         <Button> Save Template</Button>
                    </div>
            
        </div>
    )
}
export default EditorHeader