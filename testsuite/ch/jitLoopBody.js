




function test0() {
    var o = { p: 1, q: 2 };
    var sum = 0;
    for(var i = 0; i < 1; ++i)
        if(i !== 0)
            for(var j in o)
                sum += o[j];
    return sum;
}
WScript.Echo("test0: " + test0());
