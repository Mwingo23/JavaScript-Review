/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable 
//let x = 8;


// 2.) Change the value of this variable
//x = 5;

// 3.) Change the data type of this variable
//let y = 4;


// 4.) Create another variable and the one from above to concatenate
//let z = x + y;
//console.log(z = x + y) 

// 5.) Use any of the variables above or create new ones and print using string interpolation
//console.log(`The sum is ${x + y}`);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
//const Name = 'Sabrina';
//const char = Name.charAt(4);
//console.log(Name.charAt(4))


// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//const firstName = 'Teddy'
//const index = 3;
//console.log(`The character code ${firstName.charCodeAt(index)} is equal to ${firstName.charAt(index)}`)
//Unicode- a universal character set that defines the list of characters from the writing systems

// Using fromCharCode() - make it readable for us :). You'll see!
//console.log(String.fromCharCode(index))

// Take your first and last name and concat()
//let fName = 'Mahasin'
//let lName = 'Wingo'
//console.log(fName.concat(" ", lName));

// Create a string and make it return true using startsWith()
//let sentence = 'I\m a Sagittarius';
//console.log(sentence.startsWith('I\m'));


// Now use any variable with endsWith() and return false
//sentence = 'I\m a Sagittarius';
//console.log(sentence.endsWith('a'));

// Finish the following sentence. Use includes() and return true.
//const ozgur = 'Once upon a time Ozgur looked up at the Moon, and was amazed at the sight of it '
//console.log(ozgur.includes('Moon'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
//const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
//console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
//const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
//console.log( vanessa.lastIndexOf('Vanessa'));

// Can we use length for strings? I don't know, you tell me.
//const noWeCantTeo = "but did you try it out though?"
//console.log(noWeCantTeo.length);
//console.log(`${noWeCantTeo.length}`);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
//const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
//console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'));

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
//const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
//console.log(joshIsLookingForWifey.search('wifey'));

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
//const pizzaSentence = "pizza, other half of pizza"
//console.log(pizzaSentence.slice(7, 27))

// Now using the pizza sentence, return only pizza (before the comma)
//console.log(pizzaSentence.slice(-5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
//splitTheBill = "Yaz, Poornima, and Leshawn"
//console.log(splitTheBill.split(' '))
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
//console.log(splitTheBill.split(''))

// Use this toLowerCase()
//const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
//console.log(angry.toLowerCase(''))
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
//const words = 'YOU LOWLIFE, ARROGANT FOOL, YOU\RE DRIVING ME NUTS. '
//console.log(words.toLowerCase('') , "CHILL OUT!")

// toUpperCase()
//const jahlunSaidToPutSomeRespectToHisName = "jahlun"
//console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase(''))

// substring()
//const str = 'on the chopping block...'
//console.log(str.substring(6))

// Returns "ell"
//const basicGreeting = "Hello World"
//console.log(basicGreeting.substring(1, 4))

// Returns "JavaScript"
//const ohReally = "JavaScript Substring"
//console.log(ohReally.substring(10, -1))

// Returns aol.com
//const aslDays = "xXteoWuzHereXx@aol.com"
//console.log(aslDays.substring(15, 22));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
//const greetings = '        Hello World!        ';
//console.log(greetings)
//console.log(greetings.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

//const a = 5;
//const b = 10;
//const c = 15;
//const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d == d)
// console.log(d != a)
// console.log(a < c)
// console.log(a < b < c)
// console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
//let spin = 0;
//let sentence = 'Theres something in this liquor'
//for(let spin = 0; spin < 11; spin++)
//console.log(spin)
//console.log(sentence)

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
//let vision = 0;
//for(let vision = 0; vision < 21; vision++)
//console.log(vision)

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
//let spin = 0;
//while(spin < 20){
  //spin++
  //console.log(spin + ' I\m sorry');
  
//}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
//const whateverQueenBeySaid = {
//thing1: 'shoes',
  //thing2: 'clotes',
  //thing3: 'gaming console'
//}
//for (let key in whateverQueenBeySaid ) {
  //console.log(whateverQueenBeySaid[key]);
//}

// Using (FOR IN LOOP), print the indexes of the array.
//const lana = ['l', 'a', 'n', 'a']
//for (let atttribute in lana){
 // console.log(lana[attribute]);
//}

// USE (FOR OF LOOP)!
//const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
//for(let tia of tia){
  //console.log(tia)
//}
// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
//let text = '';
//const perscholas = ['Amira', 'Arely', 'Jonathan']
//perscholas.forEach(myFunction);

//function myFunction (item, index) {
  //text += index + ": " + item
//}
//console.log(perscholas)
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do

// push()- adds an new item to the end of an array, it can change the length 
//of an array and return a new length of an array

// pop()- removes the last elment of an array, it can also change original 
//array and returns the removed element

// unshift()- adds new elements to the beginning of an array and overwrites the original array

// shift()- removes the first item of an array, changes the original array and returns the shifted element

// concat()- creates a new array by merging existing arrays

// splice()- can be used to add new items to an array

// slice()- remove elements without leaving holes in the array

// sort()- sorts an array alphabetically

// includes()- returns true if a string contains a specified string otherwise it returns false

// indexOf()- returns the position of the first occurence of a value in a string

// length- returns the length of a string 

//const fruits = ['apple', 'banana', 'orange']

// Print banana
//console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
//console.log(fruits.join())
// Remove orange
//console.log(fruits.pop([2]))
// Add strawberry, kiwi, and grapes at the end
//fruits.push('strawberry, kiwi, grapes');
// Remove apple
//console.log(fruits.shift([0]))

// Add mango at the beginning of the array
//console.log(fruits.unshift(['mango']));

// Add lemon, and grapefruit between mango and banana
//console.log(fruit.splice([]))

// Remove banana and strawberry

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

// Print the last two exotic fruits without altering the newly concatenated array.

// Monalissa said she needs help re-organizing her items in alphabetical order.
//const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
//console.log(monalissaIsMessy.sort());
// Kevin accidentally stepped into the mirror world and needs help reversing his words.
//const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
//console.log(mirrorMirrorOnTheWall.reverse());
// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
//const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
//console.log(RafaelNoBadWords.filter('badword'));
// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
//const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
//console.log(numberaToAddUp.reduce());
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
//const numbersOne = [1, 2, 3,];
//const numbersTwo = [4, 5, 6];
//const numbersCombined = [numbersOne, numbersTwo];
//console.log(numbersCombined)
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
//console.log(donutSop[2, 4])
// Tosi wants ihatethis. :) Print!
console.log(donutShop[9])

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

var teo = 'person'
if (teo == 'person') {
  console.log('Teo is a person!')
} else if 
(teo != 'person'){
  console.log('Teo is not a person')
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.


// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

// Create a function expression with your first name as the variable and then print your first and last name

// Create an arrow function that accepts a number and have it return that number doubled

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.




// Access the name using dot notation


// Access the age using square brackets

// Use object destructuring to access location

// ACCESS Granted
/*const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow

// Print cut


// Print Bulbahhhh!!!!!


// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)

// Print an array that contains every single properties in bulbasaur

// Print every single properties one by one in the console

// Print an array that contains every single values in bulbasaur */