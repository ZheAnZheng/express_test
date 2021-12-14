const express= require('express');
const app=express();
const routes=require('./router/index.js')
const {engine}=require('express-handlebars');


app.use(routes);
app.use(express.static('public'))
app.engine('handlebars',engine({defaultLayout:'main'}));
app.set('view engine','handlebars');







app.listen(3000,()=>{
    console.log('server run on http://localhost:3000')
})