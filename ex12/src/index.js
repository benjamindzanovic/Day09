function switchCaseSequential(num){
    var answer;
    switch(num){
        case 1:
            answer = "Low";
        case 2:
            answer = "Low";
        case 3:      
            answer = "Low";
            break;
        case 4:
            answer = "Mid";
        case 5:
            answer = "Mid";
        case 6:
            answer = "Mid";
            break;
        case 7:
            answer = "High";
        case 8:
            answer = "High";
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.exports = switchCaseSequential;