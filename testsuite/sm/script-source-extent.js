











let dbg = new Debugger();
let debuggeeCompartment = newGlobal({newCompartment: true});


gczeal(0);

function getScriptSourceExtent(source) {
    
    
    

    let g = newGlobal({sameCompartmentAs: debuggeeCompartment});
    dbg.addDebuggee(g);

    g.evaluate(source);

    
    
    let scripts = dbg.findScripts();

    
    
    scripts = scripts.filter(script => (script.sourceStart > 0) || script.isFunction);

    
    
    for (let script of scripts) {
        assertEq(script.startLine, 1);
        assertEq(script.startColumn, script.sourceStart);
    }

    
    function getExtentString(script) {
        let start = script.sourceStart;
        let end = script.sourceStart + script.sourceLength;
        let length = script.sourceLength;

        let resultLength = source.length;
        assertEq(start <  resultLength, true);
        assertEq(end   <= resultLength, true);

        
        
        
        
        let result = " ".repeat(start) + "^";
        if (end > start) {
            result += "^".padStart(length, "-");
        }
        return result.padEnd(resultLength)
                     .substring(0, resultLength);
    }
    let results = scripts.map(getExtentString);

    
    results.sort();

    dbg.removeDebuggee(g);

    return results;
}

function testSourceExtent(source, ...expectations) {
    let actual = getScriptSourceExtent(source);

    
    assertEq(actual.length, expectations.length);
    for (let i = 0; i < expectations.length; ++i) {
        assertEq(actual[i], expectations[i]);
    }
}




testSourceExtent(`function foo () { }`,
                 `             ^-----`);
testSourceExtent(`function foo (a) { }`,
                 `             ^------`);
testSourceExtent(`function foo (a, b) { }`,
                 `             ^---------`);


testSourceExtent(`let foo = function () { }`,
                 `                   ^-----`);
testSourceExtent(`let foo = function (a) { }`,
                 `                   ^------`);
testSourceExtent(`let foo = function (a, b) { }`,
                 `                   ^---------`);


testSourceExtent(`let foo = function bar () { }`,
                 `                       ^-----`);
testSourceExtent(`let foo = function bar (a) { }`,
                 `                       ^------`);
testSourceExtent(`let foo = function bar (a, b) { }`,
                 `                       ^---------`);


testSourceExtent(`let foo = x => { }`,
                 `          ^-------`);
testSourceExtent(`let foo = x => { };`,
                 `          ^-------^`);
testSourceExtent(`let foo = () => { }`,
                 `          ^--------`);
testSourceExtent(`let foo = (a, b) => { }`,
                 `          ^------------`);
testSourceExtent(`let foo = x => x`,
                 `          ^-----`);
testSourceExtent(`let foo = () => 0`,
                 `          ^------`);


testSourceExtent(`function * foo () { }`,
                 `               ^-----`);
testSourceExtent(`async function foo () { }`,
                 `                   ^-----`);
testSourceExtent(`async function * foo () { }`,
                 `                     ^-----`);


testSourceExtent(`let foo = async x => { }`,
                 `                ^-------`);
testSourceExtent(`let foo = async () => { }`,
                 `                ^--------`);


testSourceExtent(`function foo() { function bar () {} }`,
                 `                              ^----^ `,
                 `            ^------------------------`);







if (!isLcovEnabled()) {
    testSourceExtent(`function foo(a = b => c) {}`,
                     `                 ^-----^   `,
                     `            ^--------------`);
    testSourceExtent(`let foo = (a = (b = c => 1) => 2) => 3;`,
                     `                    ^-----^            `,
                     `               ^----------------^      `,
                     `          ^---------------------------^`);
}


testSourceExtent(`let obj = { x () {} };`,
                 `              ^----^  `);
testSourceExtent(`let obj = { * x () {} };`,
                 `                ^----^  `);
testSourceExtent(`let obj = { async x () {} };`,
                 `                    ^----^  `);
testSourceExtent(`let obj = { async * x () {} };`,
                 `                      ^----^  `);
testSourceExtent(`let obj = { get x () {} };`,
                 `                  ^----^  `);
testSourceExtent(`let obj = { set x (v) {} };`,
                 `                  ^-----^  `);
testSourceExtent(`let obj = { x: function () {} };`,
                 `                        ^----^  `);
testSourceExtent(`let obj = { x: y => z };`,
                 `               ^-----^  `);


testSourceExtent(` class C { } `,
                 ` ^----------^`);
testSourceExtent(` let C = class { } `,
                 `         ^--------^`);
testSourceExtent(` class C { }; class D extends C { } `,
                 `              ^--------------------^`,
                 ` ^----------^                       `);
testSourceExtent(` class C { }; let D = class extends C { } `,
                 `                      ^------------------^`,
                 ` ^----------^                             `);
testSourceExtent(`let C = class extends class { } { }`,
                 `                      ^--------^   `,
                 `        ^--------------------------`);


testSourceExtent(` class C { constructor() { } } `,
                 `                      ^-----^  `);
testSourceExtent(` let C = class { constructor() { } } `,
                 `                            ^-----^  `);
testSourceExtent(` class C { }; class D extends C { constructor() { } } `,
                 `                                             ^-----^  `,
                 ` ^----------^                                         `);
testSourceExtent(` class C { }; let D = class extends C { constructor() { } } `,
                 `                                                   ^-----^  `,
                 ` ^----------^                                               `);
testSourceExtent(`let C = class extends class { } { constructor() { } }`,
                 `                                             ^-----^ `,
                 `                      ^--------^                     `);



testSourceExtent(`class C { field }`,
                 `          ^----^ `,
                 `^----------------`);
testSourceExtent(`class C { field; }`,
                 `          ^----^  `,
                 `^-----------------`);
testSourceExtent(`class C { "field" }`,
                 `          ^------^ `,
                 `^------------------`);
testSourceExtent(`class C { 0 }`,
                 `          ^^ `,
                 `^------------`);
testSourceExtent(`class C { [1n] }`,
                 `          ^---^ `,
                 `^---------------`);
testSourceExtent(`class C { field = 1 }`,
                 `          ^--------^ `,
                 `^--------------------`);
testSourceExtent(`class C { "field" = 1 }`,
                 `          ^----------^ `,
                 `^----------------------`);
testSourceExtent(`class C { 0 = 1 }`,
                 `          ^----^ `,
                 `^----------------`);
testSourceExtent(`class C { [1n] = 1}`,
                 `          ^-------^`,
                 `^------------------`);



testSourceExtent(`class C { static field }`,
                 `                 ^----^ `,
                 `^-----------------------`);
testSourceExtent(`class C { static field; }`,
                 `                 ^----^  `,
                 `^------------------------`);
testSourceExtent(`class C { static field = 1 }`,
                 `                 ^--------^ `,
                 `^---------------------------`);
testSourceExtent(`class C { static [0] = 1 }`,
                 `                 ^------^ `,
                 `^-------------------------`);


testSourceExtent(`class C { static mtd() {} }`,
                 `                    ^----^ `,
                 `^--------------------------`);
testSourceExtent(`class C { static * mtd() {} }`,
                 `                      ^----^ `,
                 `^----------------------------`);
testSourceExtent(`class C { static async mtd() {} }`,
                 `                          ^----^ `,
                 `^--------------------------------`);
testSourceExtent(`class C { static async * mtd() {} }`,
                 `                            ^----^ `,
                 `^----------------------------------`);
testSourceExtent(`class C { static get prop() {} }`,
                 `                         ^----^ `,
                 `^-------------------------------`);
testSourceExtent(`class C { static get [0]() {} }`,
                 `                        ^----^ `,
                 `^------------------------------`);
testSourceExtent(`class C { static set prop(v) {} }`,
                 `                         ^-----^ `,
                 `^--------------------------------`);



testSourceExtent(`class C { #field }`,
                 `          ^-----^ `,
                 `^-----------------`);
testSourceExtent(`class C { #field = 1 }`,
                 `          ^---------^ `,
                 `^---------------------`);
testSourceExtent(`class C { static #field }`,
                 `                 ^-----^ `,
                 `^------------------------`);
testSourceExtent(`class C { static #field = 1 }`,
                 `                 ^---------^ `,
                 `^----------------------------`);



testSourceExtent(` class C { #field() { } }`,
                 `                 ^-----^ `,
                 ` ^-----------------------`);
testSourceExtent(` class C { get #field() { } }`,
                 `                     ^-----^ `,
                 `           ^---------------^ `,
                 ` ^---------------------------`);
testSourceExtent(` class C { set #field(v) { } }`,
                 `                     ^------^ `,
                 `           ^----------------^ `,
                 ` ^----------------------------`);
testSourceExtent(` class C { * #field() { } }`,
                 `                   ^-----^ `,
                 ` ^-------------------------`);
testSourceExtent(` class C { async #field() { } }`,
                 `                       ^-----^ `,
                 ` ^-----------------------------`);
testSourceExtent(` class C { async * #field() { } }`,
                 `                         ^-----^ `,
                 ` ^-------------------------------`);


testSourceExtent(` class C { static #mtd() { } }`,
                 `                      ^-----^ `,
                 ` ^----------------------------`);
testSourceExtent(` class C { static * #mtd() { } }`,
                 `                        ^-----^ `,
                 ` ^------------------------------`);
testSourceExtent(` class C { static async #mtd() { } }`,
                 `                            ^-----^ `,
                 ` ^----------------------------------`);
testSourceExtent(` class C { static async * #mtd() { } }`,
                 `                              ^-----^ `,
                 ` ^------------------------------------`);
testSourceExtent(` class C { static get #prop() { } }`,
                 `                           ^-----^ `,
                 ` ^---------------------------------`);
testSourceExtent(` class C { static set #prop(v) { } }`,
                 `                           ^------^ `,
                 ` ^----------------------------------`);


testSourceExtent(` class C { static { 10; } }`,
                 `           ^-------------^ `,
                 ` ^-------------------------`);