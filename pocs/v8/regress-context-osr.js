"use strict";
function f() {
  try { } catch (e) { }
}

for (this.x = 0; this.x < 1; ++this.x) {
  for (this.y = 0; this.y < 1; ++this.y) {
    for (this.ll = 0; this.ll < 70670; ++this.ll) {
      f();
    }
  }
}
