"use client"
import React from "react";
import { userDetails } from '@/app/provider'
import { Button } from "@/components/ui/button"

import Header from "@/components/custom/Header";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
function Dashboard(){
    
    const {userDetail,setUserDetail} = userDetails();

    return(
        <div>
         <Header />
         <div className="p-10 md:px-28 lg:px-40 xl:px-56 mt-16">
            <div className="flex justify-between item-center">
                <h2 className="font-bold text-3xl">Hello {userDetail?.name}</h2>
                <Button>+Create New Email Template</Button>
            </div>
            <h2 className="font-bold text-xl text-primary mt-6"> Workspace</h2>
         </div>
         <EmailTemplateList />
        </div>
    )
}   

export default Dashboard;