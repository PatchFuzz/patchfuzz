


























"a".replace(/a/g, function() { return "c"; });

function test() {
  try {
    test();
  } catch(e) {
    "b".replace(/(b)/g, function() { return "c"; });
  }
}

test();
