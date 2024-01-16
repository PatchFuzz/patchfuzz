



if (this.Intl) {
  assertInstanceof(Intl.NumberFormat.call(new Proxy({},{})), Intl.NumberFormat);
  assertThrows(() =>
               Intl.DateTimeFormat.prototype.formatToParts.call(
                   new Proxy({}, {})),
               TypeError);
}
