;

async function parseAndEvaluate(source) {
    let stencil = compileToStencilXDR(source, {module: true});
    let m = instantiateModuleStencilXDR(stencil);
    moduleLink(m);
    await moduleEvaluate(m);
    return m;
}

(async () => {
  
  await parseAndEvaluate("");
})();

(async () => {
  
  
  let stencil = compileToStencilXDR("1", {module: true});
  let m = instantiateModuleStencilXDR(stencil);
  moduleLink(m);
  print(typeof moduleEvaluate(m), "object");
  print(moduleEvaluate(m) instanceof Promise, true);
  print(moduleEvaluate(m), moduleEvaluate(m));
})();

(async () => {
  
  let stencil = compileToStencilXDR("export var x = 2 + 2;", {module: true});
  let m = instantiateModuleStencilXDR(stencil);
  print(typeof getModuleEnvironmentValue(m, "x"), "undefined");
  moduleLink(m);
  await moduleEvaluate(m);
  print(getModuleEnvironmentValue(m, "x"), 4);
})();

(async () => {
  let m = await parseAndEvaluate("export let x = 2 * 3;");
  print(getModuleEnvironmentValue(m, "x"), 6);

  
  let stencil = compileToStencilXDR(
    `var x = 1;
     export { x };
     export default 2;
     export function f(x) { return x + 1; }`,
  {module: true});
  let mod = instantiateModuleStencilXDR(stencil);
  let a = registerModule('a', mod);

  
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

  
  m = await parseAndEvaluate("import a from 'a'; export { a };")
  print(getModuleEnvironmentValue(m, "a"), 2);

  
  m = await parseAndEvaluate("import { x as y } from 'a'; export { y };")
  print(getModuleEnvironmentValue(m, "y"), 1);

  
  m = await parseAndEvaluate("import { f } from 'a'; export let x = f(3);")
  print(getModuleEnvironmentValue(m, "x"), 4);

  
  m = await parseAndEvaluate("import { x } from 'a'; function f() { return x; }")
  let f = getModuleEnvironmentValue(m, "f");
  print(f(), 1);
})();
drainJobQueue();
