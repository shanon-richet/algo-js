let age = prompt("How old are you?");

if (age.toLowerCase() == "18") {
  alert("Wow! I'm a 18 too!");
}
if (age.toLowerCase() > "18") {
  alert("Wow! You are not yet an adult!");
}
if (age.toLowerCase() < "18") {
  alert("Wow! You are an adult!");
}

age = window.prompt('Are you feeling lucky');
age = window.prompt('Are you feeling lucky', 'sure'); //