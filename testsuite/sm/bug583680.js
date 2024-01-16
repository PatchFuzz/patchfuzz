


function f(foo) {
    foo.replace(/s/, "")
    Function(foo)()
}
for (a = 0; a < 1000; a++) {
    f("\
      for (var b = 0; b < 7; b++) {\
        gczeal(2)\
      }\
    ")
}
