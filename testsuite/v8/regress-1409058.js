



for (const invalidLocale of ["", "1", "12", "123", "1234"]) {
  print(invalidLocale);
  assertThrows(() => "".toLocaleUpperCase(invalidLocale), RangeError);
  assertThrows(() => "".toLocaleLowerCase(invalidLocale), RangeError);
}
