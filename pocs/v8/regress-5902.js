var log = [];

function check(predicate, item) {
  if (!predicate) log.push(item);
}

var global = this;

Object.getOwnPropertyNames(global).forEach(function(name) {
  
  if (name[0] != name[0].toUpperCase()) return;

  var obj = global[name];

  
  if (!%IsJSReceiver(obj)) return;

  
  if (!obj.toString().includes('native')) return;

  
  try {
    new obj();
  } catch (e) {
  }

  
  check(%HasFastProperties(obj), `${name}`);

  
  var constructor = obj.constructor;
  if (!%IsJSReceiver(constructor)) return;
  check(%HasFastProperties(constructor), `${name}.constructor`);

  
  var prototype = obj.prototype;
  if (!%IsJSReceiver(prototype)) return;
  check(%HasFastProperties(prototype), `${name}.prototype`);

  
  var prototype_constructor = prototype.constructor;
  if (!%IsJSReceiver(prototype_constructor)) return;
  check(
      %HasFastProperties(prototype_constructor),
      `${name}.prototype.constructor`);
});


if (!%IsDictPropertyConstTrackingEnabled())
  print([], log);
