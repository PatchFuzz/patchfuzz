



let called_custom_unicode_getter = false;
const re = /./;

function f() {
  re.__defineGetter__("unicode", function() {
    called_custom_unicode_getter = true;
  });
  return 2;
}

assertEquals(["","",], re[Symbol.split]("abc", { valueOf: f }));




assertFalse(called_custom_unicode_getter);
