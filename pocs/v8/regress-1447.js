[0].forEach(function(){ Object.freeze(Array.prototype.forEach); });
[0].every(function(){ Object.seal(Array.prototype.every); });

function testStrict(){
  "use strict";
  [0].forEach(function(){ Object.freeze(Array.prototype.forEach); });
  [0].every(function(){ Object.seal(Array.prototype.every); });
}

testStrict();
