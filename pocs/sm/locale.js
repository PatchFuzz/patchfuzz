function test(locale, timeZone, timeZoneName) {
  let global = newGlobal({locale, timeZone});

  const constructors = ["Collator", "DateTimeFormat", "ListFormat",
                        "NumberFormat", "PluralRules", "RelativeTimeFormat"];
  for (const constructor of constructors) {
    let intl = new global.Intl[constructor];
    print(intl.resolvedOptions().locale, locale);
  }

  const date = new global.Date(2012, 0, 10);
  let tzRE = /\(([^\)]+)\)/;
  print(tzRE.exec(date)[1], timeZoneName)
}

test("de-CH", "Atlantic/Reykjavik", "Mittlere Greenwich-Zeit");
test("en", "Atlantic/Reykjavik", "Greenwich Mean Time");
