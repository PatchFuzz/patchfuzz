













function getProperties(obj)
{
  var str = "";
  for (name in obj)
  {
    if (str)
    {
      str += " " + name;
    }
    else
    {
      str = name;
    }
  }
  return str;
}

var prototype_obj = { dummy:1, length:1, caller:null,
                      arguments:null, prototype:null };

var func = function() {};

Object.setPrototypeOf(func, prototype_obj);
assert(getProperties(func) == "dummy");

var bound_func = (function() {}).bind(null);
Object.setPrototypeOf(bound_func, prototype_obj);
assert(getProperties(bound_func) == "dummy caller arguments prototype");


Object.setPrototypeOf(print, prototype_obj);
assert(getProperties(print) == "dummy length caller arguments");

function f1() {}
assert(Reflect.ownKeys(f1).toString() === "length,name,arguments,caller,prototype")

async function f2() {}
assert(Reflect.ownKeys(f2).toString() === "length,name")
