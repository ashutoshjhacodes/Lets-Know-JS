//Currying is a technique of functional programmimg that transforms the function of multiple arguments
//into several functions of single argument

//fn(a,b,c,d)=>fn(a)(b)(c)(d);
function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));  //currying

//Infinite Currying

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
console.log(add(5)(6)(7)(8)());

