
function f(someName) {
    someName();
}
try {
    f(3);
} catch(e) {
    assertEq(e.message.includes("someName"), true);
}


function g(someName\u1200) {
    someName\u1200();
}
try {
    g(3);
} catch(e) {
    
    assertEq(e.message.includes("someName"), true);
}
