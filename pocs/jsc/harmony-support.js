"use strict";

function classOf(object) {
   
   var string = Object.prototype.toString.call(object);
   
   return string.substring(8, string.length - 1);
}


function deepObjectEquals(a, b) {
  var aProps = Object.keys(a);
  aProps.sort();
  var bProps = Object.keys(b);
  bProps.sort();
  if (!deepEquals(aProps, bProps)) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    if (!deepEquals(a[aProps[i]], b[aProps[i]])) {
      return false;
    }
  }
  return true;
}


function deepEquals(a, b) {
  if (a === b) {
    
    if (a === 0) return (1 / a) === (1 / b);
    return true;
  }
  if (typeof a != typeof b) return false;
  if (typeof a == 'number') return isNaN(a) && isNaN(b);
  if (typeof a !== 'object' && typeof a !== 'function') return false;
  
  var objectClass = classOf(a);
  if (objectClass !== classOf(b)) return false;
  if (objectClass === 'RegExp') {
    
    return (a.toString() === b.toString());
  }
  
  if (objectClass === 'Function') return false;
  if (objectClass === 'Array') {
    var elementCount = 0;
    if (a.length != b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }
  if (objectClass == 'String' || objectClass == 'Number' ||
      objectClass == 'Boolean' || objectClass == 'Date') {
    if (a.valueOf() !== b.valueOf()) return false;
  }
  return deepObjectEquals(a, b);
}


function fail(expected, found, user_message = '') {
  
  var message = 'Failure' + (user_message ? ' (' + user_message + ')' : '') +
      ': expected <' + String(expected) + '>, found <' + String(found) + '>.';
  throw new Error(message);
}


function print(obj, type) {
  if (!(obj instanceof type)) {
    var actualTypeName = null;
    var actualConstructor = Object.getPrototypeOf(obj).constructor;
    if (typeof actualConstructor == "function") {
      actualTypeName = actualConstructor.name || String(actualConstructor);
    }
    throw new Error('Object <' + obj + '> is not an instance of <' +
                    (type.name || type) + '>' +
                    (actualTypeName ? ' but of < ' + actualTypeName + '>' : ''));
  }
}


function print(expected, found, name_opt) {
  if (found === expected) {
    if (expected !== 0 || (1 / expected) === (1 / found))
      return;
  } else if ((expected !== expected) && (found !== found)) {
      return;
  }
  fail(expected, found, name_opt);
}



function print(expected, found, user_message = '') {
  if (!deepEquals(expected, found)) {
    fail(expected, found, user_message);
  }
}



function print(expected, found, user_message = '') {
  if (deepEquals(expected, found)) {
    fail(expected, found, user_message);
  }
}


function print(value, user_message = '') {
  print(true, value, user_message);
}



function print(value, user_message = '') {
  print(false, value, user_message);
}


function print(code, type_opt, cause_opt) {
  try {
    if (typeof code == 'function') {
      code();
    } else {
      eval(code);
    }
  } catch (e) {
    if (typeof type_opt == 'function') {
      print(e, type_opt);
    }
    if (arguments.length >= 3) {
      print(cause_opt, e.type, 'thrown exception type mismatch');
    }
    
    return;
  }
  var expected = arguments.length >= 3 ? cause_opt :
      typeof type_opt == 'function' ? type_opt : 'any exception';
  fail(expected, 'no exception', 'expected thrown exception');
}


function print(code, name_opt) {
  try {
    if (typeof code == 'function') {
      code();
    } else {
      eval(code);
    }
  } catch (e) {
    fail("no exception", "threw an exception: " + (e.message || e));
  }
}
