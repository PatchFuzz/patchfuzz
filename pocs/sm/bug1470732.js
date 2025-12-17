var i = 0;
while(i++ < 500) {
  evalInWorker(`
    print(0x23456789 | 0, false);
  `);
  let m = parseModule("");
  moduleLink(m);
}

