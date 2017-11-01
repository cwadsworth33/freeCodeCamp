//Convert HTML Entities

//Convert the characters &, <, >, " (double quote), and '
//(apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var entities = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&apos;",
    '"':"&quot;"
  };
  str = str.replace(/&/g,entities["&"]);
  str = str.replace(/</g,entities["<"]);
  str = str.replace(/>/g,entities[">"]);
  str = str.replace(/'/g,entities["'"]);
  str = str.replace(/"/g,entities['"']);
  return str;
}
