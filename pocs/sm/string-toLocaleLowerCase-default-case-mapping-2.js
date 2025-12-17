function test() {
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      setRealmLocale("tr-TR");
    }
    print(
      "TURKISH I".toLocaleLowerCase(),
      i < 100 ? "turkish i" : "turk\u{131}sh \u{131}",
    );
  }
}
test();
