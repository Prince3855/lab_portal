const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
var port = (process.env.PORT || 3000);

const db= "****************************************************************************************";
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true })
.then(result=> app.listen(port))
.catch(err=>console.log(err));



app.get('/',function(req,res)
{
    res.render('home');
})
app.get('/home',function(req,res)
{
    res.redirect('/');
})

app.get('/acheivments',function(req,res)
{
    res.render('acheivments');
})

app.get('/projects',function(req,res)
{
    res.render('projects');
})

app.get('/news',function(req,res)
{
    res.render('news');
})

app.get('/blogs',function(req,res)
{
    res.render('blogs');
})
app.get('/members',function(req,res)
{
    res.render('members');
})
