


























function f() {
  return1;
};



function g() {
  return2;
};

function h() {
  return
      3;
};


assertEquals(1, f());
assertEquals(undefined, g());
assertEquals(undefined, h());
