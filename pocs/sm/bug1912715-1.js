const obj = {
  get prop() {
    Object.defineProperty(this, "prop", { enumerable: true, value: 0});
    return false;
  },
};
obj[Symbol.unscopables] = obj;
with (obj) {
  print(prop, 0);
}
