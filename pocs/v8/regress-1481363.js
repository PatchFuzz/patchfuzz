function* __getObject() {
    let obj = this['__v_1'];
    yield obj;
}
var __v_0 = 0;
var __v_1 = {
  get x() {
    __v_0++;
  }
};
var __v_2 = {
};
__v_2[0] = 6;
Object.defineProperty(__v_2, 0, {
  get: function () {
    __v_1["x"];
    return __getObject();
  },
});
JSON.stringify(__v_2);
print(1, __v_0);
