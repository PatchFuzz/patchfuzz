if (this.Intl) {
  print(Intl.NumberFormat.call(new Proxy({},{})), Intl.NumberFormat);
  print(() =>
               Intl.DateTimeFormat.prototype.formatToParts.call(
                   new Proxy({}, {})),
               TypeError);
}
