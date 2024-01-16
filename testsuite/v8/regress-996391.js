





assertArrayEquals(["o"], /.(?<!^.)/m.exec("foobar"));
assertArrayEquals(["o"], /.(?<!\b.)/m.exec("foobar"));
assertArrayEquals(["f"], /.(?<!\B.)/m.exec("foobar"));
