const singleDigit = ["", "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" ];
const tenDigit = ["", "ten" , "twenty" , "thirty" , "forty" , "fifty" , "sixty" , "seventy" , "eighty" , "ninety" ];
const tens = [ "ten" , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" , "eighteen" , "nineteen" ];
const hundredsDigit = ["" , "one-hundred" , "two-hundred" , "three-hundred" , "four-hundred" , "five-hundred" , "six-hundred" , "eight-hundred" , "nine-hundred" ];
const thousandsDigit = ["" , "one-thousand" , "two-thousand" , "three-thousand" , "four-thousand" , "five-thousand" , "six-thousand" , "seven-thousand" , "eight-thousand" , "nine-thousand" ];
const main = document.createElement("main");

function wordReturn(inputNumber){
    if(!inputNumber){
        let p = document.createElement("p");
        p.textContent = "please enter a value";
        main.appendChild(p);
        return;
    }
    let arrNum = inputNumber.toString(10).split("").map(Number)
    let numOfDigits = inputNumber.toString().length;
    if(!Number.isInteger(inputNumber)){
        let p = document.createElement("p");
        p.textContent = "Not a valid input";
        main.appendChild(p);
    }else if(numOfDigits === 1){
        let p = document.createElement("p");
        p.textContent = oneDigit(arrNum);
        main.appendChild(p);
    }else if (numOfDigits === 2){
        let p = document.createElement("p");
        p.textContent = twoDigits(arrNum);
        main.appendChild(p);
    }else if (numOfDigits === 3){
        let p = document.createElement("p");
        p.textContent = threeDigits(arrNum)
        main.appendChild(p);
    }else if(numOfDigits === 4){
        let p = document.createElement("p");
        p.textContent = fourDigits(arrNum);
        main.appendChild(p);
    }else{
        let p = document.createElement("p");
        p.textContent = "Not a valid input";
        main.appendChild(p);
    }
}

function oneDigit(arrNum){
    return singleDigit[arrNum[0]];
}
function twoDigits(arrNum){
    if(arrNum[0]===1){
        return tens[arrNum[1]];
    }else{
        let ones = arrNum.slice(1);
        return tenDigit[arrNum[0]] + " " + oneDigit(ones);
    }
}
function threeDigits(arrNum){
    let tens = arrNum.slice(1);
    return hundredsDigit[arrNum[0]] + " " + twoDigits(tens);

}
function fourDigits(arrNum){
    let hundreds = arrNum.slice(1);
    return thousandsDigit[arrNum[0]] + " " + threeDigits(hundreds);
}

wordReturn();
document.body.appendChild(main);
