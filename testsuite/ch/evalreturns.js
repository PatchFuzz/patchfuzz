




function write(v) { WScript.Echo(v + ""); }


write(eval('for (var i = 0; i < 1; i++) { i; var q = "wrong"; }') + '');

write(eval('for (i = 0; i < 0; i++) { i; var q = "wrong"; }') + '');

write(eval('for (i = 0; i < 1; i++) { var q = "wrong"; }') + '');


write(eval('if (i = 0) { i; }') + '');

write(eval('if (i = 1) { i; }') + '');

write(eval('if (i = 0) { ++i; } else { i; var q = "wrong"; }') + '');

write(eval('if (i = 1) { ++i; } else { i; var q = "wrong"; }') + '');


write(eval('try { "hello"; throw 0; } catch(e) {}') + '');

write(eval('try { "hello"; throw 0; } catch(e) {++e;}') + '');

write(eval('try { throw 0; } catch(e) { var q = "wrong"; }') + '');

write(eval('try { throw 0; } catch(e) { ++e; var q = "wrong"; }') + '');


write(eval('try { "hello"; } finally {}') + '');

write(eval('try { "hello"; } finally {"goodbye";}') + '');

write(eval('try {} finally { var q = "wrong"; }') + '');

write(eval('try {} finally { "good night"; var q = "wrong"; }') + '');


write(eval("(function () { });")); 
write(eval("1; (function () { });")); 
write(eval("(function () { }); 2;"));
write(eval("1; (function () { }); 2;"));
write(eval("function x() { };"));
write(eval("1; function x() { };"));
write(eval("function x() { }; 2;"));
write(eval("1; function x() { }; 2;"));


write(eval("switch(1) { case 2: 3; break; case 1: 2; break; default: 7; break }"));


function ret_false(){return false;}
function ret_true(){return true;}
write(eval("ret_true(),ret_false();"));

try {
    
    write(eval("++({ f: function() { } }.f());"));
}
catch(e) {
    write(e.message);
}

write(eval.call());
write(eval.call('test'));
write(eval.call('test1', '"test2"'));