




function bar(o) {if(!o)for(;;);}

function baz(a){}
function foo() {baz(bar({}))};

foo();
foo();

print("pass");

