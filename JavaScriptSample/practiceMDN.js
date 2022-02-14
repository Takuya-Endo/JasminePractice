
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
//Javaでいうと、下はクラス定義というよりもクラス作成とインスタンス生成を同時にやるイメージ？
//「userA」という変数に格納しているから小文字の方が適切
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
//メソッド定義時は()不要、実行時は()必要  これは匿名関数を使う時も共通の法則(57行目)
console.log(UserA.name);
console.log(UserA.age);
UserA.getName();
UserA.getAge();

UserA.name = "TestA";
UserA.getName();

//JavaScriptコンストラクタ = Javaクラス
function User(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function() {
    console.log(this.name);
    return this.name;
  };
  this.getAge = function() {
    console.log(this.age);
    return this.age;
  };
  this.setName = function(name) {
    this.name = name;
  }
}
//コンストラクタ定義にメソッド定義を包含する為、≒クラスとなる
let UserB = new User("UserB", 30);
console.log(UserB.name);
console.log(UserB.age);
UserB.getName();
UserB.getAge();

UserB.name = "TestB";
UserB.getName();

UserB.setName("UserB");
UserB.getName();

//イベントハンドラ
const btnAList = document.querySelectorAll("button");
for (let btnA of btnAList) {
  btnA.onclick = function() {
    console.log("ボタンAB");
  }
}

const btnC = document.querySelector("#C");
btnC.onclick = function() {
  console.log("ボタンC");
}

const btnDEList = document.querySelectorAll(".DE");
for (let btnDE of btnDEList) {
  //アロー関数式
  btnDE.onclick = () => {
    console.log("ボタンDE");
  }
}