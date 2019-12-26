    //***********************************************************//
   //                     Rating mechanism of aap               //
  //***********************************************************//


console.log();
var username = [
  "alex",
  "softweare",
  "data",
  "digital",
  "english",
  "maths",
  "ml",
  "anolog"
];

var feedback = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var i;
var text = 0;
var n = 0;
for (i = 0; i < feedback.length; i++) {
  text = text + feedback[i];
}

// mean function

function mean(arr) {
  return text / arr.length;
}
var x = 0;
x = mean(feedback);
console.log("***************************************************************");
console.log("The mean of the feedback is ", x);
console.log("***************************************************************");
//median function

function median(arr) {
  return arr.length / 2;
}
var y = median(feedback);

for (i = 0; i < y; i++) {
  text = feedback[i];
}

console.log();

console.log("***************************************************");
console.log("The meadian of the feedback is ", y);
console.log("the element present at meadian place is ", text);
console.log("***************************************************");

var least = [];
var average = [];
var best = [];

for (i = 0; i < feedback.length; i++) {
  if (feedback[i] < 4) {
    least[i] = feedback[i];
  } else if ((feedback[i] < 7) & (feedback[i] > 3)) {
    average[i] = feedback[i];
  } else if ((feedback[i] < 10) & (feedback[i] > 6)) {
    best[i] = feedback[i];
  }
}

//removing the empety elemnts from the arry
let s = average.length;
average.splice(0, least.length);
best.splice(0, s);

if ((least.length > average.length) & (least.length > best.length)) {
  console.log();
  console.log("****************************************");
  console.log("bhai bhaot kharab aap hai ");
  console.log("****************************************");
}
if ((average.length > least.length) & (average.length > best.length)) {
  console.log();
  console.log("****************************************");
  console.log("moderate ");
  console.log("****************************************");
}

if ((best.length > average.length) & (best.length > least.length)) {
  console.log();
  console.log("****************************************");
  console.log("best aap");
  console.log("****************************************");
}
