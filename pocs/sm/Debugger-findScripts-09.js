;

var dbg = new Debugger();
var g = newGlobal();
print(dbg.findScripts().length, 0);
print(dbg.findScripts({}).length, 0);

print(dbg.findScripts({global:g}).length, 0);
print(function () { dbg.findScripts({global:null}); }, TypeError);
print(function () { dbg.findScripts({global:true}); }, TypeError);
print(function () { dbg.findScripts({global:4}); }, TypeError);
print(function () { dbg.findScripts({global:"I must have fruit!"}); }, TypeError);

print(dbg.findScripts({url:""}).length, 0);
print(function () { dbg.findScripts({url:null}); }, TypeError);
print(function () { dbg.findScripts({url:true}); }, TypeError);
print(function () { dbg.findScripts({url:4}); }, TypeError);
print(function () { dbg.findScripts({url:{}}); }, TypeError);

print(dbg.findScripts({url:"", line:1}).length, 0);
print(dbg.findScripts({url:"", line:numberToDouble(2)}).length, 0);


print(function () { dbg.findScripts({line:1}); }, TypeError);

print(function () { dbg.findScripts({url:"",line:null}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:{}}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:true}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:""}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:0}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:-1}); }, TypeError);
print(function () { dbg.findScripts({url:"",line:1.5}); }, TypeError);


print(dbg.findScripts({url:"", line:1, innermost:true}).length, 0);
print(dbg.findScripts({url:"", line:1, innermost:1}).length, 0);
print(dbg.findScripts({url:"", line:1, innermost:"yes"}).length, 0);
print(dbg.findScripts({url:"", line:1, innermost:{}}).length, 0);
print(dbg.findScripts({url:"", line:1, innermost:[]}).length, 0);


print(function () { dbg.findScripts({innermost:true}); }, TypeError);
print(function () { dbg.findScripts({innermost:true, line:1}); }, TypeError);
print(function () { dbg.findScripts({innermost:true, url:"foo"}); }, TypeError);
