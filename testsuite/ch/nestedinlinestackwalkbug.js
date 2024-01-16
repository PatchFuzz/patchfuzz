




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

function shapeyConstructor() {
  y = iczqcn;
}

function test() {
  for (var w in [1,2]) {
    try {
      new caller();
    } catch (e) {
    }
  }
}

function toptest() {
  try {
    test();
    new shapeyConstructor();
  }
  catch (ex) {
  }
}

toptest();
toptest();
toptest();
WScript.Echo("PASS");


