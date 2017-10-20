//Pig Latin

//Translate the provided string to pig latin.

function translatePigLatin(str) {
  var c = str.charAt(0);
  var counter = 0;
  if(c=='a'|c=='e'|c=='i'|c=='o'|c=='u')
    return str + "way";
  var indexFirstVowel = findFirstVowel(str);
  var slicedString = str.slice(indexFirstVowel);
  for(i=0; i<indexFirstVowel; i++){
    slicedString = slicedString + str.charAt(i);
  }
  return slicedString + "ay";
}

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
