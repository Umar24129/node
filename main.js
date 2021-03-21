const express= require ('express')

const app= express()

// app.get('/',(req,res)=>{
//     res.send("Hello WOrld")
// })
app.get('/test',(req,res)=>{
    res.send("Test Hello WOrld")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html')
})
app.get('/submittest',(req,res)=>{
    res.sendFile(__dirname + '/submittest.html')
})
const port = process.env.PORT || 3000      //  const port = process.env.PORT   is for aws so that it can auto select provided port if other then 3000
app.listen(port,()=>{
    console.log("WhatsUpp")
})