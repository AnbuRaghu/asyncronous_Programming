let http=require('http');
var fs=require('fs');


const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=ccb9ce8339e232dc8596a9288897b48b"

http.get(weatherUrl,(res)=>{
    let data=" ";
    res.on('data',(chunk)=>{
        data=data+chunk;
    });

    res.on('end',()=>{
       fs.writeFile('weather.json',JSON.stringify(JSON.parse(data.toString())),(err)=>{
        console.log(JSON.parse(data.toString()))
       
        if(err){
            console.log(err)
            
        }else{
            console.log('written successfully')
        }

       })
        
    })
});
