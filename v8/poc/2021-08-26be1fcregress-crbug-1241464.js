





(function() {
  const fast_c_api = new d8.test.FastCAPI();
  const func1 = fast_c_api.fast_call_count;
  print(() => new func1());
  const func2 = fast_c_api.slow_call_count;
  print(() => new func2());
  const func3 = fast_c_api.reset_counts;
  print(() => new func3());
})();
