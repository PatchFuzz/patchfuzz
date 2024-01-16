
function fn(x) {
  switch (x) {
    case 1: { return }
  }
}

new Function("switch(1) { default: { return }}")
