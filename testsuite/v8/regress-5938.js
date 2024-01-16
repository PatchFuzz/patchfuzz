





let global = 0;
{
  let confusing = 13;
  function lazy_func(b = confusing) { let confusing = 0; global = b; }
  lazy_func();
}

assertEquals(13, global);
