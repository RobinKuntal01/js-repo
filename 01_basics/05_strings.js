const myString = new String("Quick fox jumped over the lazy dog");

//console.log(myString.__proto__)

// at() functions returns character at  index

let index = 8;

myCharacterAtIndex = `The character at ${index} is ${myString.at(index)}`;
//console.log(myCharacterAtIndex);

// String.prototype.concat()

/*
The concat() method of String values concatenates the string arguments to this string and returns a new string.
*/

let str1 = "Robin";
let str2 = "Kuntal";

// console.log(str1.concat(" ",str2));

//String.prototype.endsWith()

/*The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.*/

let str3 = "Who let the dogs out?";

// console.log(str3.endsWith("dogs?")) // returns false
// console.log(str3.endsWith("out?")) // returns true
// console.log(str3.length) // returns the length of str3

//String.fromCharCode()

/* Converts unicode values to string and returns */

// console.log(String.fromCharCode(65, 66, 67)); // returns "ABC"

//String.prototype.includes()

/*The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.*/

let myStar =
  "Out there in space, blazing just a scant 150 million kilometers away lies the brightest and most massive object in our Solar System: the Sun. Shining hundreds of thousands of times as bright in Earths skies as the next brightest object, the full Moon, the Sun is unique among Solar System objects for producing its own visible light, rather than only appearing illuminated because of reflected light. However, the thousands upon thousands of stars visible in the night sky are all also self-luminous, distinguishing themselves from the planets and other Solar System objects in that regard.";

let checkWord = "hey";

function searchWord(checkWord) {
  console.log(
    `the word ${checkWord}${myStar.includes(checkWord) ? "is" :  "is not"} in myStar`);
}

//searchWord(checkWord);

//String.prototype.indexOf()

/*The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.*/

let poem = "Hey this is a nice place for trekking. we should come here more often for trekking!"

console.log(poem.indexOf("trekking")) // returns 29

//String.prototype.lastIndexOf()

/*The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.*/

console.log(poem.lastIndexOf("trekking")) // returns 74


