function delay(seconds,callback){
    setTimeout(callback,seconds)
}

console.log('starts delaying');
delay(2000,()=>{
    console.log('two seconds')

    delay(1000,()=>{// it waits untill above callback is done
        console.log('three seconds')

        delay(1000,()=>{//it waits untill above callback is done
            console.log('four seconds')

})
})
})
/* out put will be
starts delaying
two seconds
three seconds
four seconds */