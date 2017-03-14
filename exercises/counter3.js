// Counter 3
//
// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.
//
// > var count = counter(4);
// > count.increment()
// 5
// > count.increment()
// 6
// > count.decrement()
// 5
// > count.decrement()
// 4


function count(x) {
  var count = x;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  return {
    increment: increment,
    decrement: decrement
  };
}

// we have to return an object because you can only return one thing. So we fill the object with all the functions we may need later, so, all of the inner functions. We don't necessarily have to use them, but if we need we can use dot notation to call any one of the funcitons inside the object and we do that by attaching it onto the end of the variable that represents our partially filled in funciton (count1)

var count1 = count(4);
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.decrement());
console.log(count1.decrement());
