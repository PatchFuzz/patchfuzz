let o = { toJSON() {} };
function ID(x) { return x; }

class C0 {
  toJSON() {}
};

class C1 {
  toJSON() {}
  [ID('x')](){}
};

class C2 {
  static toJSON() {}
};

class C3 {
  static toJSON() {}
  static [ID('x')](){}
};
