const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

dbg.onEnterFrame = frame => {
  if (frame.script.displayName !== "target") {
    return;
  }
  dbg.onEnterFrame = () => {};

  const envs = JSON.parse(frame.eval(`
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

  print(envs.length, 3);

  let i = 0, env;

  

  env = envs[i]; i++;
  print(env.type, "[DebugProxy] CallObject");
  print(env.qualified, true, "qualified var must live in the CallObject");
  print(env.unqualified, false);
  print(env.lexical, false);
  print(env.prop, false);

  env = envs[i]; i++;
  print(env.type, "[DebugProxy] GlobalLexicalEnvironmentObject");
  print(env.qualified, false);
  print(env.unqualified, false);
  print(env.lexical, false);
  print(env.prop, false);

  env = envs[i]; i++;
  print(env.type, "*global*");
  print(env.qualified, false);
  print(env.unqualified, true, "unqualified name must live in the global");
  print(env.lexical, false);
  print(env.prop, true, "this property must live in the global");
};

g.eval(`
function target() {
}
target();
`);
