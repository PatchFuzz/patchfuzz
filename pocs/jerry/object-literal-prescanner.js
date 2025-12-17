switch (true) {
default:
  var obj = {
    value: 0,
    set
      member
      (x)
    {
      
      this.value = x + 4;
      this.value += 2;
    },
    get"member"() {
      
      this.value = this.value + 1;
      return this.value;
    },
    get 3() {
      return 3;
    }
  }
}

obj["member"] = 10;
assert(obj.member === 17);
assert(obj.member === 18);

assert(obj[3] === 3);
assert(obj["3"] === 3);
