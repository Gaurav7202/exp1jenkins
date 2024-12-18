const express=require('express')
const app=express()

app.get('/',(request,response)=>
{
    response.send("hii from express")
})

app.listen(4000,'0.0.0.0',()=>
{
    console.log("server is running on port 4000")
})