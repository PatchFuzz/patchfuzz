let called_custom_unicode_getter = false;
const re = /./;

function f() {
  re.__defineGetter__("unicode", function() {
    called_custom_unicode_getter = true;
  });
  return 2;
}

print(["","",], re[Symbol.split]("abc", { valueOf: f }));




print(called_custom_unicode_getter);
