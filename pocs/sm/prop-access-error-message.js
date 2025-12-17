var a = {};
var b = {};
var p = "c";

function doPropAccess() {
  
  
  a.c.d = b.e;
}

function testPropAccess() {
  var caught = false;
  try {
    doPropAccess();
  } catch (e) {
    print(e.message.includes("a.c is undefined"), true);
    caught = true;
  }
  print(caught, true);
}

function doElemAccess() {
  
  
  var x = "c";
  a[x].d = b.e;
}

function testElemAccess() {
  var caught = false;
  try {
    doElemAccess();
  } catch (e) {
    print(e.message.includes("a[x] is undefined"), true);
    caught = true;
  }
  print(caught, true);
}

for (var i = 0; i < 10; i++) {
  testPropAccess();
  testElemAccess();
}
