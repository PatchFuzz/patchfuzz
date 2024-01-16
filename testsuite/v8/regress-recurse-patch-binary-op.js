



var i = 0
function valueOf() {
  while (true) return i++ < 4 ? 1 + this : 2
}

1 + ({valueOf})
