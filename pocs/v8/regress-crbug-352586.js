var a = {};

function getter() {
  do {
    return a + 1;
  } while (false);
}

a.__proto__ = Error("");
a.__defineGetter__('message', getter);
print(()=>a.message, RangeError);
