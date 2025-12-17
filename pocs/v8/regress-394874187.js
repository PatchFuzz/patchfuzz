{
  let r = /\u{10000}/ugd;
  r.lastIndex = 1;
  print([[0, 2]], r.exec("\u{10000}_\u{10000}").indices);
}
{
  let r = /[\u{10000}]/ugd;
  r.lastIndex = 1;
  print([[0, 2]], r.exec("\u{10000}_\u{10000}").indices);
}
