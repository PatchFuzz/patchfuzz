













function member_str() {
  return "member";
}

switch (true) {
default:
  var obj = {
    ["val" + "ue"]: 0,
    set[member_str()](x) {
      
      this.value = x + 4;
      this.value += 2;
    },
    get[member_str() ? member_str() : ""]() {
      
      this.value = this.value + 1;
      return this.value;
    },
    get
      [1 + 2]
      ()
    {
      return 3;
    },
    [false ? member_str()
           : ""]
     :8
  }
}

obj["member"] = 10;
assert(obj.member === 17);
assert(obj.member === 18);

assert(obj[3] === 3);
assert(obj["3"] === 3);

assert(obj[""] === 8);
