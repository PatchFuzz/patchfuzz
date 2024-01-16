





if (this.Intl) {
  var coll = new Intl.Collator();
  assertEquals(-1, coll.compare('a', 'c'));
}
