



if (this.Intl) {
  assertThrows(() => Object.getOwnPropertyDescriptor(Intl.Collator.prototype,
                                                     'compare')
                     .get.call(new Intl.DateTimeFormat())('a', 'b'),
               TypeError)
}
