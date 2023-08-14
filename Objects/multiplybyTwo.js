let obj={
    a:200,
    b:400,
    c:"Ashu"
}
function mutiplybyTwo(obj){
    for(key in obj){
        if(typeof obj[key]==="number"){
            obj[key]*=2;
        }
    }
}
mutiplybyTwo(obj);
console.log(obj);

