console.log("Hi");

function delay1() {
  console.log("delay 1");
}

function delay2() {
  console.log("delay 2");
}
function delay3() {
  console.log("delay 3");
}

console.log("Hello");
setTimeout(delay1, 3000);
console.log("Hey");
setTimeout(delay2, 1000);
setTimeout(delay3, 5000);

console.log("bye");
