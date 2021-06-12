const fortune1 = "A beautiful, smart, and loving person will be coming into your life.";
const fortune2 = "A faithful friend is a strong defense.";
const fortune3 = "A fresh start will put you on your way.";
const fortune4 = "A gambler not only will lose what he has, be also lose what he doesn't have.";
const fortune5 = "A golden egg of opportunity falls into your lap this month.";
const fortune6 = "A good time to finish up good tasks.";
const fortune7 = "A hunch is creativity trying to tell you something.";
const fortune8 = "A lifetime of happiness lies ahead of you.";
const fortune9 = "A new perspective will come with the new year.";
const fortune10 = "A short pencil is usually better than a long memory.";

const fortunes = [fortune1, fortune2, fortune3, fortune4, fortune5, fortune6, fortune7, fortune8, fortune9, fortune10];

const luckynum1 = "39 47 1 30 7";
const luckynum2 = "8 23 26 39 19";
const luckynum3 = "8 23 26 39 19";
const luckynum4 = "34 15 30 28 41";
const luckynum5 = "9 32 5 43 19";
const luckynum6 = "31 19 11 36 25";
const luckynum7 = "25 27 17 6 49";
const luckynum8 = "40 27 49 28 26";
const luckynum9 = "20 12 34 37 40";
const luckynum10 = "16 46 30 9 29";

const luckynums = [luckynum1, luckynum2, luckynum3, luckynum4, luckynum5, luckynum6, luckynum7, luckynum8, luckynum9, luckynum10];

const random = Math.floor(Math.random() * 10);
const random2 = Math.floor(Math.random() * 10);

const dialog = () => {
    let greeting = promt("Greetings! Would you like to know your fortune of the day?");

    if (greeting == undefined || !isNaN(greeting)) {
        alert("Invalid entry!");
        greeting = prompt("Please enter Yes or No.");
    }
    if (greeting.toLowerCase() === "no") {
        console.log("We hope to have to back to recieve your fortune at another time!");
    } else {
        console.log("Your fortune of the day is: " + fortunes[random]);
        console.log("Your lucky numbers of the day are: " + luckynums[random2]);
    }
};
