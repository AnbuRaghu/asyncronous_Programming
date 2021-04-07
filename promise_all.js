var fs=require('fs');
var util=require('util');

var read=util.promisify(fs.readFile);
// Var read() acts like function
/**
 * fs.readFile('sample.txt',(err,data)=>{
 * })
 */

 var file1=read('sample.txt');
 var file2=read('sample.txt');
 var file3=read('sample.txt');

 var allFileList=[file1,file2,file3];
 Promise.all(allFileList).then((result)=>{
     result.forEach((data) => {
         console.log(data.toString())
     });

 }).catch((err)=>{
     console.log(err + 'caught err')
 })

