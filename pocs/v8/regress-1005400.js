function foo(a, key) {
  a[key];
}

let obj = {};
let count = 0;

var key_obj = {
  toString: function() {
    count++;
    
    return 'foo' + count;
  }
};

foo(obj, key_obj);


print(count, 1);
