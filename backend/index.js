import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const username = 'test123@gmail.com'
const password = 'abc123'

app.post('/login',(req,res)=>{
  
   if(req.body.username === username && req.body.password === password){
    res.send(true)
   }
   else{
    res.send(false)
   }

})

app.listen(3000,(req,res)=>{
    console.log('server started...')
})