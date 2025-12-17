var max = 40;
setJitCompilerOption("ion.warmup.trigger", max - 10);


gczeal(0);








function return_f(i) {
  if (i != max - 1)
    return f;

  
  
  return return_f.caller.caller;
}

function f(i) {
  function g() {
    return return_f(i);
  }

  print(g, true);
  return g();
}




var uceFault = function (i) {
    if (i == max - 1)
        uceFault = function (i) { return true; };
    return false;
};

var uceFault_lambdaCall = eval(`(${uceFault})`.replace('uceFault', 'uceFault_lambdaCall'));
function lambdaCall(i) {
    function g() {
        return i;
    }

    if (uceFault_lambdaCall(i) || uceFault_lambdaCall(i))
        print(g(), i);

    print(g, true);
};



for (var i = 0; i < max; i++) {
  print(f(i), f);
  lambdaCall(i);
}
