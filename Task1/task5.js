let countBits = function(n) {
    let array = [];
    if(n===0){
        array.push(0);
    }else{
        while(n >= 1){
            let res = Math.floor(n % 2);
            array.push (res);
            Math.floor(n/=2);

        }
    }

    return array.reverse().join("");
};

let convertDecimal = (number) =>{
    let finalNumber = 0;
    let arrayNumbers = Array.from(number.toString()).reverse();
    for(let i = 0; i < arrayNumbers.length; i++){
        finalNumber += arrayNumbers[i]*Math.pow(2,i);
    }
    return finalNumber;
}

console.log(countBits(158), '<=>', convertDecimal(10011110));

console.log(countBits(12));
console.log(convertDecimal(1100));