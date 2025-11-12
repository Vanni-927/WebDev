//-----------------DOM MANUPLATION--------------------
//First: Event listening                Second: Get the element






//Example1
document
    .getElementById("changeTextBtn")
    .addEventListener("click",
        function () {
            let para = document.getElementById("para1");
                para.textContent = "Accessed Element!";
        }
);
    


//Example2
document
    .getElementById("HighlightBtn")
    .addEventListener("click",
        function () {
            let list = document.getElementById("list1");
            list.firstElementChild.classList.add("highlight");
        }
);



//Example3 
document
    .getElementById("orderBtn")
    .addEventListener("click", 
        function () { 
            let order = document
                .getElementById("para2")
            order.textContent = "Order: Expresso";
        }
    )


    //Example4
document
    .getElementById("addBtn")
    .addEventListener("click",
        function () { 
            let newItem = document.createElement("li");
            newItem.textContent = "Curd";

            document
                .getElementById("list2")
                .appendChild(newItem);
        }
)
 


//Example5
document
    .getElementById("removeBtn")
    .addEventListener("click",
        function () {
            let task = document
                .getElementById("list3")
            task.lastElementChild.remove()
        }
)
    

//Example6
document
    .getElementById("handleBtn")
    .addEventListener("click",
        function () {
            alert("message");
    }
)


//Example7
document
    .getElementById("list4")
    .addEventListener("click", 
        function (event) { 
            console.log(event.target) //this works in console tab in browser.
            if (event.target //&& event.target,matches("class name")
            ) { alert("Selected!") };
        }
)
    

//Example8
document
    .getElementById("form1")
    .addEventListener("submit",
        function (event) {
            event.preventDefault();
            let feedback = document
                .getElementById("input").value
            document
                .getElementById("para3").textContent = `Feedback is ${feedback}`;
        }
)
    

//Example9
document.addEventListener('DOMContentLoaded', 
    function () {
        document
        .getElementById("para4").textContent = "Fully Loaded."
    }
)


//Example10
document
    .getElementById("changeBtn")
    .addEventListener("click",
        function () {
            let text = document
                .getElementById("para5");
            text.classList.toggle("highlight"); //instead of add
    }
)


