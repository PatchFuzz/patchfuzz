try {
    var e = Error("123");
    e.somevalue = "xyz";
    e.stack = "abacaba";
    print("description = " + e.message);
    print("stack = " + e.stack);
    for (var p in e) {
        print(p + " = " + e[p]);
    }
    
    throw e;
}
catch (ex) {
    print("----------------------");
    print("description = " + e.message);
    print("stack = " + e.stack);
    for (var p in ex) {
        print(p + " = " + ex[p]);
    }
}