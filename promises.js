let myPromise=new Promise((resolve,reject)=>{
    let String1='Welcome to node js';
    let String2='Welcome to node js';

    if(String1== String2){
        resolve('Both are same')
    }else{
        reject('both are not same')

    }

});

myPromise.then((result)=>{
    console.log(result)
}),(err)=>{
    console.log(err)
}

/*.catch((err)=>{
    console.log(err +'my errrrr>><<<<')
})*/