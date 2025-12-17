try {
    evaluate("let x = (() => { throw 3 })();");
} catch(e) {
    print(e, 3);
}
Object.defineProperty(this, "x", {});
(function() { x = 3; })();
