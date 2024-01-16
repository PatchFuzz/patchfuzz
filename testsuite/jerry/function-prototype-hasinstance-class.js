













class base {
  constructor (value) {
    this.member = value;
  }

  method () {
    return this.member;
  }
}

class sub {
  constructor (value) {
    this.member = value;
  }
}

var obj_base = new base (3);
var obj_sub = new sub (4);

assert (base[Symbol.hasInstance](obj_base) === true);
assert (base[Symbol.hasInstance](obj_sub) === false);

assert (sub[Symbol.hasInstance](obj_base) === false);
assert (sub[Symbol.hasInstance](obj_sub) === true);


class sub_c extends base {
  constructor (value) {
    super(value);
    this.member = value;
  }
}

var obj_sub_c = new sub_c (5);

assert (base[Symbol.hasInstance](obj_sub_c) === true);

assert (sub_c[Symbol.hasInstance](obj_base) === false);
assert (sub_c[Symbol.hasInstance](obj_sub_c) === true);
