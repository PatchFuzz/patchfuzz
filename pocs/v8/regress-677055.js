if (this.Intl) {
  v5 = new Intl.NumberFormat();
  v9 = new Intl.DateTimeFormat();
  v52 = v9["formatToParts"];
  var v55 = {};
  print(() => Reflect.apply(v52, v5, v55), TypeError);
}
