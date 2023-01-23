let screen = document.getElementById("screen");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");

let plusAvaible = true;
let minusAvaible = true;
let firstAdder = 0;
let secondAdder = 0;

one.addEventListener("click", () => {
    screen.textContent += 1;
    let plusAvaible = true;
    let minusAvaible = true;
});

two.addEventListener("click", () => {
    screen.textContent += 2;
    let plusAvaible = true;
    let minusAvaible = true;
});

three.addEventListener("click", () => {
    screen.textContent += 3;
    let plusAvaible = true;
    let minusAvaible = true;
});

four.addEventListener("click", () => {
    screen.textContent += 4;
    let plusAvaible = true;
    let minusAvaible = true;
});

five.addEventListener("click", () => {
    screen.textContent += 5;
    let plusAvaible = true;
    let minusAvaible = true;
});

six.addEventListener("click", () => {
    screen.textContent += 6;
    let plusAvaible = true;
    let minusAvaible = true;
});

seven.addEventListener("click", () => {
    screen.textContent += 7;
    let plusAvaible = true;
    let minusAvaible = true;
});

eight.addEventListener("click", () => {
    screen.textContent += 8;
    let plusAvaible = true;
    let minusAvaible = true;
});

nine.addEventListener("click", () => {
    screen.textContent += 9;
    let plusAvaible = true;
    let minusAvaible = true;
});

zero.addEventListener("click", () => {
    screen.textContent += 0;
    let plusAvaible = true;
    let minusAvaible = true;
});


plus.addEventListener("click", () => {
    if (plusAvaible == true && minusAvaible == true) {
        firstAdder = screen.textContent;
        screen.textContent += "+";
        plusAvaible = false;
        minusAvaible = false;
    }
});

minus.addEventListener("click", () => {
    if (plusAvaible == true && minusAvaible == true) {
        firstAdder = screen.textContent;
        screen.textContent += "-";
        plusAvaible = false;
        minusAvaible = false;
    }
});

equal.addEventListener("click", () => {
    secondAdder = screen.textContent.replace("+", "").replace(firstAdder, "");
    screen.textContent = Number(firstAdder) + Number(secondAdder); 
});