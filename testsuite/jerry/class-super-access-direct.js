













class Base {
  constructor () {
    this.parent_value = 100;
  }

  parent_value () {
    return this.parent_value;
  }

  parent_value_arg (a, b, c) {
    if (c) {
      return this.parent_value + a + b + c;
    } else if (b) {
      return this.parent_value + a + b;
    } else {
      return this.parent_value + a;
    }
  }

  method () {
    return {
      method: function (a, b, c, d, e) { return -50 + a + b + c + d + e; }
    }
  }
}

class Target extends Base {
  constructor () {
    super ();
    this.parent_value = -10;
  }

  parent_value () {
    throw new Error ('(parent_value)');
  }

  parent_value_direct () {
    return super.parent_value ();
  }

  parent_value_direct_arg (a, b, c) {
    if (c) {
      return super.parent_value_arg (a, b, c);
    } else if (b) {
      return super.parent_value_arg (a, b);
    } else {
      return super.parent_value_arg (a);
    }
  }

  method () {
    throw new Error ("(method)");
  }

  parent_method_dot () {
    return super.method ().method (1, 2, 3, 4, 5)
  }

  parent_method_index () {
    return super['method']()['method'](1, 2, 3, 4, 5);
  }
}


var obj = new Target ();

assert (obj.parent_value_direct () === -10);
assert (obj.parent_value_direct_arg (1) === -9);
assert (obj.parent_value_direct_arg (1, 2) === -7);
assert (obj.parent_value_direct_arg (1, 2, 3) === -4);

try {
  obj.parent_value();
  assert (false)
} catch (ex) {
  
  assert (ex instanceof TypeError);
}

assert (obj.parent_method_dot () === -35);
assert (obj.parent_method_index () === -35);

try {
  obj.method ();
  assert (false);
} catch (ex) {
  assert (ex.message === '(method)');
}
