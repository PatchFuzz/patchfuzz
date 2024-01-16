

gczeal(0);


let d = new Debugger();
let g = newGlobal({newCompartment: true})
let gw = d.addDebuggee(g);

let source = `
    let A = "A";
    let B = "B";

    class C {
        
                    'field_str';
                    'field_str_with_init' = 1;
                    [A];
                    [B] = 2;
             static x;
             static y = 3;
             static [A + "static"];
             static [B + "static"] = 4;
        
    }
`;

let NumInitializers = 8;


let START = source.split('\n').findIndex(x => x.includes("START")) + 1;
let END   = source.split('\n').findIndex(x => x.includes("END")) + 1;
assertEq(END - START - 1, NumInitializers);


g.evaluate(source);
let scripts = d.findScripts()
               .filter(script => (script.startLine >= START &&
                                  script.startLine <= END));
scripts.sort((x, y) => (x.sourceStart - y.sourceStart))

for (var i = 0; i < NumInitializers; ++i) {
    let script = scripts[i];
    let lineText = source.split('\n')[START + i];

    
    assertEq(script.startLine, START + 1 + i);
    assertEq(script.startColumn, 20);

    
    assertEq(script.startColumn + script.sourceLength + ';'.length, lineText.length);
}
