const request=require('request');
//const url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
const url="http://api.openweathermap.org/data/2.5/weather?q=London&appid=ccb9ce8339e232dc8596a9288897b48b"

request(url,{json:true},(err,res,body)=>{
    console.log(body.url);
    
    console.log(body);
   
})