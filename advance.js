/* 
Javascript actually dont have the ability to run asynchronously in the same way as other languages.
Asynchronous code like timeout, network calls or file reading are handled by the event loop.
so whenever we write a code, i goes into call stack and then event loop helps it to get executed,
 but if it cant be done, it throws it into browser/Dom/node etc. and it get executed and goes into the queue and then from where the event loop execute it.
 Meanwhile the call stack is free to execute other code. So that is why asynchronous code is executed later.


 Microtask queue has higher priority — it runs before normal callbacks. eg- Promises, MutationObserver.
*/
//----------------------------------------------------------------------------------------------------------------------------------






//CLOSURES: A closure is a function(with memory) that is returned from another function and remembers the variables from the outer function's scope even after the outer function has executed.

function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;                   //if i write inner() instead of inner, it will return its value.
}
let count1 = outer();
console.log(count1()); 
console.log(count1());
console.log(count1());      //Each counter keeps its own internal count



//Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


//Async/Await, Promise all.
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "John", message: "Data fetched successfully" });
    }, 2000);
  });
}  
async function getData() {
    try {
        console.log("Fetching data..");
        let data2 = await fetchData2();
        console.log(data2);
    } catch (error) {
        console.log("Error:", error)
    }
}
getData();



//Dealing with multiple promises using Promise.all
function fetchData3() { 
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, 1000);
    })
}
function fetchData4() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("Data from fetchData4");
        }, 1000);
        })
    }

   async function getData3(params) {
   try {
     console.log("Data fetched for 3");
     //instead of writing let name = await for both
       let [userdata3, userdata4] = await Promise.all([fetchData3(), fetchData4()])
       console.log(userdata3);
       console.log(userdata4);
       console.log("Fetched completely");//final staement just for confirmation.
   } catch (error) {
       console.log("error detected", error);
   }
} 
getData3();
//promise.all returns await statement only if both are true, even if one is wrong , it will throw error.



//Promise.race
function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout exceeded"), timeout)
  );

  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 3000)
  );
}





//Protoytypal inheritance- Object inherit properties and methods from another object through prototype chains.
//this
const Person = {
    name : "john",
    age : 25,

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
Person.greet();
const greetFunction = Person.greet;
greetFunction(); 

const boundGreet = Person.greet.bind(Person);
boundGreet(); //shows that we need to give a context everytime we use `this` .

//---------Different ways
const person = {
  name: "Alice",
  introduce() {
    return `Hi, my name is ${this.name}`;
  },
};
let boundIntroduce = person.introduce.bind(person);
boundIntroduce();

// Task 2
function introduce() {
  return `Hi, this is ${this.name}`;
}
//introduce.call(person1);

// Task 3
function sum(a, b) {
  return (a + b) * this.multiplier;
}
//console.log(sum.apply(double, [a, b]));






//Generators (mostly when we need one value at a time) and iterators(that keeps the flow moving- e.g. in loops as u keep on moving from one i to another of an array)
function* generator1() {
    yield 1;
    yield 2;                              //function* with yield is generator funct., next() is iterator
}
let output1 = generator1()
console.log(output1.next().value);          
console.log(output1.next().value);



//use of ...args
function searchHandler(query) {
  console.log("Searching for:", query);
}
searchHandler("shoes");                  // ✅ "Searching for: shoes"
searchHandler("shoes", "red");           // ✅ "Searching for: shoes", but "red" is ignored
searchHandler();                         // ✅ "Searching for: undefined"
function searchHandler(...args) {
  console.log("Searching for:", args);
}
    








//QUESTIONS
//1
function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(function () {
    console.log("Task finished");
  }, 2000);
}
simulateAsyncTask();


//2
function fetchDataWithCallback(callback) {
  setTimeout(function () {
    const data = "Fetched data";
    callback(data);
  }, 1000);
}
fetchDataWithCallback((result) => {
  console.log(result);
});


//3
function rateLimiter(fn, limit) {
  let lastcalltime = 0;
  function inner(...args) {
    let firsttimecall = new Date().getTime();
    if (firsttimecall - lastcalltime >= limit) {
      lastcalltime = firsttimecall;
      return fn(...args);                                 //It's not giving a surety of values — it's just passing them exactly and safely.
      //If you pass nothing, it passes nothing.
     // If you pass something, it passes that.
      
      
    } else {
      return "Rate limit exceeded";
    }
    }
    return inner;
}


//4
/*function memoize(fn) {
  let cache = {};
  function memorised(x) {
    if (cache[x]) {
      return cache[x];            // Check if the result is already cached
    } else {
      let result = fn(x);
      cache[x] = result;     // Store the result in cache
      return result;
    }
  }
}*/ //failed code
function memoize(fn) {
  let cache = new Map(); //Map is better for storing keys that are not only strings.
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}







