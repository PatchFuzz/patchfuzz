var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var count = 0;

function testUrl (options, expected) {
    count++;
    dbg.onDebuggerStatement = function (frame) {
        dbg.onNewScript = function (script) {
            dbg.onNewScript = undefined;
            print(script.url, expected);
            count--;
        };
        frame.evalWithBindings("", {}, options);
    };
    g.eval("debugger;");
}


testUrl(undefined, "debugger eval code");
testUrl(null, "debugger eval code");
testUrl({ url: undefined }, "debugger eval code");
testUrl({ url: null }, "null");
testUrl({ url: 5 }, "5");
testUrl({ url: "" }, "");
testUrl({ url: "test" }, "test");
testUrl({ url: "Ðëßþ" }, "Ðëßþ");
testUrl({ url: "тест" }, "тест");
testUrl({ url: "テスト" }, "テスト");
testUrl({ url: "\u{1F9EA}" }, "\u{1F9EA}");
print(count, 0);
