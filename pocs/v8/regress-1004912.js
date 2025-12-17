var key = {
  toString() {
    return Symbol();
  }
};

var obj = {};
obj[key];
