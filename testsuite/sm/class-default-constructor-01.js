

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);





gDO.executeInGlobal(`   
  class X {};           
                        
                        
  class Y extends X {}; 
`, { lineNumber: 1729 });

function check(name, text, startLine) {
  print(`checking ${name}`);
  var desc = gDO.executeInGlobal(name).return;
  assertEq(desc.class, 'Function');
  assertEq(desc.name, name);
  var script = desc.script;
  assertEq(script instanceof Debugger.Script, true,
           "default constructor's script should be available");
  assertEq(script.startLine, startLine,
           "default constructor's starting line should be set");
  var source = script.source;
  assertEq(source.text.substr(script.sourceStart, script.sourceLength), text);
}

check('X', 'class X {}', 1730);
check('Y', 'class Y extends X {}', 1733);
