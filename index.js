function isPalindrome(word) {
  // Write your algorithm here
    let indexOfWord = 0
  for (let i = word.length -1; i >= 0; i--) {
      const element = word[i];
      if (element !==  word[indexOfWord]) {
        return false
      }
      indexOfWord += 1
  } return true
}

/* 
  Add your pseudocode here
  I want to create the word backwards and then compare it to the current word
*/

/*
  Add written explanation of your solution here
  I start off by creating a variable which stores indexOfWord with an initial value of 0
  then I loop through the word backwards and add 1 to the indexOfWord variable I then compare word[i] to word[indexOfWord]
  if at any point they're different I return false if the entire loop executes I return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
