













var str = 'something interesting';
var regexp = new RegExp('o*');
Object.defineProperty(regexp, 'exec', { 'get':  function () {throw 42}});

try {
  regexp.test(str);
  assert(false);
} catch (e) {
  assert(e === 42);  
}
