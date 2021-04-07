let fs=require('fs');
let data=fs.readFileSync('info.txt');
console.log('contents: ', (data.toString()));
console.log('program ended')