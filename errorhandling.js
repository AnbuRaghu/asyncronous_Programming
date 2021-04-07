let request=require('request');
const url="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
request(url,{json:true},(err,res,body)=>{// body has the json data fetched from the url


    if(err){
        return console.log('unable to connect server')
    }else if(res.body.err){
        return console.log('invalid url')
    }else if(res.body.country== 0){
        return console.log('undefined<<<<')
    } else{
        console.log(body[0].firstName);
        console.log(body[0].contactNumber);
        console.log(body[1].firstName);
        console.log(body[1].contactNumber);
    }
})