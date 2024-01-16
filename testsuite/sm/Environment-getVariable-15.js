








var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function (frame) {
  var g_call_env = frame.older.environment;     
  var g_decl_env = g_call_env.parent;           
  var f_call_env = g_decl_env.parent;           
  var f_decl_env = f_call_env.parent;           
  assertEq(f_decl_env.getVariable('f').optimizedOut, true);
}

g.evaluate(`

           function h() { debugger; }
           (function f() {
             return function g() {
               h();
               return 1;
             }
           })()();

           `);
