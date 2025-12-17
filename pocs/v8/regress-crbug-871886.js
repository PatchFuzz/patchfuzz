let arr = [1.5, 2.5];
arr.slice(0,
  { valueOf: function () {
      arr.length = 0;
      return 2;
    }
  });
