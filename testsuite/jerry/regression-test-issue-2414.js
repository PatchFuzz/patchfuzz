













try {
  
  

  var f = (() => 1).bind();

  new f;

  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
