function* g1() {
  try {
    throw {};
  } catch ({a = class extends (yield) {}}) {
  }
}
g1().next();  

function* g2() {
  let x = function(){};
  try {
    throw {};
  } catch ({b = class extends x {}}) {
  }
}
g2().next();  

function* g3() {
  let x = 42;
  try {
    throw {};
  } catch ({c = (function() { return x })()}) {
  }
}
g3().next();  
