const g = newGlobal({newCompartment: true});
const dbg = new Debugger();
const gw = dbg.addDebuggee(g);

const envs = JSON.parse(gw.executeInGlobal(`
var qualified = 10;
unqualified = 20;
let lexical = 30;
this.prop = 40;

const envs = [];
let env = getInnerMostEnvironmentObject();
while (env) {
  envs.push({
    type: getEnvironmentObjectType(env) || "*global*",
    qualified: !!Object.getOwnPropertyDescriptor(env, "qualified"),
    unqualified: !!Object.getOwnPropertyDescriptor(env, "unqualified"),
    lexical: !!Object.getOwnPropertyDescriptor(env, "lexical"),
    prop: !!Object.getOwnPropertyDescriptor(env, "prop"),
  });

  env = getEnclosingEnvironmentObject(env);
}
JSON.stringify(envs);
`).return);

print(envs.length, 2);

let i = 0, env;

env = envs[i]; i++;
print(env.type, "GlobalLexicalEnvironmentObject");
print(env.qualified, false);
print(env.unqualified, false);
print(env.lexical, true, "lexical must live in the GlobalLexicalEnvironmentObject");
print(env.prop, false);

env = envs[i]; i++;
print(env.type, "*global*");
print(env.qualified, true, "qualified var must live in the global");
print(env.unqualified, true, "unqualified name must live in the global");
print(env.lexical, false);
print(env.prop, true, "this property must live in the global");
