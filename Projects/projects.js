
//------------------------------------------TO-DO-LIST------------------------------------------
let taskbtn = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

loadtasks();

taskbtn.addEventListener("click", function () {
  let newInput = taskInput.value.trim();
  if (newInput === "") {
    //alert("Please enter a task!");
    return;
  }
  taskInput.value = ""; // Clear the input field
  renderTasks(newInput); // Call the function to add the task to the list and then overall all those texts(called as tasktext) get stored in local storage by the name of taskList.
  savetasks(); // Save the task to local storage
});

//Creating a function named renderTasks as the tasks will come from both new input and local storage. ///also rendering tasks from local storage.
function renderTasks(tasktext) {
  let newTask = document.createElement("li");
  newTask.appendChild(document.createTextNode(tasktext)); //newTask.textContent = tasktext;- as this will overwrite the text content of newTask as wellas button, we use appendChild to add the text node.

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newTask);
    savetasks(); // Save the updated task list to local storage
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
}

//Concept of local storage- saving in user's browser so that it dont vanish when page is refreshed
function savetasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(function (taskItem) {
    tasks.push(taskItem.firstChild.textContent); // Get the text content of each task item(only text is the first thing)
  });
  localStorage.setItem("taskList", JSON.stringify(tasks));             //(key, value [in strings format so that it can be stored])
}

function loadtasks() {
  let stored = localStorage.getItem("taskList");
  let tasks = [];

  try {
    tasks = JSON.parse(stored);
    if (!Array.isArray(tasks)) tasks = []; // handle corrupted value
  } catch (error) {
    tasks = []; // fallback if JSON is broken
  }

  tasks.forEach((task) => renderTasks(task));
}




/* 
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }*/

//CRUD operations- create, read, update, delete.

















//------------------------------------------WEATHER APP------------------------------------------
let addButton = document.getElementById("addCityButton");
let cityInput = document.getElementById("cityInput");
let weatherInfo = document.getElementById("weatherInfo");
let cityName = document.getElementById("city-name")
let temp = document.getElementById("temperature");
let describe = document.getElementById("description");
let errorMsg = document.getElementById("error-message");
let apiKey = "20a67a3e9a117b871cf4b99473543980"; 


addButton.addEventListener("click", async function () {
  let city = cityInput.value.trim();
  if (city === "") {
    errorMsg.textContent = "Please enter a city name!";
    return;
  }
  errorMsg.textContent = ""; // Clear any previous error message
  
  cityInput.value = ""; // Clear the input field after fetching weather



  try {
    let cityWeather = await fetchWeather(city); //we are waiting for the response from the server and also telling it to show error if it fails instead of crashing the full system.
    displayWeather(cityWeather);
  } catch (error) {
    displayerror();
  }
});





//server/database is always in other continent, so it takes time- use of await.


//The data I fetched was in JSON syntax (like a string), and I used JSON parsing so that I could convert it into JavaScript objects and use it in my webpage.


async function fetchWeather(city) {       
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  let response = await fetch(url); // Fetching the weather data from the API-not usable as it is not in js object form.

  if (!response.ok) {
    throw new Error("City not found.");
  }
  const data = await response.json();       //fetch has a .json()- built in method which automatically give result as parsed string.
  return data;
} 
 

function displayWeather(weatherdata) {                               //here- name:string; main:object; weather:array.
  const { name, main, weather } = weatherdata;
  cityName.textContent = name;
  temp.textContent = `Temperature : ${main.temp}`
  describe.textContent = `Weather : ${weather[0].description}`

  //unlock weatherInfo
  weatherInfo.classList.remove("hidden");
  errorMsg.classList.add("hidden");
}

  
function displayerror() { 
  weatherInfo.classList.remove("hidden");
  errorMsg.classList.remove("hidden");
  
}

















//------------------------------------E-Commerce app-------------------------------
let newItems = document.getElementById("items");    //overall div for products
let itemsAdded = document.getElementById("itemsAdded");
let cartInfo = document.getElementById("cart-info");
let cartTotal = document.getElementById("cart-total");
let totalPrice = document.getElementById("total-price");
let checkoutBtn = document.getElementById("checkout");


let cart = [];

let products = [
  { id: 1, name: "Product 1", price: 29.00 },
  { id: 2, name: "Product 2", price: 39.00 },
  {id :3, name: "Product 3", price: 69.00},
]


//creating div for each product separately.
products.forEach(product => {
  let productDiv = document.createElement('div')
  productDiv.classList.add("itemsBox")
  productDiv.innerHTML = `
  <span> ${product.name} - $${product.price.toFixed(2)}</span>   
    <button data-id="${product.id}"> Add to Cart</button >`;  //as span is inline
  newItems.appendChild(productDiv);
});




/*use of EVENT DELEGATION- event bubbles from child elements to their parent.
key difference btw EVENT DELEGATION and DIRECT BINDING
in direct binding, we will add event listener to btn but then we need to have a loop for every btn
here in this case we are just adding eventlis. to parent only and every child will have the function by itself automatically using event.target.
as otherwise whereever u will click, it will be added to the cart.
*/

newItems.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let productId = parseInt(event.target.getAttribute("data-id")); //even though data id is no. but still its type is string as it is locally stored.
    let selectedProduct = products.find((p) => p.id === productId);
    cart.push(selectedProduct);
    updateCart();
  }

  function updateCart() {
    renderCart();
  }
});

function renderCart() {
  cartInfo.innerHTML = "";
  itemsAdded.innerHTML = "";
  let newtotalprice = 0;

  if (cart.length > 0) {
    cartTotal.classList.remove("hidden");
    cart.forEach((item, index) => {
      newtotalprice = newtotalprice + item.price
      
      let itemstobeAdded = document.createElement('div');
      itemstobeAdded.classList.add("itemsBox")
      itemstobeAdded.innerHTML = `
  <span>${item.name} - $${item.price.toFixed(2)}</span>
  <button class="delete-btn" data-index="${index}">Delete</button>
   `;
      itemsAdded.appendChild(itemstobeAdded);



      itemsAdded.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
          let cartId = parseInt(event.target.getAttribute("data-index"));
          let deletedProduct = cart.find((i) => i.id === cartId);
          cart.splice()

          renderCart(); // re-render the cart after deletion
        }
      });
      
      
    });
    totalPrice.textContent = newtotalprice.toFixed(2);

  
  } else {
    cartTotal.classList.add("hidden")
    totalPrice.textContent = `$0.00`;
    cartInfo.classList.remove("hidden")
   }
}

checkoutBtn.addEventListener('click', () => {
  cart.length = 0
  alert("Checked out successfully")
  renderCart();
})




















//------------------------------------Expense Tracker-------------------------------
let expenses = document.getElementById("expenses");
let amount = document.getElementById("Amt");
let submitAmtBtn = document.getElementById("submitAmtBtn");
let TotalPrice = document.getElementById("totalPrice");
let addedExpenses = document.getElementById("addedExpenses");



let allExpenses = [];
let newTotalPrice = 0;


submitAmtBtn.addEventListener('click', function () {
  let expenseInput = expenses.value.trim();
  if (expenseInput === "") {
    alert("Enter expense");
    return;
  }
  

  let amtInput = amount.value.trim();
  if (amtInput === "") {
    alert("Enter amount");
    return;
  }

  allExpenses.push({ name: expenseInput, newamount: parseFloat(amtInput) });
  renderExpenses(expenseInput, amtInput)

  expenses.value = "";
  amount.value = "";
});


function renderExpenses(name, newamount) {
  
  let expenseDiv = document.createElement('div')
  expenseDiv.classList.add("expensesStyle");
  expenseDiv.innerHTML = `
  <span> ${name} - $${parseFloat(newamount).toFixed(2)}</span>   
    <button>Delete</button >`;
  addedExpenses.appendChild(expenseDiv);
  

  newTotalPrice += parseFloat(newamount);
  TotalPrice.textContent = `Total: $${newTotalPrice.toFixed(2)}`;
}