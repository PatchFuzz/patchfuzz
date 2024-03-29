





function write(v) { WScript.Echo(v + ""); }

function allChars(s, len) {
    write("AllChars : " + s + ". Length : " + len);
    for (var i=0; i<len; ++i) {
        write(s.charAt(i));
    }
}

function firstChar(obj, showOutput) {
    if (showOutput != false)
        write(">> FirstChar : " + obj);
        
    try {
        write(String.prototype.charAt.call(obj, 0));
    } catch (e) {
        write("Got a exception. " + e.message);
        return;
    }
    
    if (showOutput != false)
        write("<< FirstChar.");
}

allChars("Hello", 5);
allChars("Hello" + "World", 10);

var objs = [  undefined, 0, 1.1, new Number(10), new String("Hello"), 
             true, false, new Boolean(true), new Object() ];
 
firstChar(null, false);

for (var i=0; i<objs.length; ++i) {
    firstChar(objs[i]);
}
