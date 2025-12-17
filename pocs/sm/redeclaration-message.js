var aVar = 56;
try {
    console.log(aLet);
    let aLet = 56;
    
    
    print(true, false);
} catch (e) {
    print(e.message, "can't access lexical declaration 'aLet' before initialization");
}
