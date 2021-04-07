let stringChecker=(String1,string2)=>{
    return new Promise((resolve,reject)=>{
        if(String1== string2){
            resolve('both are same')
        }else{
            reject('.....both are not same')
        }
    })
}
stringChecker('node1','node')
.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err + '<<<<<<<<<<>><<')
})