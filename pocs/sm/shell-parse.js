function testEvalError(source) {
    
    var caught = false;
    try {
        eval(source);
    } catch (e) {
        caught = true;
    }
    print(caught, true);
}

function testModuleSource(source) {
    
    testEvalError(source);
    parseModule(source);
}

parseModule("");
parseModule("const foo = 1;");
parseModule("var foo = 1;");
parseModule("let foo = 1; var bar = 2; const baz = 3");

testModuleSource("import * as ns from 'bar';");
testModuleSource("export { a } from 'b';");
testModuleSource("export * from 'b';");
testModuleSource("export const foo = 1;");
testModuleSource("export default function() {};");
testModuleSource("export default 1;");
