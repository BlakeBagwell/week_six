// Counter 2
//
// Allow the caller of counter to initialize the count to the first argument that's passed in.
//
// > var count1 = counter(4)
// > count1()
// 5
// > count1()
// 6

function count(x) {
  var counter = x;
  function increment() {
    counter++;
    return counter;
  }
  return increment;
}

var count1 = count(4);
//when we set count1 to count(4) it does a few things. It sets our starting position when we call it later. When we call it later, it will be semicomplete. The fact that the original funciton returns increment(its inner function) means that we can call the incomplete innerfunction with its completed outterpart. The outside works because of line 20, but the inside will still need to be called. 
console.log(count1());
console.log(count1());
console.log(count1());
