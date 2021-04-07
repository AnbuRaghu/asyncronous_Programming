let request=require('request');
const url="http://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
request(url,{json:true},(err,res,body)=>{// body has the json data fetched from the url
    
    console.log(body[0].firstName);
    console.log(body[0].contactNumber);
    console.log(body[1].firstName);
    console.log(body[1].contactNumber);
})