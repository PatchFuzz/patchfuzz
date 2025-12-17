for (const invalidLocale of ["", "1", "12", "123", "1234"]) {
  print(invalidLocale);
  print(() => "".toLocaleUpperCase(invalidLocale), RangeError);
  print(() => "".toLocaleLowerCase(invalidLocale), RangeError);
}
