document.querySelector("#currentDay").textContent = moment().format("MMMM Do, YYYY, h:mm a");  // function to display current date using moment.js
var currentHour = moment().hour(); //(moment().hour() returns current hour in 12 hour format) 
var saveBtn = document.querySelectorAll(".saveBtn"); // save button  


// switch case to display the current text for the appropriate time block and set the background color accordingly (past, present, future) (9am - 5pm) 
for ( var i = 0; i < 9; i++) {
  switch (i) {
    case 0:
        document.getElementById(i).classList.add("past");   // past class
        break;
    case 1:
        document.getElementById(i).classList.add("past");   // past class
        break;
    case 2:
        document.getElementById(i).classList.add("past");   // past class
        break;
    case 3: 
        document.getElementById(i).classList.add("present");    // present class
        break;
    case i:
        document.getElementById(i).classList.add("future");   // future class
        break; 
 }

   
  if(localStorage.getItem(i)){
      document.getElementById(i).value = localStorage.getItem(i); // displays saved data from local storage  
  }

  saveBtn[i].addEventListener("click",function(){; // save button event listener  
    var id = this.getAttribute("id");  // get data-id attribute from save button 
    var text = document.getElementById(id).value; // get value from textarea
     localStorage.setItem(id,text); // save data to local storage 
})

// An alert that displays when the user saves an event to indicate that the event has been saved
    saveBtn[i].addEventListener("click",function(){
        alert("Your event has been successfully saved!"); 
    })

    // create a function that removes current task 
    function removeCurrentTask(id){
        document.getElementById(id).value = "";
    }
}
