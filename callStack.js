let myFunc1=()=>{
    console.trace('From my func 1')

}


let myFunc2=()=>{
    console.trace('From my func 2')
    myFunc1();

}


let myFunc3=()=>{
    console.trace('From my func 3')
    myFunc2();

}
myFunc3();