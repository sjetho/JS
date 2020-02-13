// var a = 3

// if (true){

//     var a = 4

//     console.log(a);
// }

// console.log(a)

// var a = 3

// if (true){

//     let a = 4

//     console.log(a);
// }

// console.log(a)

// var i = 0;

// for(i = 0; i< 10; i++){

//     console.log(i);
// }

// console.log("outside", i)

// let i = 0;

// for(i = 0; i< 10; i++){

//     console.log(i);
// }

// console.log("outside", i)

// let index = 8

// let myString = `hello world ${index}`;

// console.log(myString)

// const name = 'Tiger';
// const age = 13;
// console.log(`My cat is named ${name} and is ${age} years old and he weighs ${index} pounds.`);

// let today = new Date();
// let text = `The time and date is ${today.getUTCMonth()}`;

// console.log(today);

// let myArray = [4,7,3,2,1];

// let a = myArray[0]

// let b = myArray[1]


// let myArray = [4,7,3,2,1];

// let [a,b,c,d,e] = myArray

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// var luke = { occupation: 'jedi', father: 'anakin' };
// var occupation = luke.occupation; // 'jedi'
// var father = luke.father;

// let luke = { occupation: 'jedi', father: 'anakin' };
// let {occupation, father} = luke;
// console.log(occupation);
// console.log(father);

// let helloWorld = ()=>{
//     console.log("Hello World!");
// }
// helloWorld();

// function getType() {
// console.log('Type is:' + this.type);
// }

// console.log(getType());

// let nums = [5,7,3,4,9]

// let newArray = nums.map((num)=>{

//     return num * 2
// })

// console.log(nums);
// console.log(newArray);


// let obj = {
//     x: 5,
//     y: 20,
//     z: 3 
// }

// let multiply = (obj)=> {

//     let {x, y, z} = obj;

//     return x * y * z;
// }

// console.log(multiply(obj));


// function addTwoNumbers(x=0, y=0) {
//     return x + y;
// }


// console.log(addTwoNumbers(2,4));
// console.log(addTwoNumbers(3,4));

// let addTwoNumbers = (a=0, b=0)=>{
//     return a + b;
// }

// console.log(addTwoNumbers(3, 5));
// console.log(addTwoNumbers(3, 10));


// let multiNums = (...args)=>{

//     let m = 1

//     for(let i of args){
//         m = m * i;
//         console.log(m);
//     }

// }

// multiNums(4,6,7,9)

// class Character{
//     constructor(health, power){
//         this.health = health;
//         this.power = power;
//     }
//     attack = (enemy) => {
//         enemy.health -= this.power;
//     }
//     print = ()=>{
//         console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}`);
//     }
// }
// class Hero extends Character{
//     constructor(health, power){
//         super(health, power);
//         this.name = "hero";
//     }
// }
// class Goblin extends Character{
//     constructor(health, power){
//         super(health, power);
//         this.name = "goblin";
//     }
// }
// let hero = new Hero(10, 4);
// let goblin = new Goblin(8, 5);

// hero.attack(goblin)
// hero.print();
// goblin.print();



// class Todo{

//     constructor(description){
//         this.description = description;
//     }
// }

// class TodosManager{

//     constructor(){
//         this.todoArray = []
//     }

//     addTodo = (description) => {
//         let todo = new TodosManager(description);

//         this.todoArrray.push(todo);
//     }

// //     displayTodos = ()
// }



// let regx = new RegExp("digital crafts");

// let regex2 = /digtal crafts/;

// let someString = "sdaikjnkfjn digital crafts nofienoine ifmepkfeoifno";

// let result = regex2.test(someString)
// console.log(result);

// let phonePattern = /(\d\d\d-\d\d\ )

// let pattern = /\d\d\d(-)?(.)?\d\d\d(-)?(.)?\d\d\d\d/g
// let str = "this is a phone number : 3333333333";
// let result = str.match(pattern);
// console.log(result);

// let pattern = /Bat(wo)*man/g;

// let str = "Batwoman Batman Batwowowowoman"

// let result = str.match(pattern)
// console.log(result);


// let pattern = /Bat(wo)+man/g;

// let str = "Batwoman Batman Batwowowowoman"

// let result = str.match(pattern)
// console.log(result);

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;  
}

var Course1 = new Course("Digital Crafts 16 Week Bootcamp", "Veronica", 1, true, 0);
var Course2 = new Course("24 Week Flex Class", "Paul", 1, true, 0);
var Course3 = new Course("Digital Crafts 16 Week Bootcamp", "Azam", 1, true, 0);