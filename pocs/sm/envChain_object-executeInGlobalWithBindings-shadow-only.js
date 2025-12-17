const g = newGlobal({newCompartment: true});
const dbg = new Debugger();
const gw = dbg.addDebuggee(g);

const bindings = {
  bindings_prop_var: 61,
  bindings_prop_lexical: 71,
  bindings_prop_lexical2: 71,
};

const {envs, vars} = JSON.parse(gw.executeInGlobalWithBindings(`
var bindings_prop_var = 60;
let bindings_prop_lexical = 70;
let bindings_prop_lexical2;
bindings_prop_lexical2 = 70;

const vars = {
  bindings_prop_var,
  bindings_prop_lexical,
  bindings_prop_lexical2,
};

const envs = [];
let env = getInnerMostEnvironmentObject();
while (env) {
  envs.push({
    type: getEnvironmentObjectType(env) || "*global*",

    bindings_prop_var: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_var"),
    bindings_prop_var_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_var")?.value,
    bindings_prop_lexical: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical"),
    bindings_prop_lexical_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical")?.value,
    bindings_prop_lexical2: !!Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical2"),
    bindings_prop_lexical2_value: Object.getOwnPropertyDescriptor(env, "bindings_prop_lexical2")?.value,
  });

  env = getEnclosingEnvironmentObject(env);
}
JSON.stringify({envs, vars});
`, bindings).return);

print(vars.bindings_prop_var, 60,
         "qualified var should read the value set by the declaration");
print(vars.bindings_prop_lexical, 70,
         "lexical should read the value set by the declaration");
print(vars.bindings_prop_lexical2, 70,
         "lexical should read the value set by the assignment");

print(bindings.bindings_prop_var, 61,
         "the original bindings property must not be overwritten for var");
print(bindings.bindings_prop_lexical, 71,
         "the original bindings property must not be overwritten for lexical");
print(bindings.bindings_prop_lexical2, 71,
         "the original bindings property must not be overwritten for lexical");

print(envs.length, 2,
         "WithEnvironmentObject shouldn't be created if all bindings are " +
         "shadowed");

let i = 0, env;

env = envs[i]; i++;
print(env.type, "GlobalLexicalEnvironmentObject");
print(env.bindings_prop_var, false);
print(env.bindings_prop_lexical, true,
         "lexical must live in the GlobalLexicalEnvironmentObject even if it conflicts with the bindings object property");
print(env.bindings_prop_lexical_value, 70);
print(env.bindings_prop_lexical2, true,
         "lexical must live in the GlobalLexicalEnvironmentObject even if it conflicts with the bindings object property");
print(env.bindings_prop_lexical2_value, 70,
         "lexical value must be set by the assignment even if it conflicts with the bindings object property");

env = envs[i]; i++;
print(env.type, "*global*");

print(env.bindings_prop_var, true,
         "qualified var binding must be created in the global even if it conflicts with the bindings object property");
print(env.bindings_prop_var_value, 60,
         "qualified var value must be set even if it conflicts with the bindings object property");
print(env.bindings_prop_lexical, false);
print(env.bindings_prop_lexical2, false);
