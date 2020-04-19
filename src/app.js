const express = require('express');
const getUrl=require('./utils/fetchurl');
const geoloc = require('./utils/geoloc');
const request = require('request');


const app =express();
const port = process.env.PORT || 3000
const hbs = require('hbs');
const path = require('path');
const dirtoPublic= path.join(__dirname,'../public')
const templates =path.join(__dirname, '../templates/views');
const handleLoc = path.join(__dirname,'../templates/partials');
//set the template engine hbs so that express can use it 
app.set('view engine', 'hbs');
app.set('views',templates);
hbs.registerPartials(handleLoc);

app.use(express.static(dirtoPublic));
app.get('',(req,res)=>{
    
    res.render('index',{
        title:"Weather App",
        developer:"Arjun"
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        developer:"Arjun"

    })

})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        developer:" Arjun"
    })

})

app.get('/weather',(req,res)=>{
    if(!req.query.location)
    return res.send({
        error:"Enter The Location"
    })
    geoloc(req.query.location,(error,{lat,long,city}={})=>{
        if(error){
        return res.send({error})
        }
        getUrl(lat,long,(error,actualData)=>{
            if(error){
            return res.send(error)
            }

            res.send({
                location:city,
                temp:actualData
            })

        })
    });
   



})




app.get('/help/*',(req,res)=>{
    res.render('error',{

    });
})
app.get('*',(req,res)=>{
    res.render('error',{
        
    });
})




app.listen(port,()=>{
    console.log("Server Started On Port "+port)
})