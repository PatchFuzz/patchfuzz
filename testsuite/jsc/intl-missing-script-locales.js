function shouldBe(actual, expected) {
    if (actual !== expected)
        print(`expected ${expected} but got ${actual}`);
}

const locales = [
  ['pa-PK', 'pa-Arab-PK'],
  ['zh-HK', 'zh-Hant-HK'],
  ['zh-SG', 'zh-Hans-SG'],
  ['zh-TW', 'zh-Hant-TW']
];



for (let [alias, locale] of locales) {
  if (new Intl.Collator(locale).resolvedOptions().locale === locale)
    shouldBe(new Intl.Collator(alias).resolvedOptions().locale, alias);

  if (new Intl.DateTimeFormat(locale).resolvedOptions().locale === locale)
    shouldBe(new Intl.DateTimeFormat(alias).resolvedOptions().locale, alias);
}
