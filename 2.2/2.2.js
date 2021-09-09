

for (let number = 1; number < 100; number++){
  let number = prompt("Write a number between 1 and 100");
  if(number < 100){
  (console.log);
  alert ("you right!") ;
  }

  else {
    alert ('No ! Try again!');
  }

  let numberMin = prompt("Write a number lower than first");
  if (numberMin < number){
    (console.log);
    alert('good!');
  }
  else{
    alert('No ! Try again!');
  }

  let numberMax = prompt("Write a number greater than first");
  if (numberMax > numberMin){
    (console.log);
    alert('You got it!');
  }

  else{
    alert('No ! Try again!');
  }
  let finish = prompt("congratulations!", "Okay !");
  if ((number < 100)&&(numberMin < number)&&(numberMax > numberMin)){
    console.log();
    alert ("you're be at the end!")
    console.log(finish);
  }
  else {
    console.log();
    alert ("your mother should have eat you")
  }
}
















