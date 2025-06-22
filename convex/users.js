import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string()
    },
    handler:async(ctx,args)=>{
        // if user already exist
        const user=await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email))
        // if not then insert new user
        // console.log("user?.length : >" + user?.length);
        if(user?.length == undefined || user?.length == 0){
            //console.log("result : >");
            const result = await ctx.db.insert('users',{
                name:args.name,
                email:args.email,
                picture:args.picture,
                credits:3
            })
            //console.log("result : "+result);
            return result;
        }
        //console.log("user : "+JSON.stringify(user[0]));
        return user[0];
    }
})