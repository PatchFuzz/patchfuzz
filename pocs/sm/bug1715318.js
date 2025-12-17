function f() {
    
    let arrow = _ => null;
    arrow.prototype = null;

    
    for (var i = 0; i < 100; i++) {}

    try {
        class C1 extends arrow {}
        throw "Fail";
    } catch (e) {
        print(e instanceof TypeError, true);
    }
}
f();
f();
