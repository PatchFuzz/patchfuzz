
gczeal(14); 

function f() {
  print(#[1, 2].flatMap(function(e) {
    return #[e, e * 2];
  }), #[1, 2, 2, 4]);

  var result = #[1, 2, 3].flatMap(function(ele) {
    return #[
      #[ele * 2]
    ];
  });

  print(result.length, 3);
  print(result[0], #[2]);
  print(result[1], #[4]);
  print(result[2], #[6]);
}

for (i = 0; i < 20; i++) {
    f();
}
