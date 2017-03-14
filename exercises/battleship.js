// Battleship
//
// The following code implements a battleship board. The fire function takes a row and col and returns 'Hit!' or 'miss' depending on if it hit a part of the ship. The problem is we don't want the enemy to see our board! So we need to hide the board variable within a closure, but still expose the fire function to the outside. Use the module pattern to do this.
//
// var board = [
//   ['o', ' ', 'o', 'o', ' '],
//   ['o', ' ', ' ', ' ', ' '],
//   ['o', ' ', 'o', 'o', 'o'],
//   ['o', ' ', ' ', ' ', ' '],
//   [' ', ' ', 'o', ' ', 'o'],
//   [' ', ' ', 'o', ' ', 'o']
// ];
//
// function fire(row, col) {
//   if (board[row][col] === 'o') {
//     board[row][col] = 'x'
//     return 'Hit!'
//   } else {
//     return 'Miss'
//   }
// }
//
// console.log(fire(0, 1))

var battleship = function() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];

  function fire(row, col) {
    if (board[row][col] === 'o') {
      board[row][col] = 'x';
      return 'Hit!';
    } else {
      return 'Miss';
    }
  }
  return {fire:fire};
}();
// console.log(board); wont work because it is conatined in a module
// console.log(battleship.board); will register that the var exists.

console.log(battleship.fire(0,0));

// SO! Initially this is  a little confusing but here is why it works.

//we put everything in a function so that if we want to access a specific part, we have to be very explicit about it. EX: say we have a bunch of games in a file, tic tac toe, connect 4, and battleship. Each game has a board, and if they arent contained in a module, or rather if each entire game isnt closed in its own function, the 'board' variable that they all contain will refer to a single global variable. To fix this problem we put it in a module so there is a board that can be accessed explicitly thorugh each game function. so instead of console.log(board), you would do console.log(tittactoe.board) or console.log(battleship.board)

//we only return the thing we want the user to be able to use or see, which is the fire function. We also have to call the function immediately, by
//   return {fire:fire};
//}(); <---- adding these parenthesis. We do this because its a module, everything is contained within a funciton. Then we can freely use the funciton that was returned and supply the necessary arguments.

//() at the end basically unpacks the function. you could also do this by
// (function() {
//    code here
    //window.MODULE_NAME = THING_YOU_WANT_TO_EXPOSE... a function perhaps;

//})();

//but I chose to assign it all to a variable. And then refer to the varible later with battleship.functionThatWasReturned(now I supply the arguments of said function)

//******* we grant the user access only to what we return in the function. The function still uses board, but we only need them to have access to the fire function. 
