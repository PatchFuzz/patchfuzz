





const fast_c_api = new d8.test.FastCAPI();
function foo(obj) {
  return fast_c_api.is_fast_c_api_object(false, obj);
}
foo(1);
