let fs=require('fs');
let data=fs.readFile('info.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('contents: ', (data.toString()));

    }
});
console.log('program ended')
