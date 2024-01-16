





























function testfn(f) { return [1].map(f)[0]; }
function foo() { return [].map.caller; }
assertThrows(function() { testfn(foo); } );



delete Array.prototype.map.caller;
assertThrows(function() { testfn(foo); } );


function testarguments(f) { return [1].map(f)[0]; }
function bar() { return [].map.arguments; }
assertThrows(function() { testarguments(bar); } );



delete Array.prototype.map.arguments;
assertThrows(function() { testarguments(bar); } );
