try {
    var object = { };
    let global = print(object);
    let o = print(global);
    object.__proto__ = o;

    for (let q in o) { }
} catch { }
