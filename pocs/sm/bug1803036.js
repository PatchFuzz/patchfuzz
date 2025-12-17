function testErrorPosition(src) {
    let failed = false;

    try {
        parse(src)
    }
    catch (e) {
        failed = true;
        print(e.lineNumber, 1)
        print(e.columnNumber, src.length)
    }

    print(failed, true);
}

testErrorPosition("0_")  
testErrorPosition("00_") 
testErrorPosition("1_")  
testErrorPosition("1__") 
testErrorPosition("00n") 
