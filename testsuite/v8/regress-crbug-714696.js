



if (this.Intl) {
  new Intl.v8BreakIterator();
  new Intl.DateTimeFormat();
  try { console.log({ toString: function() { throw 1; }}); } catch (e) {}
  new Intl.v8BreakIterator();
}
