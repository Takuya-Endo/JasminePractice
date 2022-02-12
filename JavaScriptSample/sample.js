
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