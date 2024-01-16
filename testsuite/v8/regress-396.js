




























function DateYear(date) {
  var string = date.getYear() + '';
  if (string.length < 4) {
    string = '' + (string - 0 + 1900);
  }
  return string;
}

assertEquals('1995', DateYear(new Date('Dec 25, 1995')));
assertEquals('2005', DateYear(new Date('Dec 25, 2005')));
