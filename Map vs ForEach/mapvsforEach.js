//Both map and forEach traverse on each element of the array and
//perform prescribed operations or calculations
const nums=[2,5,7,9,10,14];
console.log(nums);
//Map returns a new array
//we can chain other methods like filter or reduce post map methods
const add100=nums.map((arr)=>{
return arr+100;
}).filter((nums)=>{
    return nums>110;
})
console.log(add100);


//for each modifies the existing array and does not return anything
//it just modifies the parent array
//we can't chain any methods on forEach loop as it does not return anything

const resFor=nums.forEach((arr,i)=>{
    nums[i]= arr+20;
})
console.log(nums);

//I/O Questions:
//Return only names of the element of the given array in capital letters

let students=[
    {name:"ashu", rollno:"23",marks: 48,college:"lpu"},
    {name:"nishu", rollno:"23",marks:30,college:"lpu"},
    {name:"himanshu", rollno:"23",marks:70,college:"lpu"},
    {name:"vishal", rollno:"23",marks:85,college:"lpu"}
]
//Method 1 by for loop
let stu=[];
for (let i = 0; i < students.length; i++) {
    stu[i]=students[i].name.toUpperCase();
}
console.log(stu);

//Method 2 by map in a line
const stu1=students.map((arr)=> arr.college.toUpperCase());
console.log(stu1);

//ques:2 Return only students name whose marks are greater than 60

const passStudents= students.filter((arr)=>{
    return arr.marks>60;
}).map((arr)=>arr.name);
console.log(passStudents);

//ques:2 Return names of students whose marks greater than 60 but less than 75

const desig=students.filter((arr)=>(arr.marks>60 && arr.marks<75)).map((arr)=>arr.name)
console.log(desig);

//ques:3 return sum of marks of all the students

const s=students.reduce((acc,arr)=>acc+arr.marks,0)
console.log(s);

//question 3: give grance to students whose marks are less than 50 of 20 marks 
//later give sum of marks of all students whose marks>75

const grace=students.map((arr)=>
{
    if(arr.marks<50){
        arr.marks +=20;
    }
    return arr;
}).filter((arr)=>arr.marks>60).reduce((acc,arr)=>{return acc+arr.marks},0);
console.log(grace);
