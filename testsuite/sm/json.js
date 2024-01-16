function testBasic() {
    
    var s = '[1, 2, "foo", "bar\\r\\n", {"xyz": 3}, [1, 2, 3]]';
    assertEq(isLatin1(s), true);
    assertEq(JSON.stringify(JSON.parse(s)), '[1,2,"foo","bar\\r\\n",{"xyz":3},[1,2,3]]');

    
    s = '[1, 2, "foo\u1200", "bar\\r\\n", {"xyz": 3}, [1, 2, 3]]';
    assertEq(JSON.stringify(JSON.parse(s)), '[1,2,"foo\u1200","bar\\r\\n",{"xyz":3},[1,2,3]]');
}
testBasic();

function testErrorPos() {
    

    
    var s = '[1, \n2,';
    try {
	JSON.parse(s);
	assertEq(0, 1);
    } catch(e) {
	assertEq(e instanceof SyntaxError, true);
	assertEq(e.toString().includes("line 2 column 3"), true);
    }

    s = '[1, "\u1300",\n2,';
    try {
	JSON.parse(s);
	assertEq(0, 1);
    } catch(e) {
	assertEq(e instanceof SyntaxError, true);
	assertEq(e.toString().includes("line 2 column 3"), true);
    }
}
testErrorPos();

function testEvalHack() {
    
    var arr = eval("[1, 2, 3, \"abc\"]");
    assertEq(JSON.stringify(arr), '[1,2,3,"abc"]');
    assertEq(isLatin1(JSON.stringify(arr)), true);

    
    arr = eval("[1, 2, 3, \"abc\u1200\"]");
    assertEq(JSON.stringify(arr), '[1,2,3,"abc\u1200"]');
}
testEvalHack();

function testEvalHackNotJSON() {
    
    var arr = eval("[]; var q; [1, 2, 3, \"abc\"]");
    assertEq(JSON.stringify(arr), '[1,2,3,"abc"]');

    
    arr = eval("[]; var z; [1, 2, 3, \"abc\u1200\"]");
    assertEq(JSON.stringify(arr), '[1,2,3,"abc\u1200"]');

    var arr = eval("[1, 2, 3, \"abc\u2028\"]");
    assertEq(arr.length, 4);
    assertEq(arr[3], "abc\u2028");
}
testEvalHackNotJSON();

function testQuote() {
    
    var s = "abc--\x05-'\"-\n-\u00ff++";
    var res = JSON.stringify(s);
    assertEq(res, '"abc--\\u0005-\'\\"-\\n-\xFF++"');
    assertEq(isLatin1(res), true);

    
    s += "\uAAAA";
    assertEq(JSON.stringify(s), '"abc--\\u0005-\'\\"-\\n-\xFF++\uAAAA"');
}
testQuote();
