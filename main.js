const express= require ('express')

const app= express()

app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})
app.get('/test',(req,res)=>{
    res.send("Test Hello WOrld")
})
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("WhatsUpp")
})