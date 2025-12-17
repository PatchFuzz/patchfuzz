var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

let log = "";
let pw;
dbg.onPromiseSettled = pw_ => {
  pw = pw_;
  log += "s";
};

let p = new g.Promise(function (){});
g.settlePromiseNow(p);

print(log, "s");
print(pw, gw.makeDebuggeeValue(p));
