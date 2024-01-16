

var counter = 0;

function f() { }

f.then = function(resolve) {
  if (++counter < 10) {
    resolve(f)
  }
}

new Promise(function(resolve) {
  resolve(f)
})

function __checkAsync() {
  assert(counter == 10)
}
