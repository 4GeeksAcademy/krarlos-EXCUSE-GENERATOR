/* eslint-disable */

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuseGen();
  console.log("Hello Rigo from the console!");
};

let excuseGen = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoIndice = who.length;
  let actionIndice = action.length;
  let whatIndice = what.length;
  let whenIndice = when.length;

  return whoIndice + actionIndice + whatIndice + whenIndice;
};
