var i = 0;
function incrementI() {
    return ++i; 
}


print(`The count is ${incrementI() }`);

while (i < 4) {
    print(`The count is ${incrementI() }`);
}


function tempHandler(callsite, substitutions) {
    print(substitutions); 
}
tempHandler`The count is
${++i }
`;


print(String.raw`The count is ${(function() {
    return ++i; 
})()}`);