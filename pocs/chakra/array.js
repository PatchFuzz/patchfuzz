var x = [3, null, {}];
var y = x;
y.baz = 5;

var q = [1, 2];
q.length = 5;

var qq = [1, 2, 3, 4, 5];
qq.pop();
qq.pop();

var qqq = [1, 2, 3, 4, 5];
delete qqq[3];

var o = new Object();
o.length = 10;

var o1 = new Object();
var a = [1000,2000,3000];

a.x = 40;
a[o] = 50;

print(testFunction, 50);



function testFunction()
{
    print(`Array.isArray(x): ${Array.isArray(x)}`, true);  
    print(`x.length: ${x.length}`, true); 

    print(`x === y: ${x === y}`, true); 
    print(`x.baz: ${x.baz}`, true); 
    print(`x[0]: ${x[0]}`, true); 
    print(`y[1]: ${y[1]}`, true); 
    print(`x[5]: ${x[5]}`, true); 

    
    x[1] = "non-null";
    x[5] = { bar: 3 };
    x.push(10);
    

    print(`post update -- y[1]: ${y[1]}`, true); 
    print(`post update -- x[5] !== null: ${x[5] !== null}`, true); 
    print(`post update -- x[5].bar: ${x[5].bar}`, true); 
    print(`post update -- y[6]: ${y[6]}`, true); 

    print(`q.length: ${q.length}`, true); 
    print(`q[3]: ${q[3]}`, true); 

    print(`qq.length: ${qq.length}`, true); 
    print(`qq[3]: ${qq[3]}`, true); 

    print(`qqq.length: ${qqq.length}`, true); 
    print(`qqq[3]: ${qq[undefined]}`, true); 

    print(`a[o]: ${a[o]}`, true); 
    print(`a[o1]: ${a[o1]}`, true); 
    print(`a["[object Object]"]: ${a["[object Object]"]}`, true); 
    print(`a["[object" + " Object]"]: ${a["[object" + " Object]"]}`, true); 

    emitTTDLog(ttdLogURI);
}