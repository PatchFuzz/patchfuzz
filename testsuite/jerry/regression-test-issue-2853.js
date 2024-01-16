













var map = new Map()
map.set()
map.set('bar')

var count = 0
map.forEach(function () {
  if (count === 0) {
    map.delete('bar')
  }
  count++;
})

assert(count === 1);
