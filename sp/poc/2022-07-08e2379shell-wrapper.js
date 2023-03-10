


;

function testGetter(obj, name) {
  
  
  
  const desc = Object.getOwnPropertyDescriptor(obj, name);
  print(typeof desc.get, "function");
  print(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), name),
           undefined);

  
  assertThrowsInstanceOf(() => {
    desc.get.call({});
  }, Error);
}


const a = registerModule('a', parseModule(`
export const v = 10;
`));
const b = registerModule('b', parseModule(`
import * as ns from 'a'
`));
moduleLink(b);
moduleEvaluate(b);
print(a.namespace.v, 10);
testGetter(a, "namespace");


const MODULE_STATUS_UNLINKED = 0;
const MODULE_STATUS_LINKED = 2;
const MODULE_STATUS_EVALUATED = 5;

const c = registerModule('c', parseModule(`
`));
print(c.status, MODULE_STATUS_UNLINKED);
moduleLink(c);
print(c.status, MODULE_STATUS_LINKED);
moduleEvaluate(c);
print(c.status, MODULE_STATUS_EVALUATED);
testGetter(c, "status");


const d = registerModule('d', parseModule(`
f();
`));
moduleLink(d);
try {
  await moduleEvaluate(d);
} catch (e) {
}
print(d.evaluationError instanceof ReferenceError, true);
testGetter(d, "evaluationError");


const e = parseModule(`
import a from 'b';
`);
print(e.requestedModules.length, 1);
print(e.requestedModules[0].moduleRequest.specifier, 'b');
print(e.requestedModules[0].lineNumber, 2);
print(e.requestedModules[0].columnNumber, 14);
testGetter(e, "requestedModules");
testGetter(e.requestedModules[0], "moduleRequest");
testGetter(e.requestedModules[0].moduleRequest, "specifier");
testGetter(e.requestedModules[0], "lineNumber");
testGetter(e.requestedModules[0], "columnNumber");


const f = parseModule(`
import {a as A} from 'b';
`);
print(f.importEntries.length, 1);
print(f.importEntries[0].moduleRequest.specifier, 'b');
print(f.importEntries[0].importName, 'a');
print(f.importEntries[0].localName, 'A');
print(f.importEntries[0].lineNumber, 2);
print(f.importEntries[0].columnNumber, 8);
testGetter(f, "importEntries");
testGetter(f.importEntries[0], "moduleRequest");
testGetter(f.importEntries[0].moduleRequest, "specifier");
testGetter(f.importEntries[0], "importName");
testGetter(f.importEntries[0], "localName");
testGetter(f.importEntries[0], "lineNumber");
testGetter(f.importEntries[0], "columnNumber");


const g = parseModule(`
export const v = 1;
`);
print(g.localExportEntries.length, 1);
print(g.localExportEntries[0].exportName, 'v');
print(g.localExportEntries[0].moduleRequest, null);
print(g.localExportEntries[0].importName, null);
print(g.localExportEntries[0].localName, 'v');
print(g.localExportEntries[0].lineNumber, 0);
print(g.localExportEntries[0].columnNumber, 0);
testGetter(g, "localExportEntries");
testGetter(g.localExportEntries[0], "exportName");
testGetter(g.localExportEntries[0], "moduleRequest");
testGetter(g.localExportEntries[0], "importName");
testGetter(g.localExportEntries[0], "localName");
testGetter(g.localExportEntries[0], "lineNumber");
testGetter(g.localExportEntries[0], "columnNumber");


const h = parseModule(`
export {v} from "b";
`);
print(h.indirectExportEntries.length, 1);
print(h.indirectExportEntries[0].exportName, 'v');
print(h.indirectExportEntries[0].moduleRequest.specifier, "b");
print(h.indirectExportEntries[0].importName, "v");
print(h.indirectExportEntries[0].localName, null);
print(h.indirectExportEntries[0].lineNumber, 2);
print(h.indirectExportEntries[0].columnNumber, 8);


const i = parseModule(`
export * from "b";
`);
print(i.starExportEntries.length, 1);
print(i.starExportEntries[0].exportName, null);
print(i.starExportEntries[0].moduleRequest.specifier, "b");
print(i.starExportEntries[0].importName, null);
print(i.starExportEntries[0].localName, null);
print(i.starExportEntries[0].lineNumber, 2);
print(i.starExportEntries[0].columnNumber, 7);


const j = registerModule('j', parseModule(`
export const v1 = 10;
import {v2} from 'k'
`));
const k = registerModule('k', parseModule(`
export const v2 = 10;
import {v1} from 'j'
`));
const l = registerModule('l', parseModule(`
export const v3 = 10;
import {v2} from 'k'
import {v1} from 'j'
`));
print(j.dfsIndex, undefined);
print(j.dfsAncestorIndex, undefined);
print(k.dfsIndex, undefined);
print(k.dfsAncestorIndex, undefined);
print(l.dfsIndex, undefined);
print(l.dfsAncestorIndex, undefined);
moduleLink(l);
print(j.dfsIndex, 2);
print(j.dfsAncestorIndex, 1);
print(k.dfsIndex, 1);
print(k.dfsAncestorIndex, 1);
print(l.dfsIndex, 0);
print(l.dfsAncestorIndex, 0);


const m = parseModule(`
`);
print(m.hasTopLevelAwait, false);
print(m.topLevelCapability, undefined);
print(m.asyncEvaluatingPostOrder, undefined);
print(m.asyncParentModules[0], undefined);
print(m.pendingAsyncDependencies, undefined);
testGetter(m, "hasTopLevelAwait");
testGetter(m, "topLevelCapability");
testGetter(m, "asyncEvaluatingPostOrder");
testGetter(m, "asyncParentModules");
testGetter(m, "pendingAsyncDependencies");
