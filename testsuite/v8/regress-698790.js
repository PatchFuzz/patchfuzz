







var cons_string = %ConstructConsString("", "aaaaaaaaaaaaaa");
new RegExp(cons_string);



function make_cons_string(s) {
  return s + 'aaaaaaaaaaaaaa';
};
%PrepareFunctionForOptimization(make_cons_string);
make_cons_string('');
%OptimizeFunctionOnNextCall(make_cons_string);
var cons_str = make_cons_string("");
new RegExp(cons_str);
