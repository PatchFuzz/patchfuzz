





var o = {};
var i;
for(i = 0; i < 65530; ++i)
    o["p" + i] = 0;
var add;
for(; i < 65540; ++i) {
    add = true;
    for(var p in o) {
        if(add) {
            add = false;
            WScript.Echo(i);
            o["p" + i] = 0;
        }
    }
}
