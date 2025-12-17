var cnt = 0;
class Base { constructor() { ++cnt; } }


new Base();
print(cnt, 1);


(function() {
    function f() { Base(); }
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    function f() { Base(...[]); }
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    function f() { Base.call(null); }
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    function f() { Base.apply(null, []); }
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    var o = {};
    Object.defineProperty(o, "prop", { get: Base });
    function f() { o.prop };
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    var o = {};
    Object.defineProperty(o, "prop", { set: Base });
    function f() { o.prop = 1 };
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    var o = new Proxy(function() { }, { apply: Base });
    function f() { o() };
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();


(function() {
    var o = new Proxy({}, { get: Base });
    function f() { o.x }
    try { f() } catch (e) {}
    try { f() } catch (e) {}
    print(cnt, 1);
})();
