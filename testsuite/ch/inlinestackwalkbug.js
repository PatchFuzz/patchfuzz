




function shapeyConstructor() {
  y = iczqcn;
}

function test1() {
  for (var w in [1,2]) {
    try {
      new shapeyConstructor(w);
    } catch (e) {
    }
  }
}

function throwFunc() {
   
   try {
   }
   catch (ex) {
   }
   throw "ex" ;
}

function caller() {
   throwFunc(w);
}

function test2() {
  for (var w in [1,2]) {
    try {
      new caller();
    } catch (e) {
    }
  }
}

test1();
test2();
WScript.Echo("PASS");


