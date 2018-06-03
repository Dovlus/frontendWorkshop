let numbers = [],
    writeContainer;

function add () {
    let number = document.getElementById("no.").value;
    writeContainer = document.getElementById("container");

    numbers.push(+number);

    // ako ima vise od jednog elementa u nizu, stavi zarez
    if (numbers.length > 1){
        writeContainer.innerHTML += (', ' + number);
    } else {
        writeContainer.innerHTML += (number);
    }
    
    document.getElementById("no.").value = '';
}

function sum () {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }
    document.getElementById("sum").value = sum;

    return sum;
}

function avrg () {
    let average  = sum ()/numbers.length;
    document.getElementById("avrg").value = average;
}