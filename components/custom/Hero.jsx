import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'

function Hero() {
    return (
        <div className='px-10 md:px-28 lg:px-44 xl:px-56
        flex flex-col items-center
        mt-24'>
            <h2 className='font-extrabold text-5xl
            text-center'>AI-Powered Email Templates</h2>
            <p className='text-center mt-4'>Craft stunning, personalized emails in seconds. Our AI-powered email template builder helps you write professional, high-converting messages effortlessly—just enter your idea, and let the magic happen.</p>
            <div className='flex gap-5 mt-6'>
                <Button variant="outline">Try Demo</Button>
                <SignInButton />
            </div>
            <Image src={'/landing.png'} alt='landing'
            width={1000}
            height={800}
            className='mt-12 rounded-xl'
            />
        </div>
    )
}

export default Hero