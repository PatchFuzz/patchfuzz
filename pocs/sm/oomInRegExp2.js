oomTest(() => print("foobar\xff5baz\u1200".search(/bar\u0178\d/i), 3), {keepFailing: true});
oomTest(() => print((/(?!(?!(?!6)[\Wc]))/i).test(), false), {keepFailing: true});
oomTest(() => print((/bar\u0178\d/i).exec("foobar\xff5baz\u1200") != null, true), {keepFailing: true});
