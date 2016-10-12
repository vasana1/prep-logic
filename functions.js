/*If statements
If statments are a way for our applications to take different paths through our code or make choices about what kind of behavior our application takes based on certain conditions or values in our variables. The variable or value that we are testing to be true is known as the condition.*/
/*In Human: If this condition is true, do something.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
}
/*If/Else Statements
If/Else statments have the same behavior as our if statement above but we can add a secondary condition in the case that our if statement is not true to take another action instead. What if our light is already turned off when we flip the switch?

In Human: If this condition is true, do something, else if it is false, do something else.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
  else{
    isTurnedOn = true;
  }
}
/*For loops
Sometimes we want to loop over a collection of data stored in an Arrayor inspect each character in a String. Or we just want to execute a block of code a set number of times before continuing on with the execution of our program. For loops allow us to execute a block of code and at the end of each iteration of our for loop we will evaluate a condition to determine if our loop should run again similar to our if statment.

Our for loop is made up of 3 parts: 1. Variable initialization 2. Termination condition 3. Afterthought

In Human: While our variable i is less than the size of our Array retrieve each element in the Array. At the end of each loop add 1 to the current value of i.*/

var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  checkWinningNumber(currentLotteryNumber);
}

function makeCrazyLongString(string){
  var outputString = "";
  for(var i =0; i < 100; i++){
    outputString = outputString.concat(string);
  }
}


/*makeCrazyLongString('taco');
Function - youGetTaco
Write a function that takes a single String parameter called action. If the value passed into our function is eat have the function return the String value EAT TACOS.
*/

function youGetTaco(action){
  if(action === "eat"){
    return "EAT TACOS";
  }
}
console.log (youGetTaco("eat"));


/*Function - isNumberGreaterThan
Write a function that takes two parameters of type Number called first and second respectively. Return true if the first number is greater than the second.*/


function isNumberGreaterThan(first, second){
  if (first > second){
    return true;
  }
}
console.log (isNumberGreaterThan(9, 5));

/*Function - isTrue
Write a function that takes in a Boolean value named val and have the function return whether the value is true.*/

function isTrue(val){
  if (val === 7){
    return true;
  }else{
    return false;
  }
}
console.log (isTrue(7));

/*Function - isFalse
Write a function that takes in a Boolean value named val and have the function return whether the value is false.*/

function isFalse(val2){
  if (val2 > 5){
    return true;
  }else{
    return false;
  }
}
console.log (isFalse(3));


/*Function - isEqual
Write a function that takes two variables of type String called firstWord and secondWord respectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.*/

function isEqual(firstWord, secondWord){
  if (firstWord === secondWord){
    return "AWWWWRIGHT"
  }else{
    return "Y U NO MATCH";
  }
}
console.log (isEqual("oh", "oh no"));

/*Function - isNotEqual
Write a function that takes two variables of type String called firstWord and secondWord respectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.*/

function isNotEqual(firstWord, secondWord){
  if (firstWord !== secondWord){
    return false;
  }else{
    return true;
  }
}
console.log (isNotEqual("yes" , "no"));

/*Function - doubleEquals
Write a function that takes two variables of type Boolean called first and second respectively. Return true if both values are true otherwise return false.*/

function doubleEquals(first, second){
  if ((first === true) && (second === true)){
    return true;
  }else{
    return false;
  }
}
console.log (doubleEquals(true, true));

/*Function - totalOver30
Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false.*/

function totalOver30(first, second, third){
if (first + second + third > 30){
  return true;
}else{
  return false;
}
}
console.log (totalOver30(10, 4, 29));


/*Function - totalUnderWhat
Write a function that takes four variables of type Number called first and second and third and fourth respectively. Return true if the sum of first, second and third are less than fourth otherwise return false.*/

function totalUnderWhat(first, second, third, fourth){
  if ((first + second + third) < fourth){
    return true;
  }else{
    return false;
  }
}
console.log (totalUnderWhat(10, 30, 40, 300));

/*Function - looptoNumber
Write a function that takes in a Number value named limit and have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes.*/

function loopToNumber(limit){
  for (var i = 0; i<limit; i++){
   console.log (i); 
 }
}
loopToNumber(4);


/*Function - showEachValue
Write a function that takes in a Array value named characters that has a sequence of single character String values and have the function write a for loop that loops for each number of elements in the Array and console.log each character as the loop executes.*/

var letters = ["a", "b" , "c"];

function showEachValue(characters){
for (var i = 0; i<characters.length; i++){
   console.log (characters[i]);
}
}
showEachValue((letters));

/*Function - createArrayFromString
Write a function that takes a single variable of type String called word and write a for loop that creates an Array made up of each character in word except for "A" or "a". We don't want no stinking "A" or "a" in our Array. Note: You will need to use the Array.push() method to complete this function.*/



/*Function - greatSummator
Write a function that takes an Array with any number of type Number and write a for loop to add all numbers in the Array and return the sum.*/




/*Function - totalUnderWhatFor
Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.*/




/*Function - checkTrueValues
Write a function that takes an Array with any number of type Boolean values and write a for loop to call our isTrue function with each value as input and return true if all values return true from our isTrue function.*/

