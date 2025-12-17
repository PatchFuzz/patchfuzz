function test0() { with({}) for(var x in {}) return; }
test0();


function test1() { with({}) try { } finally { with({}) return; } }
test1();
