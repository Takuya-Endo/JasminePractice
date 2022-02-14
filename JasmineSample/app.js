function add(a, b) {
  return a + b;
}

function throwException() {
  throw 'SampleException';
}

//Userのコンストラクタ（≒クラス）
function User(name, age) {
  this.name = name;
  this.age = age;
  getName = function() {
    return this.name;
  };
  getAge = function() {
    return this.age;
  };
}