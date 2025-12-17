var g = newGlobal({sameCompartmentAs: this});
g.evaluate(`enableShellAllocationMetadataBuilder()`);

function f() {
    
    var re = /abc.+/;
    for (var i = 0; i < 100; i++) {
        print(re.exec("..abcd").index, 2);
    }
    
    
    g.evaluate(`
    var re = /abc.+/;
    for (var i = 0; i < 100; i++) {
        var obj = re.exec("..abcd");
        print(getAllocationMetadata(obj).stack.length > 0, true);
    }
    `)
}
f();
