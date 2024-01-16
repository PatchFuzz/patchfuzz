


























var msg = '{"result":{"profile":{"head":{"functionName":"(root)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":0,"numberOfCalls":0,"visible":true,"callUID":2771605942,"children":[{"functionName":"(program)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":495.7243772462511,"numberOfCalls":0,"visible":true,"callUID":1902715303,"children":[]}]},"bottomUpHead":{"functionName":"(root)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":0,"numberOfCalls":0,"visible":true,"callUID":2771605942,"children":[{"functionName":"(program)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":495.7243772462511,"numberOfCalls":0,"visible":true,"callUID":1902715303,"children":[]}]}}},"id":41}';

var obj = JSON.parse(msg);
var obj2 = JSON.parse(msg);

assertEquals(JSON.stringify(obj), JSON.stringify(obj2));
assertEquals(JSON.stringify(obj, null, 0), JSON.stringify(obj2));
