
/*
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}

const buttonA = document.getElementById('A');
const buttonB = document.getElementById('B');
const buttonC = document.getElementById('C');

//関数を定義して使用する
function buttonAclick() {
  alert('buttonA');
} //html側で呼び出し→<button id="A" onclick="buttonAclick()">

//匿名関数として変数に格納
const buttonBclick = function() {
  alert('buttonB');
}

buttonC.onclick = function() {
  alert('buttonC');
}
*/


//-----Object-----
const UserA = {
  name: "UserA",
  age: 20,
  getName: function() {
    console.log(this.name);
    return this.name;
  },
  getAge: function() {
    console.log(this.age);
    return this.age;
  }
}
//メソッド定義時は()不要、実行時は()必要
console.log(UserA.name);
console.log(UserA.age);
UserA.getName();
UserA.getAge();