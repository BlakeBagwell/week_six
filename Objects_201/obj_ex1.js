// attaching a method directly

var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};

var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};

function sayHi() {
  console.log('I am ' + this.name + '!');
}

spiderman.greet = sayHi;

superman.greet = sayHi;
//then calling the method we've added.
spiderman.greet();
superman.greet();

// now using the apply method
function revealIdentify() {
  console.log('My real name is ' + this.realName + '.');
}
// and then calling that method
revealIdentify.apply(spiderman);

revealIdentify.apply(superman);
