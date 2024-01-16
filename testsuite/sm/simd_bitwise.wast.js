






let $0 = instantiate(`(module
  (func (export "not") (param $$0 v128) (result v128) (v128.not (local.get $$0)))
  (func (export "and") (param $$0 v128) (param $$1 v128) (result v128) (v128.and (local.get $$0) (local.get $$1)))
  (func (export "or") (param $$0 v128) (param $$1 v128) (result v128) (v128.or (local.get $$0) (local.get $$1)))
  (func (export "xor") (param $$0 v128) (param $$1 v128) (result v128) (v128.xor (local.get $$0) (local.get $$1)))
  (func (export "bitselect") (param $$0 v128) (param $$1 v128) (param $$2 v128) (result v128)
    (v128.bitselect (local.get $$0) (local.get $$1) (local.get $$2))
  )
  (func (export "andnot") (param $$0 v128) (param $$1 v128) (result v128) (v128.andnot (local.get $$0) (local.get $$1)))
)`);


assert_return(
  () => invoke($0, `not`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0xffffffff, 0x0, 0xffffffff, 0x0])]),
  [i32x4([0x0, 0xffffffff, 0x0, 0xffffffff])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0x0, 0xffffffff, 0x0, 0xffffffff])]),
  [i32x4([0xffffffff, 0x0, 0xffffffff, 0x0])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555])]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0xcccccccc, 0xcccccccc, 0xcccccccc, 0xcccccccc])]),
  [i32x4([0x33333333, 0x33333333, 0x33333333, 0x33333333])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2])]),
  [i32x4([0xb669fd2d, 0xb669fd2d, 0xb669fd2d, 0xb669fd2d])],
);


assert_return(
  () => invoke($0, `not`, [i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678])]),
  [i32x4([0xedcba987, 0xedcba987, 0xedcba987, 0xedcba987])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0xffffffff])],
);


assert_return(
  () => invoke($0, `and`, [i32x4([0x0, 0x0, 0x0, 0x0]), i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `and`, [i32x4([0x1, 0x1, 0x1, 0x1]), i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x55, 0x55, 0x55, 0x55]),
  ]),
  [i32x4([0x55, 0x55, 0x55, 0x55])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xa, 0x80, 0x5, 0xa5]),
  ]),
  [i32x4([0xa, 0x80, 0x0, 0xa0])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
  ]),
  [i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
  ]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x5555, 0xffff, 0x55ff, 0x5fff]),
  ]),
  [i32x4([0x5555, 0x5555, 0x5555, 0x5555])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
  ]),
  [i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2])],
);


assert_return(
  () => invoke($0, `and`, [
    i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678]),
    i32x4([0x90abcdef, 0x90abcdef, 0x90abcdef, 0x90abcdef]),
  ]),
  [i32x4([0x10204468, 0x10204468, 0x10204468, 0x10204468])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [i32x4([0x0, 0x0, 0x0, 0x0]), i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [i32x4([0x1, 0x1, 0x1, 0x1]), i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x55, 0x55, 0x55, 0x55]),
  ]),
  [i32x4([0xff, 0xff, 0xff, 0xff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0xff, 0xff, 0xff, 0xff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xa, 0x80, 0x5, 0xa5]),
  ]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaf, 0xaaaaaaaf])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x5555, 0xffff, 0x55ff, 0x5fff]),
  ]),
  [i32x4([0x55555555, 0x5555ffff, 0x555555ff, 0x55555fff])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
  ]),
  [i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2])],
);


assert_return(
  () => invoke($0, `or`, [
    i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678]),
    i32x4([0x90abcdef, 0x90abcdef, 0x90abcdef, 0x90abcdef]),
  ]),
  [i32x4([0x92bfdfff, 0x92bfdfff, 0x92bfdfff, 0x92bfdfff])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0xffffffff, 0xffffffff, 0x0])],
);


assert_return(
  () => invoke($0, `xor`, [i32x4([0x0, 0x0, 0x0, 0x0]), i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `xor`, [i32x4([0x1, 0x1, 0x1, 0x1]), i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x55, 0x55, 0x55, 0x55]),
  ]),
  [i32x4([0xaa, 0xaa, 0xaa, 0xaa])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x7f, 0x7f, 0x7f, 0x7f])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xa, 0x80, 0x5, 0xa5]),
  ]),
  [i32x4([0xaaaaaaa0, 0xaaaaaa2a, 0xaaaaaaaf, 0xaaaaaa0f])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
  ]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
  ]),
  [i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x5555, 0xffff, 0x55ff, 0x5fff]),
  ]),
  [i32x4([0x55550000, 0x5555aaaa, 0x555500aa, 0x55550aaa])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `xor`, [
    i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678]),
    i32x4([0x90abcdef, 0x90abcdef, 0x90abcdef, 0x90abcdef]),
  ]),
  [i32x4([0x829f9b97, 0x829f9b97, 0x829f9b97, 0x829f9b97])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb]),
    i32x4([0x112345, 0xf00fffff, 0x10112021, 0xbbaabbaa]),
  ]),
  [i32x4([0xbbaababa, 0xabbaaaaa, 0xabaabbba, 0xaabbaabb])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb]),
    i32x4([0x11111111, 0x11111111, 0x11111111, 0x11111111]),
  ]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb, 0xbbbbbbbb]),
    i32x4([0x1234567, 0x89abcdef, 0xfedcba98, 0x76543210]),
  ]),
  [i32x4([0xbabababa, 0xbabababa, 0xabababab, 0xabababab])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x1234567, 0x89abcdef, 0xfedcba98, 0x76543210]),
  ]),
  [i32x4([0x54761032, 0xdcfe98ba, 0xab89efcd, 0x23016745])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x55555555, 0xaaaaaaaa, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0xffffffff, 0x55555555, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
    i32x4([0xb669fd2e, 0xb669fd2e, 0xb669fd2e, 0xb669fd2e]),
    i32x4([0xcdefcdef, 0xcdefcdef, 0xcdefcdef, 0xcdefcdef]),
  ]),
  [i32x4([0x7b8630c2, 0x7b8630c2, 0x7b8630c2, 0x7b8630c2])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678]),
    i32x4([0x90abcdef, 0x90abcdef, 0x90abcdef, 0x90abcdef]),
    i32x4([0xcdefcdef, 0xcdefcdef, 0xcdefcdef, 0xcdefcdef]),
  ]),
  [i32x4([0x10244468, 0x10244468, 0x10244468, 0x10244468])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0xffffffff, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [i32x4([0x0, 0x0, 0x0, 0x0]), i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [i32x4([0x1, 0x1, 0x1, 0x1]), i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x55, 0x55, 0x55, 0x55]),
  ]),
  [i32x4([0xaa, 0xaa, 0xaa, 0xaa])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xff, 0xff, 0xff, 0xff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x7f, 0x7f, 0x7f, 0x7f])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
    i32x4([0xa, 0x80, 0x5, 0xa5]),
  ]),
  [i32x4([0xaaaaaaa0, 0xaaaaaa2a, 0xaaaaaaaa, 0xaaaaaa0a])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
  ]),
  [i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa, 0xaaaaaaaa]),
  ]),
  [i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x55555555, 0x55555555, 0x55555555, 0x55555555]),
    i32x4([0x5555, 0xffff, 0x55ff, 0x5fff]),
  ]),
  [i32x4([0x55550000, 0x55550000, 0x55550000, 0x55550000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
    i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [
    i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678]),
    i32x4([0x90abcdef, 0x90abcdef, 0x90abcdef, 0x90abcdef]),
  ]),
  [i32x4([0x2141210, 0x2141210, 0x2141210, 0x2141210])],
);


assert_return(
  () => invoke($0, `not`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0.00000000000000000000000000000000000000587747),
      value("f32", 0.00000000000000000000000000000000000000587747),
      value("f32", 0.00000000000000000000000000000000000000587747),
      value("f32", 0.00000000000000000000000000000000000000587747),
    ),
  ],
);


assert_return(
  () => invoke($0, `not`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -0.00000000000000000000000000000000000000587747),
      value("f32", -0.00000000000000000000000000000000000000587747),
      value("f32", -0.00000000000000000000000000000000000000587747),
      value("f32", -0.00000000000000000000000000000000000000587747),
    ),
  ],
);


assert_return(
  () => invoke($0, `not`, [f32x4([-Infinity, -Infinity, -Infinity, -Infinity])]),
  [i32x4([0x7fffff, 0x7fffff, 0x7fffff, 0x7fffff])],
);


assert_return(
  () => invoke($0, `not`, [f32x4([Infinity, Infinity, Infinity, Infinity])]),
  [i32x4([0x807fffff, 0x807fffff, 0x807fffff, 0x807fffff])],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `and`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `or`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `or`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `or`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `or`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
    ),
  ],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x400000, 0x400000, 0x400000, 0x400000])],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x80400000, 0x80400000, 0x80400000, 0x80400000])],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x80400000, 0x80400000, 0x80400000, 0x80400000])],
);


assert_return(
  () => invoke($0, `xor`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x400000, 0x400000, 0x400000, 0x400000])],
);


assert_return(
  () => invoke($0, `xor`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `xor`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `xor`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [i32x4([0xffc00000, 0xffc00000, 0xffc00000, 0xffc00000])],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `bitselect`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([2779096600, 2779096600, 2779096600, 2779096600]),
  ]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
    ),
  ],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x400000, 0x400000, 0x400000, 0x400000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x80400000, 0x80400000, 0x80400000, 0x80400000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x400000, 0x400000, 0x400000, 0x400000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x400000, 0x400000, 0x400000, 0x400000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `andnot`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `andnot`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.not (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.and (i32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.and (v128.const i32x4 0 0 0 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.and (i32.const 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.or (i32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.or (v128.const i32x4 0 0 0 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.or (i32.const 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.xor (i32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.xor (v128.const i32x4 0 0 0 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.xor (i32.const 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.bitselect (i32.const 0) (v128.const i32x4 0 0 0 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.bitselect (v128.const i32x4 0 0 0 0) (v128.const i32x4 0 0 0 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.bitselect (i32.const 0) (i32.const 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.andnot (i32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.andnot (v128.const i32x4 0 0 0 0) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (v128.andnot (i32.const 0) (i32.const 0))))`),
  `type mismatch`,
);


let $1 = instantiate(`(module (memory 1)
  (func (export "v128.not-in-block")
    (block
      (drop
        (block (result v128)
          (v128.not
            (block (result v128) (v128.load (i32.const 0)))
          )
        )
      )
    )
  )
  (func (export "v128.and-in-block")
    (block
      (drop
        (block (result v128)
          (v128.and
            (block (result v128) (v128.load (i32.const 0)))
            (block (result v128) (v128.load (i32.const 1)))
          )
        )
      )
    )
  )
  (func (export "v128.or-in-block")
    (block
      (drop
        (block (result v128)
          (v128.or
            (block (result v128) (v128.load (i32.const 0)))
            (block (result v128) (v128.load (i32.const 1)))
          )
        )
      )
    )
  )
  (func (export "v128.xor-in-block")
    (block
      (drop
        (block (result v128)
          (v128.xor
            (block (result v128) (v128.load (i32.const 0)))
            (block (result v128) (v128.load (i32.const 1)))
          )
        )
      )
    )
  )
  (func (export "v128.bitselect-in-block")
    (block
      (drop
        (block (result v128)
          (v128.bitselect
            (block (result v128) (v128.load (i32.const 0)))
            (block (result v128) (v128.load (i32.const 1)))
            (block (result v128) (v128.load (i32.const 2)))
          )
        )
      )
    )
  )
  (func (export "v128.andnot-in-block")
    (block
      (drop
        (block (result v128)
          (v128.andnot
            (block (result v128) (v128.load (i32.const 0)))
            (block (result v128) (v128.load (i32.const 1)))
          )
        )
      )
    )
  )
  (func (export "nested-v128.not")
    (drop
      (v128.not
        (v128.not
          (v128.not
            (v128.load (i32.const 0))
          )
        )
      )
    )
  )
  (func (export "nested-v128.and")
    (drop
      (v128.and
        (v128.and
          (v128.and
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.and
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
        (v128.and
          (v128.and
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.and
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
      )
    )
  )
  (func (export "nested-v128.or")
    (drop
      (v128.or
        (v128.or
          (v128.or
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.or
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
        (v128.or
          (v128.or
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.or
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
      )
    )
  )
  (func (export "nested-v128.xor")
    (drop
      (v128.xor
        (v128.xor
          (v128.xor
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.xor
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
        (v128.xor
          (v128.xor
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.xor
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
      )
    )
  )
  (func (export "nested-v128.bitselect")
    (drop
      (v128.bitselect
        (v128.bitselect
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
        )
        (v128.bitselect
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
        )
        (v128.bitselect
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
        )
      )
    )
  )
  (func (export "nested-v128.andnot")
    (drop
      (v128.andnot
        (v128.andnot
          (v128.andnot
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.andnot
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
        (v128.andnot
          (v128.andnot
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
          (v128.andnot
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
      )
    )
  )
  (func (export "as-param")
    (drop
      (v128.or
        (v128.and
          (v128.not
            (v128.load (i32.const 0))
          )
          (v128.not
            (v128.load (i32.const 1))
          )
        )
        (v128.xor
          (v128.bitselect
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
            (v128.load (i32.const 2))
          )
          (v128.andnot
            (v128.load (i32.const 0))
            (v128.load (i32.const 1))
          )
        )
      )
    )
  )
)`);


assert_return(() => invoke($1, `v128.not-in-block`, []), []);


assert_return(() => invoke($1, `v128.and-in-block`, []), []);


assert_return(() => invoke($1, `v128.or-in-block`, []), []);


assert_return(() => invoke($1, `v128.xor-in-block`, []), []);


assert_return(() => invoke($1, `v128.bitselect-in-block`, []), []);


assert_return(() => invoke($1, `v128.andnot-in-block`, []), []);


assert_return(() => invoke($1, `nested-v128.not`, []), []);


assert_return(() => invoke($1, `nested-v128.and`, []), []);


assert_return(() => invoke($1, `nested-v128.or`, []), []);


assert_return(() => invoke($1, `nested-v128.xor`, []), []);


assert_return(() => invoke($1, `nested-v128.bitselect`, []), []);


assert_return(() => invoke($1, `nested-v128.andnot`, []), []);


assert_return(() => invoke($1, `as-param`, []), []);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.not-arg-empty (result v128)
      (v128.not)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.and-1st-arg-empty (result v128)
      (v128.and (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.and-arg-empty (result v128)
      (v128.and)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.or-1st-arg-empty (result v128)
      (v128.or (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.or-arg-empty (result v128)
      (v128.or)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.xor-1st-arg-empty (result v128)
      (v128.xor (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.xor-arg-empty (result v128)
      (v128.xor)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.andnot-1st-arg-empty (result v128)
      (v128.andnot (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.andnot-arg-empty (result v128)
      (v128.andnot)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.bitselect-1st-arg-empty (result v128)
      (v128.bitselect (v128.const i32x4 0 0 0 0) (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.bitselect-two-args-empty (result v128)
      (v128.bitselect (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$v128.bitselect-arg-empty (result v128)
      (v128.bitselect)
    )
  )`),
  `type mismatch`,
);
