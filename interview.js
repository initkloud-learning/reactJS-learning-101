// function sum(initialValue) {
//   let total = initialValue;

//   function add(nextValue) {
//     console.log(nextValue);
//     total += nextValue;
//     return add;
//   }

//   add.valueOf = function () {
//     return total;
//   };

//   return add;
// }

// const result = sum(5)(10)(30)(40)(50)(60);
// console.log(result.valueOf());

function one(a) {
  let sum = a;

  function two(b) {
    sum += b;
    return two;
  }

  two.val = function () {
    return sum;
  };

  console.log(a);

  return two;
}

let result = one(1)(2)(3)(4)(5)(6)(7)(8)(9)(10);
console.log(result.val());
