Object.prototype[5]  = "obj.proto5";
Object.prototype[7]  = "obj.proto7";

Array.prototype[1]   = "arr.proto.1";
Array.prototype[2]   = "arr.proto.2";
Array.prototype[3]   = "arr.proto.3";
Array.prototype[6]   = "arr.proto.6";

var n=8;
var i=0;

var arr = new Array(n);

for (i=3;i<n;i++) { arr[i] = i * i + 1; }

delete arr[1];
delete arr[3];

print(testFunction, 50);



function testFunction()
{
    print(`${delete arr[n-1]}`, true); 
    print(`T3:${arr.length} : ${arr}`, true);
    
    print(`${delete arr[n+1]}`, true); 
    print(`T4:${arr.length} : ${arr}`, true);

    emitTTDLog(ttdLogURI);
}
