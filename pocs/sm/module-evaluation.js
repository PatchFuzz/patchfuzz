;

async function parseAndEvaluate(source) {
    let m = parseModule(source);
    moduleLink(m);
    await moduleEvaluate(m);
    return m;
}


(async () => {
  await parseAndEvaluate("");
})();

(async () => {
  
  
  let m = parseModule("1");
  moduleLink(m);
  print(typeof moduleEvaluate(m), "object");
  print(moduleEvaluate(m) instanceof Promise, true);
  print(moduleEvaluate(m), moduleEvaluate(m));
  await moduleEvaluate(m);
})();

(async () => {
  
  let m = parseModule("export var x = 2 + 2;");
  print(typeof getModuleEnvironmentValue(m, "x"), "undefined");
  moduleLink(m);
  await moduleEvaluate(m);
  print(getModuleEnvironmentValue(m, "x"), 4);
})();

(async () => {
  let m = parseModule("export let x = 2 * 3;");
  moduleLink(m);
  await moduleEvaluate(m);
  print(getModuleEnvironmentValue(m, "x"), 6);
})();


let a = registerModule('a',
    parseModule(`var x = 1;
                 export { x };
                 export default 2;
                 export function f(x) { return x + 1; }`));

(async () => {
  
  await parseAndEvaluate("var foo = 1;");
  await parseAndEvaluate("let foo = 1;");
  await parseAndEvaluate("const foo = 1");
  await parseAndEvaluate("function foo() {}");
  await parseAndEvaluate("class foo { constructor() {} }");

  
  await parseAndEvaluate("export var foo = 1;");
  await parseAndEvaluate("export let foo = 1;");
  await parseAndEvaluate("export const foo = 1;");
  await parseAndEvaluate("var x = 1; export { x };");
  await parseAndEvaluate("export default 1");
  await parseAndEvaluate("export default function() {};");
  await parseAndEvaluate("export default function foo() {};");
  await parseAndEvaluate("import a from 'a';");
  await parseAndEvaluate("import { x } from 'a';");
  await parseAndEvaluate("import * as ns from 'a';");
  await parseAndEvaluate("export * from 'a'");
  await parseAndEvaluate("export default class { constructor() {} };");
  await parseAndEvaluate("export default class foo { constructor() {} };");
})();

(async () => {
  
  let m = parseModule("import a from 'a'; export { a };")
  moduleLink(m);
  await moduleEvaluate(m)
  print(getModuleEnvironmentValue(m, "a"), 2);
})();

(async () => {
  
  let m = parseModule("import { x as y } from 'a'; export { y };")
  moduleLink(m);
  await moduleEvaluate(m);
  print(getModuleEnvironmentValue(m, "y"), 1);
})();

(async () => {
  
  let m = parseModule("import { f } from 'a'; export let x = f(3);")
  moduleLink(m);
  await moduleEvaluate(m);
  print(getModuleEnvironmentValue(m, "x"), 4);
})();

(async () => {
  
  registerModule('b', parseModule("export { x as z } from 'a';"));
  let m = await parseAndEvaluate("import { z } from 'b'; export { z }");
  print(getModuleEnvironmentValue(m, "z"), 1);
})();

(async () => {
  
  registerModule('c1', parseModule("export var x = 1; export {y} from 'c2'"));
  registerModule('c2', parseModule("export var y = 2; export {x} from 'c1'"));
  let m = await parseAndEvaluate(`import { x as x1, y as y1 } from 'c1';
                        import { x as x2, y as y2 } from 'c2';
                        export let z = [x1, y1, x2, y2]`);
  print(getModuleEnvironmentValue(m, "z"), [1, 2, 1, 2]);
})();

(async () => {
  
  let m = await parseModule("import { x } from 'a'; function f() { return x; }")
  moduleLink(m);
  moduleEvaluate(m);
  let f = getModuleEnvironmentValue(m, "f");
  print(f(), 1);
})();
drainJobQueue();
