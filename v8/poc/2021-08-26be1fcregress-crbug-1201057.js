





const fast_c_api = new d8.test.FastCAPI();
const fast_obj = Object.create(fast_c_api);
print(() => fast_obj.supports_fp_params);
