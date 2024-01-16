




var i = 0;
function incrementI() {
    return ++i; 
}


WScript.Echo(`The count is ${incrementI() }`);

while (i < 4) {
    WScript.Echo(`The count is ${incrementI() }`);
}


function tempHandler(callsite, substitutions) {
    WScript.Echo(substitutions); 
}
tempHandler`The count is
${++i }
`;


WScript.Echo(String.raw`The count is ${(function() {
    return ++i; 
})()}`);