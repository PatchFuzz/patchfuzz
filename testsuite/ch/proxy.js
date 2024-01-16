




var handler1 = {
    get: function(target, key)
    {
        return key in target ? target[key] : 'Not Found';
    }
};

var handler2 = {
    get: function(target, key)
    {
        return "[[" + key + "]]";;
    }
};

var p = new Proxy({}, handler1);
p.a = 1;

var revocable = Proxy.revocable({}, handler2);
var proxy = revocable.proxy;

var revocableDone = Proxy.revocable({}, handler2);
var proxyDone = revocableDone.proxy;

revocableDone.revoke();

WScript.SetTimeout(testFunction, 50);



function testFunction()
{
    var threw = false;
        
    telemetryLog(`p.a: ${p.a}`, true); 
    telemetryLog(`p.b: ${p.b}`, true); 

    try
    {
        proxyDone.foo;
    }
    catch(e)
    {
        threw = true;
    }
    telemetryLog(`proxyDone.foo: ${threw}`, true); 

    telemetryLog(`proxy.foo: ${proxy.foo}`, true); 

    revocable.revoke();
    try
    {
        proxy.foo;
    }
    catch(e)
    {
        threw = true;
    }
    telemetryLog(`proxy.foo (after revoke): ${threw}`, true); 

    emitTTDLog(ttdLogURI);
}