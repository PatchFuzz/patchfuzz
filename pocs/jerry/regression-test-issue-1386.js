for (var y = 1950; y < 2050; y++) {
  for (var m = 0; m < 12; m++) {
    var last_date = new Date(y, m, 1).getDay ();
    assert (!isNaN (last_date));
    for (var d = 1; d < 32; d++) {
      assert (last_date == new Date(y, m, d).getDay ());
      last_date = (last_date + 1) % 7;
    }
  }
}
