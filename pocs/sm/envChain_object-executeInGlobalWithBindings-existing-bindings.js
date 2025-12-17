const g = newGlobal({newCompartment: true});
const dbg = new Debugger();
const gw = dbg.addDebuggee(g);

const bindings = {
  bindings_prop: 50,

  bindings_prop_var: 61,
  bindings_prop_lexical: 71,
  bindings_prop_unqualified: 81,
};

gw.executeInGlobal(`
var bindings_prop_var = 60;
let bindings_prop_lexical = 70;
bindings_prop_unqualified = 80;
`);

const {envs, vars} = JSON.parse(gw.executeInGlobalWithBindings(`
const vars = {
  bindings_prop,
  bindings_prop_var,
  bindings_prop_lexical,
  bindings_prop_unqualified,
};

const envs = [];
let env = getInnerMostEnvironmentObject();
while (env) {
  envs.push({
    type: getEnvironmentObjectType(env) || "*global*",
    bindings_prop: !!Object.getOwnPropertyDescriptor(env, "bindings_prop"),

    bindings_prop_var: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_var"),
    bindings_prop_var_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_var")?.value,
    bindings_prop_lexical: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical"),
    bindings_prop_lexical_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical")?.value,
    bindings_prop_unqualified: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_unqualified"),
    bindings_prop_unqualified_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_unqualified")?.value,
  });

  env = getEnclosingEnvironmentObject(env);
}
JSON.stringify({envs, vars});
`, bindings).return);

print(vars.bindings_prop, 50,
         "qualified var should read the value set by the declaration");
print(vars.bindings_prop_var, 60,
         "qualified var should read the value set by the declaration");
print(vars.bindings_prop_lexical, 70,
         "lexical should read the value set by the declaration");
print(vars.bindings_prop_unqualified, 80,
         "unqualified name should read the value set by the assignment");

print(bindings.bindings_prop_var, 61,
         "the original bindings property must not be overwritten for var");
print(bindings.bindings_prop_lexical, 71,
         "the original bindings property must not be overwritten for lexical");
print(bindings.bindings_prop_unqualified, 81,
         "the original bindings property must not be overwritten for unqualified");

print(envs.length, 3);

let i = 0, env;

env = envs[i]; i++;
print(env.type, "WithEnvironmentObject");
print(env.bindings_prop, true, "bindings property must live in the with env for bindings");

print(env.bindings_prop_var, false,
         "bindings property must not live in the with env for bindings if it conflicts with existing global");
print(env.bindings_prop_lexical, false,
         "bindings property must not live in the with env for bindings if it conflicts with existing global");
print(env.bindings_prop_unqualified, false,
         "bindings property must not live in the with env for bindings if it conflicts with existing global");
print(env.bindings_prop_unqualified, false,
         "bindings property must not live in the with env for bindings if it conflicts with existing global");

env = envs[i]; i++;
print(env.type, "GlobalLexicalEnvironmentObject");
print(env.bindings_prop, false);

print(env.bindings_prop_var, false);
print(env.bindings_prop_lexical, true);
print(env.bindings_prop_lexical_value, 70);
print(env.bindings_prop_unqualified, false);

env = envs[i]; i++;
print(env.type, "*global*");
print(env.bindings_prop, false);

print(env.bindings_prop_var, true);
print(env.bindings_prop_var_value, 60);
print(env.bindings_prop_lexical, false);
print(env.bindings_prop_unqualified, true);
print(env.bindings_prop_unqualified_value, 80);
