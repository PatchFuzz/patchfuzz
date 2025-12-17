var test = new Promise(function(){});
test.constructor = function(){};
Promise.resolve(test).catch(e => %AbortJS(e + " FAILED!"));
