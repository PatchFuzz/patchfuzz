function test() {
  for (var i = 0; i <= 100; ++i) {
    if (i === 100) {
      setRealmLocale("tr-TR");
    }
    print(
      "turkish i".toLocaleUpperCase(),
      i < 100 ? "TURKISH I" : "TURK\u{130}SH \u{130}",
    );
  }
}
test();
