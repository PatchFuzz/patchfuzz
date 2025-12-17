function inlinedFunction(x) {
    if (x) 
        new Object;
}

function foo(x) {
    if (x) 
        inlinedFunction(x);
}

makeMasquerader(); 
for (var i = 0; i < testLoopCount; i++)
    foo({}); 
