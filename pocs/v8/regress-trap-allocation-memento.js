var elements_kind = {
  fast_smi_only            :  'fast smi only elements',
  fast                     :  'fast elements',
  fast_double              :  'fast double elements',
  dictionary               :  'dictionary elements',
}

function getKind(obj) {
  if (%HasSmiElements(obj)) return elements_kind.fast_smi_only;
  if (%HasObjectElements(obj)) return elements_kind.fast;
  if (%HasDoubleElements(obj)) return elements_kind.fast_double;
  if (%HasDictionaryElements(obj)) return elements_kind.dictionary;
}

function print(expected, obj, name_opt) {
  print(expected, getKind(obj), name_opt);
}

(function() {
  function make1() { return new Array(); }
  function make2() { return new Array(); }
  function make3() { return new Array(); }
  function foo(a, i) { a[0] = i; }
  %EnsureFeedbackVectorForFunction(make1);
  %EnsureFeedbackVectorForFunction(make2);
  %EnsureFeedbackVectorForFunction(make3);
  %EnsureFeedbackVectorForFunction(foo);

  function run_test(maker_function) {
    var one = maker_function();
    print(elements_kind.fast_smi_only, one);
    
    foo(one, 1.5);
    
    var two = maker_function();
    print(elements_kind.fast_double, two);
  }
  %EnsureFeedbackVectorForFunction(run_test);

  
  
  run_test(make1);
  
  
  
  run_test(make2);
  
  run_test(make3);
})();
