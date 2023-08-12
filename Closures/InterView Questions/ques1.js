//what will be the output

let count =0;
(function printCount(){
    if(count===0){
        let count=1;
        console.log(count);
    }
    console.log(count);
})();

//write a function that will allow you to do this

var addSix=createBase(6);
addSix(10);
addSix(15);

function createBase(num){
    return function addSix(inum){
        console.log(inum+num);
    }
}