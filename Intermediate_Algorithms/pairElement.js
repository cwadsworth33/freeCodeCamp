//DNA Pairing

//The DNA strand is missing the pairing element.
//Take each character, get its pair, and return
//the results as a 2d array.

function pairElement(str) {
  var a = [];
  var pairs = {
    "T": "A",
    "A": "T",
    "G": "C",
    "C": "G"
  };
  for(i=0; i<str.length; i++){
    var temp = [];
    temp.push(str.charAt(i));
    temp.push(pairs[str.charAt(i)]);
    a.push(temp);
  }
  return a;
}
