var obj = {valueOf: function() { "use strict"; undeclared = 7; }};
try { '' + obj; print(true, false); } catch(e) { }
try { '' + obj; print(true, false); } catch(e) { }
print("undeclared" in this, false);
