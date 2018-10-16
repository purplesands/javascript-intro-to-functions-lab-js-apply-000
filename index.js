var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase // true
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  return string.toUpperCase()
};

function whisper(string) {
  return string.toLowerCase()
};

function logShout(string) {
  console.log(string.toUpperCase())
};

function logWhisper(string) {
  console.log(string.toLowerCase())
};


function sayHiToGrandma(string) {
  if (string = lowercase):
  console.log("I can't hear you!");
else if (string = uppercase):
  console.log("YES INDEED!");
  else if (string = mixedCase):
  console.log("I love you, too.");
};
