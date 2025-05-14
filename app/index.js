require("dotenv/config")


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; 
  } else {
    return n * factorial(n - 1); 
  }
}

console.log(factorial(5)); 

//==================================================

// (function name(arges) {
//     console.log("hello world");
// })()

//======================================================


(function name1(arges) {
    console.log("hello world", process.env.PORT, process.env.API_KEY);
})()

