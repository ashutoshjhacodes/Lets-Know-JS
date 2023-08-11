const nums = [1, 2, 3, 4, 5];
console.log(nums); //[1,2,3,4,5]
//Map applies an operation on each element of the array and
//returns a new array as a result of those operations
//map(current element,index,array)

const multiplybyten = nums.map((num, i, arr) => {
  return num * 10;
});
console.log(multiplybyten); //[10,20,30,40,50]

//Filter method applies conditional statement on each element of the array
// if that condition is true then it pushes the same element to the
// new array otherwise it does not do so
//filter(current element,i,arr)
const greaterthantwo = nums.filter((num, i, arr) => {
  return num > 2;
});
console.log(greaterthantwo);

//Reduce takes all the elements of the array and
//returns a single value based on the required operation or calcuation
//reduce((accumulator,current value,index,array)=>{},initial value)
//accumulator:result of the previous computation

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

//Pollyfill of Map

//Array.map(num,i,array)

Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
};

const multiplyby100= nums.myMap((num,i,arr)=>{
    return num*100;
})
console.log(multiplyby100);

//Polyfill for Filter

Array.prototype.myFilter=function(cb){
    let temp=[];
    for (let i =0;i < this.length; i++){
        if(cb(this[i],i,this)) temp.push(this[i]);
    }
    return temp;
}

const lessthanTwo=nums.myFilter((num,i,arr)=>{
    return num<=2;
});
console.log(lessthanTwo);

//PolyFill for Reduce Method
//Array.reduce(cb(acc,curr,i,arr)={},initialvalue)

Array.prototype.myReduce=function(cb,initialValue){
    var accumulator=initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
};

const product=nums.myReduce((acc,curr,i,arr)=>{
    return acc=acc*curr;
},0)

console.log(product);


