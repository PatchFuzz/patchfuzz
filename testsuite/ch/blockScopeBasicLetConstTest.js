





function blockScopeBasicLetConstTestFunc() {
    let integer = 1;
    let string = "2";
    let object = { p1: 3, p2: 4 };
    const constInteger = 5;
    const constString = "6";
    const constObject = { cp1: { cp2: 7, cp3: 8 }, cp4: 9 };
    return 0;
}
blockScopeBasicLetConstTestFunc.apply({});
WScript.Echo("PASSED");