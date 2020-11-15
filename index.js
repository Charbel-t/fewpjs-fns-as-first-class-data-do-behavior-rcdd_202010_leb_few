/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(w){
  if(w < '00:00') return 'Good Morning';
  else if(w >'17:00') return 'Good Evening';
  else return 'Good Afternoon';
}

/* Write your implementation of displayMessage() */

function displayMessage(l){
  document.querySelector('h1').innerHTML = l;
}