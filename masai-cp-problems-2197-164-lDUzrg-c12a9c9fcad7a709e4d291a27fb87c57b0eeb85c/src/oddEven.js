function generateNumber() {
  // generate a random integer(hint : Math.random)
  let numberDiv = document.getElementById("number");
  let random_num = Math.floor(Math.random() * 101) + 1;
  numberDiv.textContent= random_num;
  checkOddEven(random_num);
}

function checkOddEven(num) {
  let oddEvenDiv = document.getElementById("odd-even");
  if(num%2==0){
    oddEvenDiv.textContent = "The number is even"
  } else{
    oddEvenDiv.textContent= "The number is odd"
  }
 
  // logic for even / odd
}

window.onload = function () {
  // add event listeners to the button here
  let btn = document.getElementById("generate-number");
  btn.addEventListener("click",function(){
    console.log("button clicked")
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
