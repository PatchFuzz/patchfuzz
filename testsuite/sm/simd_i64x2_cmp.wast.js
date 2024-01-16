






let $0 = instantiate(`(module
  (func (export "eq") (param $$x v128) (param $$y v128) (result v128) (i64x2.eq (local.get $$x) (local.get $$y)))
  (func (export "ne") (param $$x v128) (param $$y v128) (result v128) (i64x2.ne (local.get $$x) (local.get $$y)))
  (func (export "lt_s") (param $$x v128) (param $$y v128) (result v128) (i64x2.lt_s (local.get $$x) (local.get $$y)))
  (func (export "le_s") (param $$x v128) (param $$y v128) (result v128) (i64x2.le_s (local.get $$x) (local.get $$y)))
  (func (export "gt_s") (param $$x v128) (param $$y v128) (result v128) (i64x2.gt_s (local.get $$x) (local.get $$y)))
  (func (export "ge_s") (param $$x v128) (param $$y v128) (result v128) (i64x2.ge_s (local.get $$x) (local.get $$y)))
)`);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0x3020100n, 0x11100904n]),
    i64x2([0x3020100n, 0x11100904n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `eq`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xfffffffffffffffn, 0xfffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(() => invoke($0, `eq`, [i64x2([0x1n, 0x1n]), i64x2([0x2n, 0x2n])]), [i64x2([0x0n, 0x0n])]);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(() => invoke($0, `ne`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `ne`, [
    i64x2([0x3020100n, 0x11100904n]),
    i64x2([0x3020100n, 0x11100904n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0xc060000000000000n, 0xc05fc00000000000n]),
    f64x2([-128, -127]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `lt_s`, [
    i64x2([0x3ff0000000000000n, 0x405fc00000000000n]),
    f64x2([1, 127]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0xffffffffffffffffn])]),
  [i64x2([0xffffffffffffffffn, 0x0n])],
);


assert_return(
  () => invoke($0, `le_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0xc060000000000000n, 0xc05fc00000000000n]),
    f64x2([-128, -127]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `le_s`, [
    i64x2([0x3ff0000000000000n, 0x405fc00000000000n]),
    f64x2([1, 127]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0xc060000000000000n, 0xc05fc00000000000n]),
    f64x2([-128, -127]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `gt_s`, [
    i64x2([0x3ff0000000000000n, 0x405fc00000000000n]),
    f64x2([1, 127]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
    i64x2([0xf0f0f0f0f0f0f0f0n, 0xf0f0f0f0f0f0f0f0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
    i64x2([0xf0f0f0f0f0f0f0fn, 0xf0f0f0f0f0f0f0fn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
    i64x2([0x302010011100904n, 0x1a0b0a12ffabaa1bn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
    i64x2([0x8080808080808080n, 0x8080808080808080n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
    i64x2([0x8382818000fffefdn, 0x7f020100fffefd80n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xffffffffffffffffn, 0x0n]),
    i64x2([0xffffffffffffffffn, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x0n, 0xffffffffffffffffn]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
    i64x2([0x8000000000000001n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0xc060000000000000n, 0xc05fc00000000000n]),
    f64x2([-128, -127]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `ge_s`, [
    i64x2([0x3ff0000000000000n, 0x405fc00000000000n]),
    f64x2([1, 127]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.eq (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.ne (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.ge_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.gt_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.le_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.lt_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.eq-1st-arg-empty (result v128)
      (i64x2.eq (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.eq-arg-empty (result v128)
      (i64x2.eq)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.ne-1st-arg-empty (result v128)
      (i64x2.ne (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.ne-arg-empty (result v128)
      (i64x2.ne)
    )
  )`),
  `type mismatch`,
);
