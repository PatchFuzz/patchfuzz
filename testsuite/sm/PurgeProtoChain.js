

var C = {x: 1};
var B = Object.create(C);
var A = Object.create(B);
for (var i = 0; i < 2000; i++) {
    if (i == 1900)
        B.x = 3;
    assertEq(A.x, i < 1900 ? 1 : 3);
}
