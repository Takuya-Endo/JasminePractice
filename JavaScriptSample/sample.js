
let userA = {
  id: 1,
  name: "UserA",
  age: 20,
  getName: function() {
    return this.name;
  }
}

function UserAA() {
  this.id = 1;
  this.name = "UserAA";
  this.age = 20;
}

class UserB {

  constructor() {
    function UserB(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }

  getName = function() {
    return this.name;
  }

  setName = function(name) {
    this.neme = name;
  }

}

const userAA = new UserAA();
const userB = new UserB(2, "UserB", 30);

console.log("1: " + userA.getName()); //○
console.log("1: " + userA.getName);   //×
console.log("2: " + userAA.age);
console.log("3: " + userB.getName);
userB.setName(40);
console.log("4: " + userB.getName);