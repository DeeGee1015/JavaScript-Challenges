var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;
var theNumberThatChanges;
for (theNumberThatChanges = 0; theNumberThatChanges < prices.length; theNumberThatChanges++) {
  console.log(sum)
  sum += prices[theNumberThatChanges]
}
console.log("the sum is: ", sum);

var x

for(x = 99; x >= 2; x--) {
  console.log(x + "crows on the wall" + x + "crows 1 fell down and became a wight" + (x - 1) + " crows on the wall ")
}
console.log("1 crow on the wall. 1 single crow.It fell down and became a wight.There's no one left to defend Westeros now.")
