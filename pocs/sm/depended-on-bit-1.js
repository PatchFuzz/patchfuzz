var dependedOnStrings = [];

var length = 50;

function getSubstr(src, i) {
  return src.substring(i, i + 50);
}

function checkProp(o, prop) {
  return o[prop];
}

var substrs = [];
var objs = [];

with({})
for (var i = 0; i < 1000; i++) {
  var pieces = [];
  for (var j = 0; j < 99; j++) {
    pieces.push("a");
    pieces.push(Math.floor(Math.random() * 10));
  }
  dependedOnStrings.push(pieces.join(""));
}

for (var i = 0; i < 1000; i++) {
  
  substrs.push(getSubstr(dependedOnStrings[i], (i * 2) % 50));
  objs.push({});
}

for (var i = 0; i < 1000; i++) {
  
  
  checkProp(objs[i], dependedOnStrings[i]);
}



for (var i = 0; i < 1000; i++) {
  var pieces = [];
  for (var j = 0; j < 99; j++) {
    pieces.push("b");
    pieces.push(Math.floor(Math.random() * 10));
  }
  dependedOnStrings.push(pieces.join(""));
}


for (var i = 0; i < 1000; i++) {
  print(substrs[i].startsWith("a"), true);
}
