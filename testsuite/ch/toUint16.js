




function write(v) { WScript.Echo(v + ""); }

write(String.fromCharCode(0).charCodeAt(0));
write(String.fromCharCode(-0).charCodeAt(0));

write(String.fromCharCode(4294967295).charCodeAt(0));
write(String.fromCharCode(4294967294).charCodeAt(0));
write(String.fromCharCode(-4294967295).charCodeAt(0));
write(String.fromCharCode(-4294967294).charCodeAt(0));

write(String.fromCharCode(Math.pow(2,31)-2).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,31)-1).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,31)).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,31)+1).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,31)+2).charCodeAt(0));

write(String.fromCharCode(-Math.pow(2,31)-2).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,31)-1).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,31)).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,31)+1).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,31)+2).charCodeAt(0));

write(String.fromCharCode(Math.pow(2,32)-2).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,32)-1).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,32)).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,32)+1).charCodeAt(0));
write(String.fromCharCode(Math.pow(2,32)+2).charCodeAt(0));

write(String.fromCharCode(-Math.pow(2,32)-2).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,32)-1).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,32)).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,32)+1).charCodeAt(0));
write(String.fromCharCode(-Math.pow(2,32)+2).charCodeAt(0));
