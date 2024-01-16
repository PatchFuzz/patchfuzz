













function assertArrayEquals(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function tag(site){
  return site;
}

var site1 = eval("tag`Cocoa`");
var site3 = eval("tag`Cocoa`");

assertArrayEquals(site1, site3);
