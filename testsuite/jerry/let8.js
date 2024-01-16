

assert (typeof A === "undefined");

{
  class A {};

  {
    let A = 6;

    assert (A === 6);
  }

  assert (typeof A === "function");
}

assert (typeof A === "undefined");

{
  let A = 5;
  {
    {
      class A {};

      assert (typeof A === "function");
    }

    assert (A === 5);
  }
}

assert (typeof A === "undefined");

{
  let A = 5;
  {
    {
      class A {};

      eval ('assert (typeof A === "function")');
    }

    eval ('assert (A === 5)');
  }
}
