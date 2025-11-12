//To print any statement
console.log("Hello, World!");
console.table({ name: "John", age: 30, city: "New York" });
console.log("Hello, World!      how are you?"); //To show that js do accept spaces in strings



/* Data types (mainly 8)
String, Number, BigInt, Boolean (T/F), Undefined, Null, Symbol, Object */

/* Declaration of variables 
1) var : It is function scoped or globally scoped. 
         It is not used that much bcz it can be re-declared and updated.
2) let : It is block scoped.
          It can be updated. using --- let x = 10; x=20
3) const : It is block scoped.
         It cannot be re-declared or updated.
*/











//Operators
//Arithmetic Operators/ operations
let a = 10;
let b = 5;
console.log(a + b); // Addition similarly for rest as in C
let c = 10 + 4
console.log(c); 


//logical Operators
let x = true;
let y = false;
console.log(x && y); // AND operation
console.log(x || y); // OR operation
console.log(!x); // NOT operation

//Comparison Operators
let num1 = 10;
let num2 = 20;
console.log(num1 == num2); // Equal to or ! not equal to or <>.

//Assignment Operators
let z = 5;
z += 2; 












//Primitives data types -6
let name = 'john'; //can be "", ', ``.

let age = 30; 
let Age = new Number(30);    //become an object i.e. every primitive data type can be converted to non-primitive type
console.log(typeof age); 
console.log(Age.valueOf()); 

let sym1 = Symbol
let sym2 = Symbol
console.log(sym1 === sym2); 
let sym3 = Symbol("Sam")         //symbols can also have names


//rest are boolean, null, undefined




//Non-primitive data types - 2
//1) Object
let person = {
    name: "John",
    age: 30,
    isStudent: false
};


console.log(person.name); 
const person2 = {
    Name: "Jane",
    Age: 25,
    IsStudent: true
};  
//then also 
person2.Name = "Doe";
console.log(person2); 






//2) Array
let fruits = ["apple", "banana", "cherry"]; 
console.log(fruits[0]); 
fruits.push("orange"); //adding an element to the array
console.log(fruits);
fruits[3] = "kiwi"; 
fruits.includes("banana"); 
fruits.pop(); //removing the last element from the array
//Array can also be of objects
let students = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 }
];

//array.splice(startIndex, deleteCount, item1, item2, ...)
fruits.splice(1, 0, "orange")
console.log(fruits); 

//problems in array
let teaFlavours = ["green", "black", "oolong"];
let newVar = teaFlavours[0]; 
console.log(newVar); 
teaFlavours[1] = 'assam';
console.log(teaFlavours);

let cities = ["New York", "Los Angeles", "Chicago"];
let newCities = ['Houston', 'Phoenix', 'Philadelphia'];
worldCities = [...cities, ...newCities]; 
console.log(worldCities); //or
console.log(cities.concat(newCities)); 









//Conditionals- few Problems

//no is greater or less
let number1 = 2
let number2 = 3
if(number1 > number2) {
    console.log("Number 1 is greater than Number 2");
} else {
    console.log("Number 1 is less than or equal to Number 2");
}
console.log('It is not a numvber')


//check if a number is even or odd
let num = 4;
if(num % 2 === 0) {
    console.log(num + " is even");
}

// check if a number is prime
let primeNum = 7;   
if(primeNum % 1 === 0 && primeNum % primeNum === 0) {
    console.log(primeNum + " is a prime number");
}











//Hard copy and soft copy
let var1 = 10;
let var2 = var1;
var1 = 12
console.log(var2) //hard copy always for primitive data types

//soft copy always in case of non-primitive data types
//to generate a hard copy--->

let array1 = [1, 2, 3];
let array2 = [...array1]; //using spread operator




















//Loops
let sum = 0
let i = 1
while(i <=5) {
    sum += i;
    i++;
}
console.log("Sum of first 5 natural numbers is: " + sum);

//Q- Countdown from 5 to 1 and then store it in an aaray.
let countdown = []
let j = 5
while (j >= 1) {
    countdown.push(j)
    j--
}
console.log(countdown)

//do- while loop
//Q- Print numbers from 1 to 5 using do-while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

//for loop
//Q- Print numbers from 1 to 5 using for loop
for (i = 1; i <= 5; i++) {
    console.log(i);
}




//Q- Multiply an array of numbers by 2 and store it in a new array
let array = [1, 2, 3, 4]
let newArray = [];
//let multipliedarray = array * 2; ---this is a wrong stae\tement. we cant directly multiply an array with a number.
let multipliedarray = array.map(num => num * 2); //using map function to multiply each element by 2
newArray.push(multipliedarray);
console.log(newArray);

//or using loop by multiplying each element by 2
for (let l = 0; l <= 3; l++) {
    newArray.push(array[l] * 2);
}
console.log(newArray);


let cityList = []
let Cities = ["New York", "Los Angeles", "Chicago"];
for (let m = 0; m <= 2; m++) {
    cityList.push(Cities[m]);
    console.log(Cities[m]);
}
console.log(cityList);
console.log(Cities)






let Tea = ["green", "black", "chai", "oolong"];
let selectedTeas = [];
for (let n = 0; n < 4; n++) {
    if (n == 2) { 
        break
    } selectedTeas.push(Tea[n]);
}
console.log(selectedTeas); 


//for-of loop - Loop through values in an iterable (like array, string, etc.).
let tea = ["green", "black", "chai", "oolong"];
let SelectedTeas = [];
for (const n of tea) {
  if (n == 2) {
    break;
  }
  SelectedTeas.push(tea[n]);
}
console.log(selectedTeas);




//for-in loop - Loop through keys of an object
let cityPopulation= {
    "New York": 8419600,
    "Los Angeles": 3980400,
    "Chicago": 2716000
}
let selectedPopulation = []
for (const city in cityPopulation) {
    if (city == "Los Angeles") {
        break
    }
    selectedPopulation[city] = cityPopulation[city];         //key = value
    selectedPopulation.push(cityPopulation[city]);
    selectedPopulation.push(city);
}   
console.log(selectedPopulation);


//or
let CityPopulation = {
  "New York": 8419600,
  "Los Angeles": 3980400,
  "Chicago": 2716000,
};
let SelectedPopulation = {};
let keys = Object.keys(CityPopulation); 

for (let i = 0; i < keys.length; i++) {
 // let city = keys[i];
 if (keys[i] === "Los Angeles") {
    break;
  }
    SelectedPopulation[keys] = CityPopulation[keys];
    // key = value
}
console.log(SelectedPopulation);


//for each loop - Loop through elements of an array or properties of an object.
let TeaFlavours = ["green", "black", "chai", "oolong"];
let availableaTea = []
TeaFlavours.forEach(function (tea) {
    if (tea === "chai") {
        return; 
    }
   availableaTea.push(tea);
});
 console.log(availableaTea);




let arrayOfNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
for (let n = 0; n < 5; n++) {
    if (n == 3) {
        continue
    } else { 
        doubledNumbers.push(arrayOfNumbers[n] * 2);
    }
}
console.log(doubledNumbers); 














//Functions- increases the code reusability
//name is the title of the funct and parameter is just a temporary value

//Q make a function that takes one parameter of typeOftea and returns a string.
function makeTea(typeOftea) {
    return `Making ${typeOftea}`;
}
//now this returned value need to be printed in a variable also
let info = makeTea("lemon tea")
console.log(info)

//or - if not using function
let typeoftea = 'lemon tea'
let info1 = `Making ${typeoftea}`;
console.log(info1)


/* Q - function inside a function-> that is first we will get a confirmation and then will execute the main function.
function outer() {
    function inner() {
        return `Inner function called`
    }
    return inner();
} */

function orderTea(typeTea) {
    function orderConfirm() {
        return `Order confirmed`
    }
    return orderConfirm()
}
let order = orderTea('chai')
console.log(order)



//arrow functions- shorter and cleaner way to write functions.
const totalPrice = (price, quantity) => {
    return price * quantity
}
let cost = totalPrice(40, 2)
console.log(cost)

//or
function totalprice(Price, Quantity) {
    return Price * Quantity 
}
let Cost = totalprice(100, 2)
console.log(Cost)
//--> reusability 
let cost2 = totalprice(200, 2);
console.log(cost2);

//or if not using function
let price1 = 200
let price2 = 100
let quantity1 = 2
let quantity2 = 4
let cost1 = price1 * quantity1
let cost3 = price2 * quantity2;
console.log(cost1, cost3)



//Q- 
function blackTea() {
    return "black tea";
}
function greenTea() {
    return "green tea";
}
function processorder(fn) {
    return fn();
}
console.log(processorder(blackTea)); 
console.log(processorder(greenTea)); 

//or
function maketea(teaofType) {
    return `This is ${teaofType}`;
}
function processOrder(teaofType) {
    return maketea(teaofType);  // This 'teaType' is local to processOrder
}
let Order = processOrder(`chai`);
console.log(Order);  

//or
/*function maketea(typeoftea) {
return `${typeoftea}`
}
function processOrder(fn) {
return fn(`black tea`)
}
let Order = processOrder(maketea)
console.log(Order)*/


//Q- First class functions 
function createTea(fn) {
    return fn()
}
function newFunction(TEAtype) {
    return `Making green tea`;
}
let teaMaker = createTea(newFunction)
console.log(teaMaker)
//similarly if i need to print  more
function newFunction2(TEAtype) {
  return `Making black tea`;
}
let teaMaker2 = createTea(newFunction2);
console.log(teaMaker2);

//
function flattenArray(arr) {
  return arr.flat(Infinity); // "Infinity" handles deeply nested arrays
}
//
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
 

function printMultiplicationTable(n) {
  let array = [];
  for (let j = 1; j <= 10; j++) {
    array.push(`${n} * ${j} = ${n * j}`);
  }
  return array;
}

function countVowels(str) {
  let count = 0;
  const vowels = `aeiouAEIOU`;
  for (let k = 0; k < str.length; k++) {
    if (vowels.includes(str[k])) {
      count++;
    }
  }
  return count;
} //or
function countVowels2(str) { 
    let count2 = 0;
    for (let char of str) {
        if ('aeiouAEIOU'.includes(char)) {
            count2++;
        }
    }
    return count2;
}
let str = "Hello World";
console.log(countVowels(str)); 

//
const squareNumbers = (arr) => {
  return arr.map((num) => num * num);
};
let numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers));

//
const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
let numbers2 = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers2));
//or uing for and if else
const filterEvenNumbers2 = (arr) => {
    let result2 = [];
    for (let x = 0; x<arr.length; x++) {
        if (arr[x] % 2 === 0) {
            result2.push(arr[x]);
        }
    }
    return result2;
};
let numbers3 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers2(numbers3));

//reduce property
const sumPositiveNumbers = (arr) => {
    return arr
    .filter(num=> num > 0)
        .reduce((sum, num) => sum + num, 0);
}
let numbers4 = [-1, 2, -3, 4, 5];
console.log(sumPositiveNumbers(numbers4));

//or
const sumPositiveNumbers2 = (arr) => {
    let sum = 0;
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] > 0) {
            sum = sum + arr[y];
        }
    }
    return sum;
}
let numbers5 = [-1, 2, -3, 4, 5];
console.log(sumPositiveNumbers2(numbers5));


//
const findLongestWord = (arr) => {
  return arr.reduce((longest, string) => {
    if (string.length > longest.length) {
      return string;
    } else {
      return longest;
    }
  }, "");
};
let words = ["apple", "banana", "cherry", "date"];
console.log(findLongestWord(words));

//or
const findLongestWord2 = (arr) => {
    let longest2 = "";
    for (let s = 0; s < arr.length; s++) {
        if (arr[s] > longest2.length) {
            return arr[s];
        } else {
            return longest2;
        }
    }
} 
let words2 = ["apple", "banana", "cherry", "date"];
console.log(findLongestWord(words2));




//
const person5 = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old `; //this refers to that object.
  },
};
console.log(person5.introduce());


















//PROTOTYPES- a hidden property
let object1 = {
    model: 13,
    year: 2020,
}
let object2 = {
    year: 2022
}

//suppose i know that the features of object2 are same as object1, then i can use prototype to inherit the properties of object1 to object2
Object.setPrototypeOf(object2, object1); 
console.log(object2.model); 
console.log(Object.getPrototypeOf(object2)); 
console.log(object2.__proto__);






/*concept of this and new
this basically refers to the object whereas new is used to create a new object.
it works similarly as `Pen belongs to me` - so here me can be anyone depending upon who is saying it and new will indicate to the person to whom we have given that pen.
*/

//CONSTRUCTOR FUNCTIONS
function Person(name, age) {
    this.name = name;
    this.age = age;
};
let person1 = new Person("John", 30);
console.log(person1);                              //prototype chain- chain of objects linked via prototype.
let person3 = new Person("Jane", 25);
console.log(person3);



function juice(flavours) { 
    this.flavours = flavours;
    this.describe = function () {
        return `Here is ${this.flavours} juice`;
    }
}
let juice1 = new juice("orange");
console.log(juice1.describe());
//or
 function Juice(flavours) {
   this.flavours = flavours;
}
Juice.prototype.describe = function () { 
    return `Here is ${this.flavours} juice`;
}
 let juice2 = new Juice("orange");
 console.log(juice2.describe());



//although we get the errors but there is also a special syntax.
 function Person2(name, age) {
   this.name = name;
     this.age = age;
     if (!new.target) { 
         throw new Error("Use appropriate `new` keyword")
     }
 }
 let person4 = new Person2("John", 30);
 console.log(person4);
 let person6 = new Person2("Jane", 25);
 console.log(person6);




//Classes  and Inheritance
class Vehicle {
    constructor(year, color) {                //here this is also a funct but termed as method if used inside class.
        this.color = color
        this.year = year
    }
    intro() {
        return `This is ${this.color} color class bought in ${this.year}!`
    }
    //or vehicle.prototype.intro = funct
}
 
//inheritance- very easier syntax using class
class Car extends Vehicle { 
    intro() { 
        return `This is a car of blue color bought in ${this.year}!`
    }
    drive() { 
        return `Drive safely`
    }
}
let car1 = new Car(2022, "black");
console.log(car1.intro()); //now blue is the new nherited property not black anymore.
console.log(car1.drive());

//or-- Difficult syntax
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return `Woof!`;
};
//`Constructor` is used specifically if we need to pass on some values or set up properties.




//Encapsulation- hiding the data(restricting direct access) - it can only be accessed with class only.
class Bankaccount { 
    #balance = 0;

    deposit(amount) { 
        return `this.#balance += amount`
    }
    getBalance() {
        return `$ ${this.#balance} is the amount left.`
    }
}
let bank1 = new Bankaccount()
console.log(bank1.getBalance())




//Abstraction - extracting the necessary info only.
class CoffeeMachine {
    process() { 
        //lot of complex things going on
        return `Your coffee will get prepared shortly`
    }
    output() {
        //bill,etc
        return`Coffee without sugar is ready. Pls take it.`

    }
    overallButton() {
        return `${this.process()} and ${this.output()}`
    }
}
let myOrder = new CoffeeMachine()
console.log(myOrder.process())
console.log(myOrder.output());
console.log(myOrder.overallButton());





//Polymorphism- getting displayed in more that one form.
class Bird {
    property() {
        return `They can fly high`
    }
}
class Penguin extends Bird {
    property() {
        return `They cant fly.`
    }
}
let bird1 = new Bird()
console.log(bird1.property())
let bird2 = new Penguin();
console.log(bird2.property());

//------------STATIC METHOD----------- this belongs to the class and not at all to the new objects which are created.
class Maths {
    add(a, b) {
        return a + b;
    }
}
let input1 = new Maths()
console.log(input1.add(1, 2))
//using static
class Maths2 {
 static add(a, b) {
    return a + b;
  }
}
//let input2 = new Maths2();
//console.log(input2.add(1, 2)); X
console.log(Maths2.add(1, 2))




//Q
class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    if (obj instanceof vehicle || obj instanceof car) {
      return true;
    } else {
      return false;
    }
  }
}

class car extends vehicle {
  constructor(make, model) {
    super(make);
    this.model = model;
  }
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}
  



//------------------Getter and setter property-------------------------- 
//Q
// Task 1
class BankAccount {
    constructor(balance = 0) {
      if (balance < 0) {
        throw new Error("Initial balance cannot be negative");
      }
      this._balance = balance;
    }
  
    get balance() {
      return this._balance;
    }
  
    set balance(amount) {
      if (amount < 0) {
        throw new Error("Balance cannot be negative");
      }
      this._balance = amount;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit must be positive");
      }
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdrawal must be positive");
      }
      if (amount > this._balance) {
        throw new Error("Insufficient funds");
      }
      this._balance -= amount;
    }
  }
  
  
  
  // Task 2
  class Shape {
      area() {
          return 0;
      }
  }
  
  class Circle extends Shape {
      constructor(radius) {
          super();
          this.radius = radius;
      }
      area() {
          return Math.PI * (this.radius * this.radius);
      }
  }
  
  class Rectangle extends Shape {
      constructor(length, breadth) {
          super();
          this.length= length;
          this.breadth= breadth;
      }
      area() {
          return this.length * this.breadth;
      }
  }
  


  