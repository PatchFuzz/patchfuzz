var asdf = false;

const f =
  (v1 = (function g() {
    if (asdf) { return; } else { return; }
    (function h() {});
  })()) => 1;
f();
