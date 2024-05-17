//  Function Currying

//  Option 1 using bind


function multipe(a,b){
    return a*b;
}

const multiplyByTwo = multipe.bind(this, 2);

// multiplyByTwo(y) {
//     let x = 2
//     return x * y;
// }


console.log(multiplyByTwo(3));


// Using Closure


function mul(x){
    return function(y){
        return x*y;
    }
}

// -------------------------------------------------

// sum(1)(2)(3)(4)()


let sum = (a) => {
    return function (b) {
      if (b) {
        return sum(a + b);
      }
      else {
        return a;
      }
    }
  }
  
  console.log(sum(1)(2)(3)(4)(5)())


//   --------------------------


let sum1 = (a) => (b) => b ? sum1(a + b) : a;


