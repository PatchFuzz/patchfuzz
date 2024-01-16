















var a= ["", "\0", "\t", "\n", "\v", "\f", "\r", " ", "\u00a0", "\u2028", "\u2029", "\ufeff"]
Array.prototype[4] = 10;

function Test()
{
  a.sort(function() {
    var A = function() { };
    A.prototype.x = 42;
    var o = new Proxy({
        "3": {
          writable:false,
          value:20
        }
      },  {
        getPrototypeOf: function (val, size, ch) {
          var result = new String(val);
          if (ch == null) {
            ch = " ";
          }
          while (result.length < size) {
            result = ch + result;
          }
          return result;
        }
      }
    );

    o.x = 43;
    var result = "";
    for (var p in o) {
        result += o[p];
    }
    return a | 0;
  });

  throw new EvalError("error");
}

try {
  Test();
  assert(false);
} catch (ex) {
  assert (ex instanceof EvalError);
}
