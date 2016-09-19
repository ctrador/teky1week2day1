function helloWorld() {
    console.log("hello World");
}
helloWorld();

function hello(name) {
    console.log("hello " + name);
}
hello("Chad");



function sub(x, y) {
    console.log(x - y);
    console.log(x + y);
    console.log(x * y);
    console.log(x / y);
}
sub(2,1);

function even() {
    
}
even
function add(num1, num2){
    return num1 + num2;
}
console.log (add(78, 50));

function iseven(num) {
    return num % 2 == 0;
}
var result =iseven(48);
console.log(result ? "even" : "0dd");


function smallernumber(num1, num2) {
    if (num1 < num2) {
        return num1
    }else{
        return num2
    }
}
var minproblem = smallernumber(5 ,2)

console.log(minproblem)






var reverse = "";

var ky=['Kentucky']
for (var i = ky.length -1; i >= 0; i --1) {
   reverse = reverse + ky[i];
    
}

console.log(reverse)


