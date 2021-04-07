var promise=new Promise((resolve,reject)=>{
    throw new Error('Some error has occured');
}).then((successmsg)=>{
    console.log(successmsg)
}).catch((errmsg)=>{
    console.log('catch block invoked..........')
    console.log(errmsg.message)// message is a predefined property in error object
})
