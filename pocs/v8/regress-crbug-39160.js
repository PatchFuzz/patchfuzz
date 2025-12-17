function f(a) {
  for (var i = 1073741820; i < 1073741822; i++) {
    if (a < i) {
      a += i;
    }
  }
}

f(5)
