function testDefaultCaseMapping() {
  for (var i = 0; i < 100; ++i) {
    print("TURKISH I".toLocaleLowerCase(), "turkish i");
  }
}

function testTurkishCaseMapping() {
  for (var i = 0; i < 100; ++i) {
    print("TURKISH I".toLocaleLowerCase(), "turk\u{131}sh \u{131}");
  }
}


print(
  getDefaultLocale() === "en-US" || getDefaultLocale() === "en-US-POSIX",
  true
);
print(getRealmLocale(), "en-US");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, true);


testDefaultCaseMapping();


setDefaultLocale("fra-FR");
print(getDefaultLocale(), "fra-FR");
print(getRealmLocale(), "fr-FR");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, true);


testDefaultCaseMapping();


setDefaultLocale("tur-TR");
print(getDefaultLocale(), "tur-TR");
print(getRealmLocale(), "tr-TR");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, false);

testTurkishCaseMapping();


setDefaultLocale("eng-US");
print(getDefaultLocale(), "eng-US");
print(getRealmLocale(), "en-US");


print(getFuseState().DefaultLocaleHasDefaultCaseMappingFuse.intact, false);


testDefaultCaseMapping();
