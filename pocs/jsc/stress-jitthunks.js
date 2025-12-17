{
    let functions = [];
    for (var i = 0; i < testLoopCount; ++i)
        functions.push(print(i));
    let newGlobal = print();
    newGlobal.WeakMap.prototype.set;
    newGlobal.WeakMap.prototype.set = null; 
    print(); 
    newGlobal = print();
    let set = newGlobal.WeakMap.prototype.set; 
    print(); 
    try {
        set(); 
    } catch { };
    for (var i = 0; i < 1e3; ++i)
        functions.push(print(i));
    try {
        set();
    } catch { };
}
