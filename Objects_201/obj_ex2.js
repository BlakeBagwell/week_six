var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
    console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
  }

};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// Write code using __proto__ to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

//daughter will inherit its mothers properties, without overwriting similar properties. So daughter keeps her first name and her hair color.
daughter.__proto__ = mom;

//if we log daughter, only her given values will be printed, her firstName and her hairColor., BUT we can call other parts of her, given by her mother, directly and that will yield the values of its parent.

// so while Ilene doesn't have a last name, we have made her inherit from her mom on line 15, so she will inherit that from her mom.
console.log(daughter.lastName, daughter.eyeColor);

mom.showInfo();
daughter.showInfo();
