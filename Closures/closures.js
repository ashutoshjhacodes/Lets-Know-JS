//Functions bundled together with lexical scope for a closure
function z(){
    var b=100;
    function y(){
        var a=10;
         function x(){
            console.log(a,b);
        }
        x();
    }
    y();
}
z();

//example settimeOut

function a(){
    var i="I will execute after settimeOut";
    setTimeout(function(){
        console.log(i);
    },2000);
    console.log("I will execute before settimeOut");
}
a();