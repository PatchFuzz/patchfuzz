var dependedOnStrings = [];

var length = 50;
var reg = /q[a0-9]{50}/;

function getSubstr(src, i) {
  return reg.exec(src)[0];
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
    if (j == (i * 2) % 50) {
      pieces.push("q");
    }
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
  print(substrs[i].startsWith("qa"), true);
}
