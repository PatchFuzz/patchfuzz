




function write(msg) { WScript.Echo(msg); }

function Getter() { write("GETTER"); return "GetterValue"; }

function SafeCall(f)
{
  try
  {
    f();
  }
  catch (e)
  {
    write(e.name);
  }
}


write("Test 1");
SafeCall(function() { Object.getOwnPropertyDescriptor(); });

write("Test 2");
SafeCall(function() { write(Object.getOwnPropertyDescriptor({})); });

write("Test 3");
SafeCall(function() { write(Object.getOwnPropertyDescriptor({'undefined':4}).value); });


write("Test 4");
SafeCall(function() { Object.defineProperty(); });

write("Test 5");
SafeCall(function() { Object.defineProperty({}); });

write("Test 6");
SafeCall(function() { Object.defineProperty({}, 'foo'); });

write("Test 7");
SafeCall(function() { Object.defineProperty({},
                                            { toString : function() { throw {name:'MyError'}; } });
                    });
write("Test 8");
SafeCall(function() { var obj = {};
                      Object.defineProperty(obj, undefined, { value:4, writable:true });
                      write(obj['undefined']);
                    });


write("Test 9");
SafeCall(function() { Object.defineProperties(); });

write("Test 10");
SafeCall(function() { Object.defineProperties({}); });


var obj = {};
Object.defineProperty(obj, "length", { get:Getter, configurable:true });

write("Test 11");
SafeCall(function() { Array.prototype.every.call(obj); });

write("Test 12");
SafeCall(function() { Array.prototype.some.call(obj); });

write("Test 13");
SafeCall(function() { Array.prototype.forEach.call(obj); });

write("Test 14");
SafeCall(function() { Array.prototype.map.call(obj); });

write("Test 15");
SafeCall(function() { Array.prototype.filter.call(obj); });

write("Test 16");
SafeCall(function() { Array.prototype.reduce.call(obj); });

write("Test 17");
SafeCall(function() { Array.prototype.reduceRight.call(obj); });
