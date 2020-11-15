/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(w){
  if(w<'12pm') return 'Good Morning';
  else if(w>'5pm') return 'Good Evening';
  else return 'Good Afternoon';
}





/* Write your implementation of displayMessage() */
