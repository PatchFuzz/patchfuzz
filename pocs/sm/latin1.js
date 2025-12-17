function testBasic() {
    
    var s = '[1, 2, "foo", "bar\\r\\n", {"xyz": 3}, [1, 2, 3]]';
    print(isLatin1(s), true);
    print(JSON.stringify(JSON.parse(s)), '[1,2,"foo","bar\\r\\n",{"xyz":3},[1,2,3]]');

    
    s = '[1, 2, "foo\u1200", "bar\\r\\n", {"xyz": 3}, [1, 2, 3]]';
    print(JSON.stringify(JSON.parse(s)), '[1,2,"foo\u1200","bar\\r\\n",{"xyz":3},[1,2,3]]');
}
testBasic();

function testErrorPos() {
    

    
    var s = '[1, \n2,';
    try {
	JSON.parse(s);
	print(0, 1);
    } catch(e) {
	print(e instanceof SyntaxError, true);
	print(e.toString().includes("line 2 column 3"), true);
    }

    s = '[1, "\u1300",\n2,';
    try {
	JSON.parse(s);
	print(0, 1);
    } catch(e) {
	print(e instanceof SyntaxError, true);
	print(e.toString().includes("line 2 column 3"), true);
    }
}
testErrorPos();

function testEvalHack() {
    
    var arr = eval("[1, 2, 3, \"abc\"]");
    print(JSON.stringify(arr), '[1,2,3,"abc"]');
    print(isLatin1(JSON.stringify(arr)), true);

    
    arr = eval("[1, 2, 3, \"abc\u1200\"]");
    print(JSON.stringify(arr), '[1,2,3,"abc\u1200"]');
}
testEvalHack();

function testEvalHackNotJSON() {
    
    var arr = eval("[]; var q; [1, 2, 3, \"abc\"]");
    print(JSON.stringify(arr), '[1,2,3,"abc"]');

    
    arr = eval("[]; var z; [1, 2, 3, \"abc\u1200\"]");
    print(JSON.stringify(arr), '[1,2,3,"abc\u1200"]');

    var arr = eval("[1, 2, 3, \"abc\u2028\"]");
    print(arr.length, 4);
    print(arr[3], "abc\u2028");
}
testEvalHackNotJSON();

function testQuote() {
    
    var s = "abc--\x05-'\"-\n-\u00ff++";
    var res = JSON.stringify(s);
    print(res, '"abc--\\u0005-\'\\"-\\n-\xFF++"');
    print(isLatin1(res), true);

    
    s += "\uAAAA";
    print(JSON.stringify(s), '"abc--\\u0005-\'\\"-\\n-\xFF++\uAAAA"');
}
testQuote();
