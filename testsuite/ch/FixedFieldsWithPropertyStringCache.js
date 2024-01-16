







var o = {};
o.inspect = function () { WScript.Echo("original"); };


function useMethod(obj) {
    obj.inspect();
}
useMethod(o);
useMethod(o);


function test(obj, overwrite) {
    for (var prop in obj) {
        if (overwrite)
            obj[prop] = function () { WScript.Echo("new"); }
    }
}
test(o,false);
test(o,true);


useMethod(o);
