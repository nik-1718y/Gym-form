const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=80;

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))



app.get('/',(req,res)=>{
    const con="this is the best book"
    const params={'title':'book is holy',"content":con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
   name= req.body.name
   age= req.body.age
   gender= req.body.gender
   address= req.body.address
   more= req.body.more
   let outputToWrite=`the name of the client is ${name},${age}years old,${gender},residing at ${address},More about him/her: ${more}`
    fs.writeFileSync('utput.txt',outputToWrite)
    const params={'message':'book is holy'}
    res.status(200).render('index.pug',params);
})

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});