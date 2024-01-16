





try {
    for (var loopVar2 = 0; loopVar2 < 10; loopVar2++) {
        for (var zdmuqp = 0; zdmuqp < 10; ++zdmuqp) {
            eval('/x/ = true');
        }
    }
} catch(e) {
    var desc = e.message;
    if(desc == "Invalid left-hand side in assignment.") 
    {
        WScript.Echo("Expected " + desc);
    }
    else 
    {
        WScript.Echo("FAILED");
        throw e;
    }
}
WScript.Echo('PASS');