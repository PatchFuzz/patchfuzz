;

let g = newGlobal({newCompartment: true});
g.eval(`
    function* f1() {
        debugger;
        yield 1;
    }

    function* f2() {
        yield 1;
        debugger;
        yield 2;
    }
`);

let dbg = Debugger(g);
dbg.onDebuggerStatement = frame => ({return: "Ronja"});

let genObj = g.f1();
print(genObj.next(), {value: "Ronja", done: true});

print(genObj.next(), {value: undefined, done: true});


genObj = g.f2();
print(genObj.next(), {value: 1, done: false});
print(genObj.next(), {value: "Ronja", done: true});
print(genObj.next(), {value: undefined, done: true});  

