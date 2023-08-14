function changeAgeReference(person){
    person.age=25;
    person={
        name:"John",
        age:50,
    };
    return person;
}
const personObj1={
    name:"Alex",
    age:30,
};
const personObj2=changeAgeReference(personObj1);
console.log(personObj1); //will get 
console.log(personObj2);