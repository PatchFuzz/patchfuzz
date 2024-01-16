

















var handlerBoolean = {
  ownKeys: function() { return true; },
}
var boolProxy = new Proxy({}, handlerBoolean);

try {
  for (var a in boolProxy) {
    
    assert (false);
  }

  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}


var handlerSymbol = {
  ownKeys: function() { return Symbol("alma"); },
}
var symbolProxy = new Proxy({}, handlerSymbol);

try {
  for (var a in symbolProxy) {
    
    assert (false);
  }

  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}


var handlerNumber = {
  ownKeys: function() { return 1; },
}
var numberProxy = new Proxy({}, handlerNumber);

try {
  for (var a in numberProxy) {
    
    assert (false);
  }

  assert (false);
} catch (ex) {
  assert (ex instanceof TypeError);
}


var handlerObject = {
  ownKeys: function() { return {}; },
}
var objectProxy = new Proxy({}, handlerObject);

for (var a in objectProxy) {
  
  assert (false);
}
