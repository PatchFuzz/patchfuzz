function test1(depth) {
  if (--depth < 0) {
    return [];
  } else {
    return [ 0, test1(depth) ];
  }
}
print([0,[0,[]]], test1(2));

function test2(depth) {
  if (--depth < 0) {
    return [];
  } else {
    var o = [ 0, test2(depth) ];
    return (depth == 0) ? 0.5 : o;
  }
}
print([0,0.5], test2(2));
