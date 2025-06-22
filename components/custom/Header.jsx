"use client"
import Image from 'next/image'
import React, { use } from 'react'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'
import { userDetails } from '@/app/provider'
import Link  from 'next/link'

function Header() {
    const {userDetail,setUserDetail} = userDetails();
    return (
        <div className='flex justify-between items-center 
        p-4 shadow-sm px-10'>
            <Image src={'/logo.svg'} alt='logo'
            width={180}
            height={140}
            />
            <div>
                {userDetail?.email ?
                    <div className='flex gap-3 items-center'>
                        <Link href={'/dashboard'}><Button>Dashboard</Button></Link>
                        <Image src={userDetail?.picture}  alt='user' height={35} width={35}  className='rouned-full'/>
                    </div> : 
                    <SignInButton />
                }
            </div>
        </div>
    )
}
export default Header