var bx = new ArrayBuffer(16);
var by = bx;

var bz = new ArrayBuffer(16);

var viewx = new Int32Array(bx);
var viewy = new Int8Array(by, 4, 12);

var viewz = new Float32Array(bz);

for(var i = 0; i < viewx.length; ++i) 
{
    viewx[i] = i + 1;
}

for(var i = 0; i < viewz.length; ++i) 
{
    viewz[i] = i / 2.0;
}

print(testFunction, 50);



function testFunction()
{
    print(`viewx.length: ${viewx.length}`, true); 
    print(`viewy.length: ${viewy.length}`, true); 
    print(`bx === by: ${bx === by}`, true); 
    print(`viewx.buffer === viewy.buffer: ${viewx.buffer === viewy.buffer}`, true); 

    var allokx = true;
    for(var i = 0; i < viewx.length; ++i) 
    {
        allokx = allokx && (viewx[i] === i + 1);
    }
    print(`allokx: ${allokx}`, true); 

    print(`viewz.length: ${viewz.length}`, true); 

    var allokz = true;
    for(var i = 0; i < viewz.length; ++i) 
    {
        allokz = allokz && (viewz[i] === i / 2.0);
    }
    print(`allokz: ${allokz}`, true); 

    
    viewx[1] = 0;
    

    print(`viewy[0]: ${viewy[0]}`, true); 
    print(`viewy[1]: ${viewy[1]}`, true); 
    print(`viewy[2]: ${viewy[2]}`, true); 
    print(`viewy[3]: ${viewy[3]}`, true); 

    
    viewz[0] = 0.5;
    

    print(`viewz[0]: ${viewz[0]}`, true); 

    emitTTDLog(ttdLogURI);
}