function f(o) {
  
  
  return {...o, ...{a:1.4}};
}

%EnsureFeedbackVectorForFunction(f);

var o = {};

o.a = 1.5;
f(o);
f(o);
f(o);

o.a = undefined;
f(o);
