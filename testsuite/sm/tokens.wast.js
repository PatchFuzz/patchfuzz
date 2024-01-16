




let $0 = instantiate(`(module
  (func(nop))
)`);


let $1 = instantiate(`(module
  (func (nop)nop)
)`);


let $2 = instantiate(`(module
  (func nop(nop))
)`);


let $3 = instantiate(`(module
  (func(nop)(nop))
)`);


let $4 = instantiate(`(module
  (func $$f(nop))
)`);


let $5 = instantiate(`(module
  (func br 0(nop))
)`);


let $6 = instantiate(`(module
  (table 1 funcref)
  (func)
  (elem (i32.const 0)0)
)`);


let $7 = instantiate(`(module
  (table 1 funcref)
  (func $$f)
  (elem (i32.const 0)$$f)
)`);


let $8 = instantiate(`(module
  (memory 1)
  (data (i32.const 0)"a")
)`);


let $9 = instantiate(`(module
  (import "spectest" "print"(func))
)`);


let $10 = instantiate(`(module
  (func;;bla
  )
)`);


let $11 = instantiate(`(module
  (func (nop);;bla
  )
)`);


let $12 = instantiate(`(module
  (func nop;;bla
  )
)`);


let $13 = instantiate(`(module
  (func $$f;;bla
  )
)`);


let $14 = instantiate(`(module
  (func br 0;;bla
  )
)`);


let $15 = instantiate(`(module
  (data "a";;bla
  )
)`);


let $16 = instantiate(`(module
  (func (block $$l (i32.const 0) (br_table 0 $$l)))
)`);


assert_malformed(
  () => instantiate(`(func (block $$l (i32.const 0) (br_table 0$$l))) `),
  `unknown operator`,
);


let $17 = instantiate(`(module
  (func (block $$l (i32.const 0) (br_table $$l 0)))
)`);


assert_malformed(
  () => instantiate(`(func (block $$l (i32.const 0) (br_table $$l0))) `),
  `unknown label`,
);


let $18 = instantiate(`(module
  (func (block $$l (i32.const 0) (br_table $$l $$l)))
)`);


assert_malformed(
  () => instantiate(`(func (block $$l (i32.const 0) (br_table $$l$$l))) `),
  `unknown label`,
);


let $19 = instantiate(`(module
  (func (block $$l0 (i32.const 0) (br_table $$l0)))
)`);


let $20 = instantiate(`(module
  (func (block $$l$$l (i32.const 0) (br_table $$l$$l)))
)`);


let $21 = instantiate(`(module
  (data "a")
)`);


assert_malformed(() => instantiate(`(data"a") `), `unknown operator`);


let $22 = instantiate(`(module
  (data $$l "a")
)`);


assert_malformed(() => instantiate(`(data $$l"a") `), `unknown operator`);


let $23 = instantiate(`(module
  (data $$l " a")
)`);


assert_malformed(() => instantiate(`(data $$l" a") `), `unknown operator`);


let $24 = instantiate(`(module
  (data $$l "a ")
)`);


assert_malformed(() => instantiate(`(data $$l"a ") `), `unknown operator`);


let $25 = instantiate(`(module
  (data $$l "a " "b")
)`);


assert_malformed(() => instantiate(`(data $$l"a ""b") `), `unknown operator`);


let $26 = instantiate(`(module
  (data $$l "\u{f61a}\u{f4a9}")
)`);


assert_malformed(() => instantiate(`(data $$l"\u{f61a}\u{f4a9}") `), `unknown operator`);


let $27 = instantiate(`(module
  (data $$l " \u{f61a}\u{f4a9}")
)`);


assert_malformed(() => instantiate(`(data $$l" \u{f61a}\u{f4a9}") `), `unknown operator`);


let $28 = instantiate(`(module
  (data $$l "\u{f61a}\u{f4a9} ")
)`);


assert_malformed(() => instantiate(`(data $$l"\u{f61a}\u{f4a9} ") `), `unknown operator`);


let $29 = instantiate(`(module
  (data "a" "b")
)`);


assert_malformed(() => instantiate(`(data "a""b") `), `unknown operator`);


let $30 = instantiate(`(module
  (data "a" " b")
)`);


assert_malformed(() => instantiate(`(data "a"" b") `), `unknown operator`);


let $31 = instantiate(`(module
  (data "a " "b")
)`);


assert_malformed(() => instantiate(`(data "a ""b") `), `unknown operator`);


let $32 = instantiate(`(module
  (data "\u{f61a}\u{f4a9}" "\u{f61a}\u{f4a9}")
)`);


assert_malformed(
  () => instantiate(`(data "\u{f61a}\u{f4a9}""\u{f61a}\u{f4a9}") `),
  `unknown operator`,
);


let $33 = instantiate(`(module
  (data "\u{f61a}\u{f4a9}" " \u{f61a}\u{f4a9}")
)`);


assert_malformed(
  () => instantiate(`(data "\u{f61a}\u{f4a9}"" \u{f61a}\u{f4a9}") `),
  `unknown operator`,
);


let $34 = instantiate(`(module
  (data "\u{f61a}\u{f4a9} " "\u{f61a}\u{f4a9}")
)`);


assert_malformed(
  () => instantiate(`(data "\u{f61a}\u{f4a9} ""\u{f61a}\u{f4a9}") `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(func "a"x) `), `unknown operator`);


assert_malformed(() => instantiate(`(func "a"0) `), `unknown operator`);


assert_malformed(() => instantiate(`(func 0"a") `), `unknown operator`);


assert_malformed(() => instantiate(`(func "a"$$x) `), `unknown operator`);
