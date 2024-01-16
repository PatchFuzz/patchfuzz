var aVar = 56;
try {
    console.log(aLet);
    let aLet = 56;
    
    
    assertEq(true, false);
} catch (e) {
    assertEq(e.message, "can't access lexical declaration 'aLet' before initialization");
}
