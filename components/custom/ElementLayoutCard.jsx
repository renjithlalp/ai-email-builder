import React, { use } from 'react'
function ElementLayoutCard({layout, index}) {
    return (
           <div key={index} 
            className='flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer'>
               {<layout.icon  className='p-1 h-8 w-9 group-hover:text-primary group-hover:bg-purple-100 round-full'/>}
                <h2 className='text-sm group-hover:text-primary'>{layout.label}</h2>
            </div>
    )
}
export default ElementLayoutCard