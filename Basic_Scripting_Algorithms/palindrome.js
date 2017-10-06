//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both
//forward and backward, ignoring punctuation, case, and spacing.

//Note
//You'll need to remove all non-alphanumeric characters (punctuation,
//spaces and symbols) and turn everything lower case in order to check
//for palindromes.

function palindrome(str) {
  var nice = "";
  //filter out the non-alphanumeric characters
  nice = str.replace(/\W/g, '');
  nice = nice.replace(/\s+/g, '');
  nice = nice.replace(/_/g, '');
  //filter out caps
  nice = nice.toLowerCase();
  //compare remaining characters
  for(i=0; i<nice.length; i++){
    if(nice.charAt(i) != nice.charAt(nice.length-i-1)){
       return false;
       }
  }

  return true;
}
