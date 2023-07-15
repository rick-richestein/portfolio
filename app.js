console.log("hi portflio Utsav Garg");
/* Adding dependencies */
const express  = require("express")

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

const defaultRoutes = require('./routes/default');

app.use(express.static(path.join(__dirname,'public')))

/* app.use('/addProduct',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></form>');
});

app.use('/product',(req,res,next)=>{   
    console.log(req.body);
    res.redirect("/");
}); */

app.use(defaultRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Page</h1>');
    
})
app.listen(3000);