var newContext = {
  id : 'new-context'
};


function sink (p, q) {
    var g = x => {
      
      if (this != newContext || this.id != newContext.id)
          throw 'Wrong context of arrow function #1';

      return x;
    };
    if (p) { if (q) g.inner = 42; return g; }
    return x => {
      
      if (this != newContext || this.id != newContext.id)
          throw 'Wrong context of arrow function #2';

      return x;
    };
}
noInline(sink);

for (var i = 0; i < testLoopCount; ++i) {
    var f = sink.call(newContext, true, true);
    var result = f(42);
    if (result != 42)
    throw "Error: expected 42 but got " + result;
}




var f = sink.call(newContext, true, false);
var result = f(12);
if (result != 12)
    
    throw "Error: expected 12 but got " + result;


var f = sink.call(newContext, true, true);
var result = f.inner;
if (result != 42)
    throw "Error: inner should be 42 but is " + result;
