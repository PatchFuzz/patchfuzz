


























"use strict";

var observed = false;

var object = { get toString() { observed = true; } };
Object.defineProperty(object, "ro", { value: 1 });

try {
  object.ro = 2;  
} catch (e) {
  e.message;  
}

assertFalse(observed);
