function testDefaultCaseMapping() {
  for (var i = 0; i < 100; ++i) {
    print("turkish i".toLocaleUpperCase(), "TURKISH I");
  }
}

function testTurkishCaseMapping() {
  for (var i = 0; i < 100; ++i) {
    print("turkish i".toLocaleUpperCase(), "TURK\u{130}SH \u{130}");
  }
}


print(
  getDefaultLocale() === "en-US" || getDefaultLocale() === "en-US-POSIX",
  true
);
print(getRealmLocale(), "en-US");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, true);


testDefaultCaseMapping();


setDefaultLocale("fr-FR");
print(getDefaultLocale(), "fr-FR");
print(getRealmLocale(), "fr-FR");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, true);


testDefaultCaseMapping();


setDefaultLocale("tr-TR");
print(getDefaultLocale(), "tr-TR");
print(getRealmLocale(), "tr-TR");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, false);

testTurkishCaseMapping();


setDefaultLocale("en-US");
print(getDefaultLocale(), "en-US");
print(getRealmLocale(), "en-US");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, false);


testDefaultCaseMapping();
