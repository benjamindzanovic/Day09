function myEqualFunction(num){

    if(num===23){
        return "Equal";
    } else{
        return "not Equal";
    }
}
myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");
console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));

module.exports = myEqualFunction;