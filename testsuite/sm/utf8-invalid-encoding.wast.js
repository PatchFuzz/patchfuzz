




assert_malformed(
  () => instantiate(`(func (export "\\00\\00\\fe\\ff")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\80")) `), `malformed UTF-8 encoding`);


assert_malformed(() => instantiate(`(func (export "\\8f")) `), `malformed UTF-8 encoding`);


assert_malformed(() => instantiate(`(func (export "\\90")) `), `malformed UTF-8 encoding`);


assert_malformed(() => instantiate(`(func (export "\\9f")) `), `malformed UTF-8 encoding`);


assert_malformed(() => instantiate(`(func (export "\\a0")) `), `malformed UTF-8 encoding`);


assert_malformed(() => instantiate(`(func (export "\\bf")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c0\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c1\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c1\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\2e")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\c2")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\c2\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\df\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\df\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\df\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\df\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\00\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\7f\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\80\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\9f\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\9f\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\a0\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\a0\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\a0\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\a0\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\c0\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e0\\fd\\a0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\2e")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\2e")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\e1")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\e1\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ec\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\a0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\a0\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\bf\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\bf\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ed\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ee\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ef\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\00\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\7f\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\80\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\8f\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\8f\\bf\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\00\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\7f\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\90\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\90\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\90\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\90\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\c0\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\90\\fd\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\c0\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f0\\fd\\90\\90")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\00\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\7f\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\80\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\c0\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\f1")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\f1\\fd\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\00\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\7f\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\80\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\c0\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f3\\fd\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\00\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\7f\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\00\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\7f\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\80\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\80\\7f")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\80\\c0")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\80\\fd")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\c0\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\80\\fd\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\90\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\bf\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\c0\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f4\\fd\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f5\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f7\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f7\\bf\\bf\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\f8\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\f8")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\fb\\bf\\bf\\bf\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80\\80\\23")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\fc\\80")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\fc")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\fd\\bf\\bf\\bf\\bf\\bf")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\fe")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\fe\\ff")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(() => instantiate(`(func (export "\\ff")) `), `malformed UTF-8 encoding`);


assert_malformed(
  () => instantiate(`(func (export "\\ff\\fe\\00\\00")) `),
  `malformed UTF-8 encoding`,
);


assert_malformed(
  () => instantiate(`(func (export "\\ff\\fe")) `),
  `malformed UTF-8 encoding`,
);
