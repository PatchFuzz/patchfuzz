

var g = -1;

function f1() {
  
  assert (g === undefined);

  {
    assert (g() === 1);
    function g() { return 1 };

    {
      assert (g() === 2);
      function g() { return 2 };
    }

    assert (g() === 1);
  }

  assert (g() === 2);
}
f1();

function f2() {
  
  'use strict'
  assert (g === -1);

  {
    assert (g() === 1);
    function g() { return 1 };

    {
      assert (g() === 2);
      function g() { return 2 };
    }

    assert (g() === 1);
  }

  assert (g === -1);
}
f2();

function f3() {
  
  assert (g === -1);

  {
    let g = 1;

    {
      if (true)
      {
        assert (g() === 2);

        if (true)
        {
          assert (g() === 2);
        }

        function g() { return 2 };
      }

      assert (g === 1);
    }

    assert (g === 1);
  }

  assert (g === -1);
}
f3();
