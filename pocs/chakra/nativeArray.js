var xi = [2, 1, 0];
var xd = [2.5, 1.5, 0.5];

print(testFunction, 50);



function testFunction()
{
    print(`Array.isArray(xi): ${Array.isArray(xi)}`, true); 
    print(`xi.length: ${xi.length}`, true); 
    print(`xi[1]: ${xi[1]}`, true); 

    
    xi[1] = 5;
    xi.push(10);
    

    print(`post update -- xi[1]: ${xi[1]}`, true); 
    print(`post update -- xi.length: ${xi.length}`, true); 
    print(`post update -- xi[3]: ${xi[3]}`, true); 
    print(`post update -- xi[5]: ${xi[5]}`, true); 

    print(`Array.isArray(xd): ${Array.isArray(xd)}`, true); 
    print(`xd.length: ${xd.length}`, true); 
    print(`xd[1]: ${xd[1]}`, true); 

    
    xd[1] = 5.0;
    xd.push(10.0);
    xd[10] = 10.0;
    

    print(`post update -- xd[1]: ${xd[1]}`, true); 
    print(`post update -- xd.length: ${xd.length}`, true); 
    print(`post update -- xd[3]: ${xd[3]}`, true); 
    print(`post update -- xd[5]: ${xd[5]}`, true); 
    print(`post update -- xd[10]: ${xd[10]}`, true); 

    emitTTDLog(ttdLogURI);
}