function testfn(f) { return [1].map(f)[0]; }
function foo() { return [].map.caller; }
print(function() { testfn(foo); } );



delete Array.prototype.map.caller;
print(function() { testfn(foo); } );


function testarguments(f) { return [1].map(f)[0]; }
function bar() { return [].map.arguments; }
print(function() { testarguments(bar); } );



delete Array.prototype.map.arguments;
print(function() { testarguments(bar); } );
