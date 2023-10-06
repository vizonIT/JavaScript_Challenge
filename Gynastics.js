// Calculating the average score of competition between Dolphins and Koalas

// Average Score for Dolphins with Data1:
// Data 1: score 96, 108 and 89.
const averageDolphin1 = (96 + 108 + 89) / 3;
// Average Score for Koalas with Data1:
// Data 1: score 88, 91 and 110
const averageKoalas1 = (88 + 91 + 89) / 3;
console.log(averageDolphin1, averageKoalas1);

if (averageDolphin1 > averageKoalas1) {
  console.log(`Team Dolphin wins the competition. Congratulations! 🍾🎊`)
} if (averageKoalas1 > averageDolphin1) {
  console.log(`Team Koalas wins the competition. Congratulations! 🍾🎊`)
};


// Average Score for Dolphins with Bonus Data1:
// Data Bonus 1: scores 97, 112 and 101.
const averageDolphin2 = (97 + 112 + 101) / 3;
// Average Score for Koalas with Bonus Data1:
// Data Bonus 1: scores 109, 95 and 123.
const averageKoalas2 = (109 + 95 + 123) / 3;
console.log(averageDolphin2, averageKoalas2);

// Computing the Winner!
if (averageDolphin2 > averageKoalas2 && averageDolphin2 >= 100) {
  console.log(`Team Dolphin wins the competition. Congratulations! 🍾🎊`)
} if (averageKoalas2 > averageDolphin2 && averageKoalas2 >= 100) {
  console.log(`Team Koalas wins the competition. Congratulations! 🍾🎊`)
} else {
  console.log(`Unfortunately, No Team could meet the winning Conditions! Try again next turnament`)
};


// Average Score for Dolphins with Bonus Data2:
// Data Bonus 2: scores 97, 112 and 101..
const averageDolphin3 = Math.floor((97 + 112 + 101) / 3);
// Average Score for Koalas with Bonus Data2:
// Data Bonus 2: scores 109, 95 and 106.
const averageKoalas3 = Math.floor((109 + 95 + 106) / 3);
console.log(averageDolphin3, averageKoalas3);

// Computing the Winner!
if (averageDolphin3 > averageKoalas3 && averageDolphin3 >= 100) {
  console.log(`Team Dolphin wins the competition. Congratulations! 🍾🎊`)
} if (averageKoalas3 > averageDolphin3 && averageKoalas3 >= 100) {
  console.log(`Team Koalas wins the competition. Congratulations! 🍾🎊`)
} if (averageDolphin3 === averageKoalas3 && averageDolphin3 >= 100) {
  console.log(`It's a draw between team Dolphin and team Koalas; and both teams are Winners!!! 🍾🎊🍾🎊`)
}
else {
  console.log(`Unfortunately, No Team could meet the winning Conditions! Try again next turnament`)
};