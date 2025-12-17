oomTest(() => print("foobar\xff5baz\u1200".search(/bar\u0178\d/i), 3));
oomTest(() => print((/(?!(?!(?!6)[\Wc]))/i).test(), false));
oomTest(() => print((/bar\u0178\d/i).exec("foobar\xff5baz\u1200") != null, true));
