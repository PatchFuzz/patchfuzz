





const fast_c_api = new d8.test.FastCAPI();
print(() => fast_c_api.enforce_range_compare_i32(
  true, -9007199254740990, new Boolean(), {}));
