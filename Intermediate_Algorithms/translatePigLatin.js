//Pig Latin

//Translate the provided string to pig latin.

function translatePigLatin(str) {
  var c = str.charAt(0);
  var counter = 0;
  //check if first char is a vowel
  if(c=='a'|c=='e'|c=='i'|c=='o'|c=='u')
    return str + "way";
  //if first char is not a vowel, find the index
  //of the first vowel
  var indexFirstVowel = findFirstVowel(str);
  //then create a new string by slicing the old
  //string at the vowel point
  var slicedString = str.slice(indexFirstVowel);
  //concatonate the sliced off consonants to the
  //end of the new string
  for(i=0; i<indexFirstVowel; i++){
    slicedString = slicedString + str.charAt(i);
  }
  //add ay to the end
  return slicedString + "ay";
}

//helper function to return the index of the first
//vowel in a string.
function findFirstVowel(str){
  var c = '';
  for(i=0; i<str.length; i++){
    c = str.charAt(i);
    if(c=='a'|c=='e'|c=='i'|c=='o'|c=='u'){
      return i;
    }
  }
  return 0;
}
