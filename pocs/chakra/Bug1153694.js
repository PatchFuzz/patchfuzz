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
        print("Expected " + desc);
    }
    else 
    {
        print("FAILED");
        throw e;
    }
}
print('PASS');