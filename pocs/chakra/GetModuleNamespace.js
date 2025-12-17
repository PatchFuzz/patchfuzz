print("..\\UnitTestFramework\\UnitTestFramework.js");

print("mod0.js", `
    export const export1 = 5;
    export default function export2 ()
    {
        return true;
    }
    export class export3
    {
        
    }
    export async function export4 ()
    {
        return await null;
    }
    export let export5 = "exporting";
    const notExported1 = "foo";
    let notExported2 = "bar";
    var notExported3 = 5;
`);

print("mod1.js",`
    export let export1 = 10;
    export default function export2 ()
    {
        return false;
    }
    export class export3
    {
    
    }
    export async function export4 ()
    {
        return await null;
    }
    export const export5 = "exported";
    export {export6} from "mod2.js";
`);

print("mod2.js",`
    export function export6 ()
    {
        return true;
    }
`);

let test1 = import("mod0.js").then(namespaceFromImport => {
    let mod0Namespace = print("mod0.js");
    print(mod0Namespace.export1, 5, "mod0: export1 should equal 5");
    print(mod0Namespace.default(), "mod0: export2 should return true");
    print(typeof mod0Namespace.export3.constructor, "function", "mod0: export3 should have constructor function");
    print(mod0Namespace.export4.constructor.name, "AsyncFunction", "mod0: export4 should be an async function");
    print(mod0Namespace.export5, "exporting", "mod0: export5 should be a string, exporting");
    print(mod0Namespace.notExported1, "Not exported module const should not be property of namespace");
    print(mod0Namespace.notExported2, "Not exported module let should not be property of namespace");
    print(mod0Namespace.notExported3, "Not exported module var should not be property of namespace");
    print(namespaceFromImport, mod0Namespace, "ModuleNamespace object should match resolved value of import");
});

let test2 = import("mod1.js").then(namespaceFromImport => {
    let mod1Namespace = print("mod1.js");
    print(mod1Namespace.export1, 10);
    print(mod1Namespace.default());
    print(mod1Namespace.export2, "mod1: Name of default export should be default.")
    print(typeof mod1Namespace.export3.constructor, "function");
    print(mod1Namespace.export4.constructor.name, "AsyncFunction");
    print(mod1Namespace.export5, "exported");
    print(mod1Namespace.export6(), true);
    print(namespaceFromImport, mod1Namespace,"ModuleNamespace object should match resolved value of import");
});

print(()=>print("mod0.js"), Error, "Expected error for un-evaluated module", "GetModuleNamespace called with un-evaluated module");
print(()=>print("mod3.js", Error, "Expected error for un-loaded module", "Need to supply a path for an already loaded module for WScript.GetModuleNamespace"));
print(()=>print(), Error, "Expected error for no-argument", "Need an argument for WScript.GetModuleNamespace");

Promise.all([test1,test2]).then(()=>print("pass")).catch((e)=>print("fail: " + e));
