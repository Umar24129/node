const express= require ('express')

const app= express()

app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.listen(3000,()=>{
    console.log("WhatsUpp")
})