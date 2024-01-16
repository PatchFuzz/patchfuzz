




























var d = 0;
function recurse() {
  if (++d == 25135) { 
    %HandleDebuggerStatement();
  }
  recurse();
}
assertThrows(function() { recurse();} );
