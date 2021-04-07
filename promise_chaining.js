var promise=new Promise((resolve,reject)=>{
    resolve(1)
})

.then((value)=>{
    console.log('starts delay')
    return 1;// this return a promise object
})
.then(value=>{
    setTimeout(()=>{
      console.log('1 seconds')  
    }, value * 1000)
    return 2
})
.then(value=>{
    setTimeout(()=>{
      console.log('3 seconds')  
    }, value * 1000)
    return 3
})
.then(value=>{
    setTimeout(()=>{
      console.log('6 seconds')  
    }, value * 1000)
    return 4

})
.catch((err)=>{
    console.log(err+'<<<<<<<<<<<<<<<<<<<<')
})