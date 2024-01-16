

function testErrorPosition(src) {
    let failed = false;

    try {
        parse(src)
    }
    catch (e) {
        failed = true;
        assertEq(e.lineNumber, 1)
        assertEq(e.columnNumber, src.length - 1)
    }

    assertEq(failed, true);
}

testErrorPosition("0_")  
testErrorPosition("00_") 
testErrorPosition("1_")  
testErrorPosition("1__") 
testErrorPosition("00n") 
