function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
return "Invalid input: Operands must be numbers";
}
}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //Invalid input: Operands must be numbers
console.log(foo("2",3)); //Invalid input: Operands must be numbers