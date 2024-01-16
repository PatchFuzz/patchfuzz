







function dummy() {
    
}

function funcThrow() {
    dummy();
    throw 123; 
    dummy();
}

dummy();
funcThrow();
dummy();
