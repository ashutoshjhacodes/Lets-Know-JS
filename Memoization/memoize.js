let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
//Memoization is an optimization technique that can be used to reduce time consunming
//calculations by saving previous input to something called cache and returning the
//result from it.
const memoize=function (fn){
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            return cache[n];
        }else{
            let result=fn(n);
            cache[n]=result;
            return result;
        }
    }
}
console.time();
const efficient=memoize(calc);
console.log(efficient(5));
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();


