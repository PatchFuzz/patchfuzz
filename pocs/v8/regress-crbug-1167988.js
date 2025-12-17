let o1 = {
  [() => {}]() {
    return super.m();
  }
};

let o2 = {
  get [() => {}]() {
    return super.m();
  }
};

let o3 = {
  [() => {}]: 1,
  m2() { super.x; }
};
