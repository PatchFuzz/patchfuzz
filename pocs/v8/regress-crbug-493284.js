if (this.Intl) {
  var coll = new Intl.Collator();
  print(-1, coll.compare('a', 'c'));
}
