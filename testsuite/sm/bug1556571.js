



function test(v) {
  switch(v) {
    case 0: return;
    default: assertEq(true, false); break;
  }
}

for (var i = 0; i < 10000; i++) {
  test(i % 2 === 0 ? 0 : -0);
}
