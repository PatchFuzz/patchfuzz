var size = 63392;
var a = [];
function build() {
  for (let i = 0; i < size; i++) {
    a.push(i);
  }
}

build();

function c(v) { return v + 0.5; }
a.map(c);
