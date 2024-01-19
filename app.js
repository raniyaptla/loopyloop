// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian_1="ashish";
console.log("The driver's name is "+Kalvian_1);


var Kalvian_2="anil";
console.log("The navigator's  name is "+Kalvian_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var driverLength = Kalvian_1.length;
var navigatorLength = Kalvian_2.length;

if (driverLength > navigatorLength){
  console.log("The driver has the longest name, it has " + driverLength + " characters.");
}
else if (driverLength < navigatorLength) {
  console.log("It seems that the navigator has the longest name, it has " + navigatorLength + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + driverLength + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
var v="";
var index="";

function vowels(s){
  var vowels = 'aeiouAEIOU'; 
  
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      
      v += s[i]; 
      index += i + ' '; 
    
    }
  }
  return v !== ''; 
}

var s = "Kalvian";

if (vowels(s)) {
  console.log(s + ' ' + v + ' ' + index);
} else {
  console.log("The string does not contain any vowels.");
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function countUpperAndLower(inputString) {
 
  let upperCount = 0;
  let lowerCount = 0;

  
  for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
     
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
          upperCount++;
      }
      
      else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
          lowerCount++;
      }
  }

  console.log(`Uppercase: ${upperCount}, Lowercase: ${lowerCount}`)
}
countUpperAndLower(s);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function printDriverNameInCaps(driverName) {
  let result = '';

  for (let char of driverName) {
    
    result += (char >= 'a' && char <= 'z') ? char.toUpperCase() : char;
    result += ' ';
  }

  console.log(result);
}


printDriverNameInCaps(s);




// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

function printNavigatorNameInReverse(navigatorName) {
  let reversedName = '';

 
  for (let i = navigatorName.length - 1; i >= 0; i--) {
    reversedName += navigatorName[i];
  }

  
  console.log(reversedName);
}


printNavigatorNameInReverse(s);


// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

function mergeAndSwap(driverName, navigatorName) {
  
  const mergedNames = driverName + ' ' + navigatorName;

  
  const swappedNames = navigatorName + ' ' + driverName;

  console.log( mergedNames);
  console.log(swappedNames);
}
mergeAndSwap(Kalvian_1, Kalvian_2)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function compareNames(driverName, navigatorName) {
  
  const driverLower = driverName.toLowerCase();
  const navigatorLower = navigatorName.toLowerCase();

  
  if (driverLower < navigatorLower) {
      console.log("The driver's name goes first.");
  } else if (driverLower > navigatorLower) {
      console.log("Yo, the navigator goes first definitely.");
  } else {
      console.log("What?! You both have the same name?");
  }
}

compareNames(Kalvian_1, Kalvian_2)

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.


const loremIpsumText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Etiam et libero at quam tristique dapibus in eu massa. 
  Phasellus volutpat varius diam, vitae sodales eros interdum et. 
  Integer ac dui nec turpis posuere tincidunt vel nec leo.
  
  Sed et arcu at mauris tristique scelerisque. 
  Morbi auctor ex in quam congue, id efficitur elit aliquam. 
  Etiam et justo nec odio sollicitudin aliquam. 
  Vestibulum euismod enim in justo convallis, non suscipit ex gravida.
  
  Vivamus et ex et purus tincidunt tincidunt. 
  In id ligula nec est suscipit scelerisque. 
  Sed hendrerit purus a justo egestas, vel posuere tellus sagittis. 
  Integer et urna ut ligula rhoncus interdum et vitae metus.
`;

const wordCount = loremIpsumText.split(' ').filter(n => n !== '').length;
const etCount = loremIpsumText.split(' ').filter(n => n !== '').filter(m => m === 'et').length;

console.log("Number of words:", wordCount);
console.log("Number of occurrences of 'et':", etCount);


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
function palindromeCheck(givenString) {
  let mainString = "";

  for (let index = 0; index < givenString.length; index++) {
    if (givenString[index] !== " " && givenString[index] !== ",") {
      mainString += givenString[index].toLowerCase(); 
    }
  }

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {
    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }

  return 'It is a palindrome';
}


let result = palindromeCheck("A man, a plan, a canal, Panama");
console.log(result); 



// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
