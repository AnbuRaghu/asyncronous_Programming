var consumeEach=(arrayToConsume,consumeFunction)=>{
    for(i=0;i<arrayToConsume.length;i++){
        consumeFunction(arrayToConsume[i])
    }
}
var print=(thing)=>{
    console.log(thing);
}


var myarray=[1,2,3,4,5,6];
consumeEach(myarray,print)