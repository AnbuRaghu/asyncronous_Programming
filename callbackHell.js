let delay=(seconds,callback)=>{
    setTimeout(callback,seconds)
}
console.log('starts series of delays....')
//now starts callback hell
delay(2000,(err)=>{
    console.log('2 seconds')
    if(!err){
        delay(1000,(err)=>{
            if(!err){
                console.log('3 seconds');

                delay(1000,(err)=>{
                    if(!err){
                        console.log('4 seconds');
                    }        
            
          
            
    })
}
})

}
})
    
