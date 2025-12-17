print(["o"], /.(?<!^.)/m.exec("foobar"));
print(["o"], /.(?<!\b.)/m.exec("foobar"));
print(["f"], /.(?<!\B.)/m.exec("foobar"));
