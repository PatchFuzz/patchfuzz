




let $0 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "abcdefghijklmnopqrstuvwxyz")

  (func (export "8u_good1") (param $$i i64) (result i32)
    (i32.load8_u offset=0 (local.get $$i))                   ;; 97 'a'
  )
  (func (export "8u_good2") (param $$i i64) (result i32)
    (i32.load8_u align=1 (local.get $$i))                    ;; 97 'a'
  )
  (func (export "8u_good3") (param $$i i64) (result i32)
    (i32.load8_u offset=1 align=1 (local.get $$i))           ;; 98 'b'
  )
  (func (export "8u_good4") (param $$i i64) (result i32)
    (i32.load8_u offset=2 align=1 (local.get $$i))           ;; 99 'c'
  )
  (func (export "8u_good5") (param $$i i64) (result i32)
    (i32.load8_u offset=25 align=1 (local.get $$i))          ;; 122 'z'
  )

  (func (export "8s_good1") (param $$i i64) (result i32)
    (i32.load8_s offset=0 (local.get $$i))                   ;; 97 'a'
  )
  (func (export "8s_good2") (param $$i i64) (result i32)
    (i32.load8_s align=1 (local.get $$i))                    ;; 97 'a'
  )
  (func (export "8s_good3") (param $$i i64) (result i32)
    (i32.load8_s offset=1 align=1 (local.get $$i))           ;; 98 'b'
  )
  (func (export "8s_good4") (param $$i i64) (result i32)
    (i32.load8_s offset=2 align=1 (local.get $$i))           ;; 99 'c'
  )
  (func (export "8s_good5") (param $$i i64) (result i32)
    (i32.load8_s offset=25 align=1 (local.get $$i))          ;; 122 'z'
  )

  (func (export "16u_good1") (param $$i i64) (result i32)
    (i32.load16_u offset=0 (local.get $$i))                  ;; 25185 'ab'
  )
  (func (export "16u_good2") (param $$i i64) (result i32)
    (i32.load16_u align=1 (local.get $$i))                   ;; 25185 'ab'
  )
  (func (export "16u_good3") (param $$i i64) (result i32)
    (i32.load16_u offset=1 align=1 (local.get $$i))          ;; 25442 'bc'
  )
  (func (export "16u_good4") (param $$i i64) (result i32)
    (i32.load16_u offset=2 align=2 (local.get $$i))          ;; 25699 'cd'
  )
  (func (export "16u_good5") (param $$i i64) (result i32)
    (i32.load16_u offset=25 align=2 (local.get $$i))         ;; 122 'z\\0'
  )

  (func (export "16s_good1") (param $$i i64) (result i32)
    (i32.load16_s offset=0 (local.get $$i))                  ;; 25185 'ab'
  )
  (func (export "16s_good2") (param $$i i64) (result i32)
    (i32.load16_s align=1 (local.get $$i))                   ;; 25185 'ab'
  )
  (func (export "16s_good3") (param $$i i64) (result i32)
    (i32.load16_s offset=1 align=1 (local.get $$i))          ;; 25442 'bc'
  )
  (func (export "16s_good4") (param $$i i64) (result i32)
    (i32.load16_s offset=2 align=2 (local.get $$i))          ;; 25699 'cd'
  )
  (func (export "16s_good5") (param $$i i64) (result i32)
    (i32.load16_s offset=25 align=2 (local.get $$i))         ;; 122 'z\\0'
  )

  (func (export "32_good1") (param $$i i64) (result i32)
    (i32.load offset=0 (local.get $$i))                      ;; 1684234849 'abcd'
  )
  (func (export "32_good2") (param $$i i64) (result i32)
    (i32.load align=1 (local.get $$i))                       ;; 1684234849 'abcd'
  )
  (func (export "32_good3") (param $$i i64) (result i32)
    (i32.load offset=1 align=1 (local.get $$i))              ;; 1701077858 'bcde'
  )
  (func (export "32_good4") (param $$i i64) (result i32)
    (i32.load offset=2 align=2 (local.get $$i))              ;; 1717920867 'cdef'
  )
  (func (export "32_good5") (param $$i i64) (result i32)
    (i32.load offset=25 align=4 (local.get $$i))             ;; 122 'z\\0\\0\\0'
  )

  (func (export "8u_bad") (param $$i i64)
    (drop (i32.load8_u offset=4294967295 (local.get $$i)))
  )
  (func (export "8s_bad") (param $$i i64)
    (drop (i32.load8_s offset=4294967295 (local.get $$i)))
  )
  (func (export "16u_bad") (param $$i i64)
    (drop (i32.load16_u offset=4294967295 (local.get $$i)))
  )
  (func (export "16s_bad") (param $$i i64)
    (drop (i32.load16_s offset=4294967295 (local.get $$i)))
  )
  (func (export "32_bad") (param $$i i64)
    (drop (i32.load offset=4294967295 (local.get $$i)))
  )
)`);


assert_return(() => invoke($0, `8u_good1`, [0n]), [value("i32", 97)]);


assert_return(() => invoke($0, `8u_good2`, [0n]), [value("i32", 97)]);


assert_return(() => invoke($0, `8u_good3`, [0n]), [value("i32", 98)]);


assert_return(() => invoke($0, `8u_good4`, [0n]), [value("i32", 99)]);


assert_return(() => invoke($0, `8u_good5`, [0n]), [value("i32", 122)]);


assert_return(() => invoke($0, `8s_good1`, [0n]), [value("i32", 97)]);


assert_return(() => invoke($0, `8s_good2`, [0n]), [value("i32", 97)]);


assert_return(() => invoke($0, `8s_good3`, [0n]), [value("i32", 98)]);


assert_return(() => invoke($0, `8s_good4`, [0n]), [value("i32", 99)]);


assert_return(() => invoke($0, `8s_good5`, [0n]), [value("i32", 122)]);


assert_return(() => invoke($0, `16u_good1`, [0n]), [value("i32", 25185)]);


assert_return(() => invoke($0, `16u_good2`, [0n]), [value("i32", 25185)]);


assert_return(() => invoke($0, `16u_good3`, [0n]), [value("i32", 25442)]);


assert_return(() => invoke($0, `16u_good4`, [0n]), [value("i32", 25699)]);


assert_return(() => invoke($0, `16u_good5`, [0n]), [value("i32", 122)]);


assert_return(() => invoke($0, `16s_good1`, [0n]), [value("i32", 25185)]);


assert_return(() => invoke($0, `16s_good2`, [0n]), [value("i32", 25185)]);


assert_return(() => invoke($0, `16s_good3`, [0n]), [value("i32", 25442)]);


assert_return(() => invoke($0, `16s_good4`, [0n]), [value("i32", 25699)]);


assert_return(() => invoke($0, `16s_good5`, [0n]), [value("i32", 122)]);


assert_return(() => invoke($0, `32_good1`, [0n]), [value("i32", 1684234849)]);


assert_return(() => invoke($0, `32_good2`, [0n]), [value("i32", 1684234849)]);


assert_return(() => invoke($0, `32_good3`, [0n]), [value("i32", 1701077858)]);


assert_return(() => invoke($0, `32_good4`, [0n]), [value("i32", 1717920867)]);


assert_return(() => invoke($0, `32_good5`, [0n]), [value("i32", 122)]);


assert_return(() => invoke($0, `8u_good1`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good2`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good3`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good4`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good5`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good1`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good2`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good3`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good4`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good5`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good1`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good2`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good3`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good4`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good5`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good1`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good2`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good3`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good4`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good5`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good1`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good2`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good3`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good4`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good5`, [65507n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good1`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good2`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good3`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good4`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8u_good5`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good1`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good2`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good3`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good4`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `8s_good5`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good1`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good2`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good3`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good4`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16u_good5`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good1`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good2`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good3`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good4`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `16s_good5`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good1`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good2`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good3`, [65508n]), [value("i32", 0)]);


assert_return(() => invoke($0, `32_good4`, [65508n]), [value("i32", 0)]);


assert_trap(() => invoke($0, `32_good5`, [65508n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `8u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `8s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `16u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `16s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `32_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `8u_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `8s_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `16u_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `16s_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `32_bad`, [1n]), `out of bounds memory access`);


let $1 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "abcdefghijklmnopqrstuvwxyz")

  (func (export "8u_good1") (param $$i i64) (result i64)
    (i64.load8_u offset=0 (local.get $$i))                   ;; 97 'a'
  )
  (func (export "8u_good2") (param $$i i64) (result i64)
    (i64.load8_u align=1 (local.get $$i))                    ;; 97 'a'
  )
  (func (export "8u_good3") (param $$i i64) (result i64)
    (i64.load8_u offset=1 align=1 (local.get $$i))           ;; 98 'b'
  )
  (func (export "8u_good4") (param $$i i64) (result i64)
    (i64.load8_u offset=2 align=1 (local.get $$i))           ;; 99 'c'
  )
  (func (export "8u_good5") (param $$i i64) (result i64)
    (i64.load8_u offset=25 align=1 (local.get $$i))          ;; 122 'z'
  )

  (func (export "8s_good1") (param $$i i64) (result i64)
    (i64.load8_s offset=0 (local.get $$i))                   ;; 97 'a'
  )
  (func (export "8s_good2") (param $$i i64) (result i64)
    (i64.load8_s align=1 (local.get $$i))                    ;; 97 'a'
  )
  (func (export "8s_good3") (param $$i i64) (result i64)
    (i64.load8_s offset=1 align=1 (local.get $$i))           ;; 98 'b'
  )
  (func (export "8s_good4") (param $$i i64) (result i64)
    (i64.load8_s offset=2 align=1 (local.get $$i))           ;; 99 'c'
  )
  (func (export "8s_good5") (param $$i i64) (result i64)
    (i64.load8_s offset=25 align=1 (local.get $$i))          ;; 122 'z'
  )

  (func (export "16u_good1") (param $$i i64) (result i64)
    (i64.load16_u offset=0 (local.get $$i))                 ;; 25185 'ab'
  )
  (func (export "16u_good2") (param $$i i64) (result i64)
    (i64.load16_u align=1 (local.get $$i))                  ;; 25185 'ab'
  )
  (func (export "16u_good3") (param $$i i64) (result i64)
    (i64.load16_u offset=1 align=1 (local.get $$i))         ;; 25442 'bc'
  )
  (func (export "16u_good4") (param $$i i64) (result i64)
    (i64.load16_u offset=2 align=2 (local.get $$i))         ;; 25699 'cd'
  )
  (func (export "16u_good5") (param $$i i64) (result i64)
    (i64.load16_u offset=25 align=2 (local.get $$i))        ;; 122 'z\\0'
  )

  (func (export "16s_good1") (param $$i i64) (result i64)
    (i64.load16_s offset=0 (local.get $$i))                 ;; 25185 'ab'
  )
  (func (export "16s_good2") (param $$i i64) (result i64)
    (i64.load16_s align=1 (local.get $$i))                  ;; 25185 'ab'
  )
  (func (export "16s_good3") (param $$i i64) (result i64)
    (i64.load16_s offset=1 align=1 (local.get $$i))         ;; 25442 'bc'
  )
  (func (export "16s_good4") (param $$i i64) (result i64)
    (i64.load16_s offset=2 align=2 (local.get $$i))         ;; 25699 'cd'
  )
  (func (export "16s_good5") (param $$i i64) (result i64)
    (i64.load16_s offset=25 align=2 (local.get $$i))        ;; 122 'z\\0'
  )

  (func (export "32u_good1") (param $$i i64) (result i64)
    (i64.load32_u offset=0 (local.get $$i))                 ;; 1684234849 'abcd'
  )
  (func (export "32u_good2") (param $$i i64) (result i64)
    (i64.load32_u align=1 (local.get $$i))                  ;; 1684234849 'abcd'
  )
  (func (export "32u_good3") (param $$i i64) (result i64)
    (i64.load32_u offset=1 align=1 (local.get $$i))         ;; 1701077858 'bcde'
  )
  (func (export "32u_good4") (param $$i i64) (result i64)
    (i64.load32_u offset=2 align=2 (local.get $$i))         ;; 1717920867 'cdef'
  )
  (func (export "32u_good5") (param $$i i64) (result i64)
    (i64.load32_u offset=25 align=4 (local.get $$i))        ;; 122 'z\\0\\0\\0'
  )

  (func (export "32s_good1") (param $$i i64) (result i64)
    (i64.load32_s offset=0 (local.get $$i))                 ;; 1684234849 'abcd'
  )
  (func (export "32s_good2") (param $$i i64) (result i64)
    (i64.load32_s align=1 (local.get $$i))                  ;; 1684234849 'abcd'
  )
  (func (export "32s_good3") (param $$i i64) (result i64)
    (i64.load32_s offset=1 align=1 (local.get $$i))         ;; 1701077858 'bcde'
  )
  (func (export "32s_good4") (param $$i i64) (result i64)
    (i64.load32_s offset=2 align=2 (local.get $$i))         ;; 1717920867 'cdef'
  )
  (func (export "32s_good5") (param $$i i64) (result i64)
    (i64.load32_s offset=25 align=4 (local.get $$i))        ;; 122 'z\\0\\0\\0'
  )

  (func (export "64_good1") (param $$i i64) (result i64)
    (i64.load offset=0 (local.get $$i))                     ;; 0x6867666564636261 'abcdefgh'
  )
  (func (export "64_good2") (param $$i i64) (result i64)
    (i64.load align=1 (local.get $$i))                      ;; 0x6867666564636261 'abcdefgh'
  )
  (func (export "64_good3") (param $$i i64) (result i64)
    (i64.load offset=1 align=1 (local.get $$i))             ;; 0x6968676665646362 'bcdefghi'
  )
  (func (export "64_good4") (param $$i i64) (result i64)
    (i64.load offset=2 align=2 (local.get $$i))             ;; 0x6a69686766656463 'cdefghij'
  )
  (func (export "64_good5") (param $$i i64) (result i64)
    (i64.load offset=25 align=8 (local.get $$i))            ;; 122 'z\\0\\0\\0\\0\\0\\0\\0'
  )

  (func (export "8u_bad") (param $$i i64)
    (drop (i64.load8_u offset=4294967295 (local.get $$i)))
  )
  (func (export "8s_bad") (param $$i i64)
    (drop (i64.load8_s offset=4294967295 (local.get $$i)))
  )
  (func (export "16u_bad") (param $$i i64)
    (drop (i64.load16_u offset=4294967295 (local.get $$i)))
  )
  (func (export "16s_bad") (param $$i i64)
    (drop (i64.load16_s offset=4294967295 (local.get $$i)))
  )
  (func (export "32u_bad") (param $$i i64)
    (drop (i64.load32_u offset=4294967295 (local.get $$i)))
  )
  (func (export "32s_bad") (param $$i i64)
    (drop (i64.load32_s offset=4294967295 (local.get $$i)))
  )
  (func (export "64_bad") (param $$i i64)
    (drop (i64.load offset=4294967295 (local.get $$i)))
  )
)`);


assert_return(() => invoke($1, `8u_good1`, [0n]), [value("i64", 97n)]);


assert_return(() => invoke($1, `8u_good2`, [0n]), [value("i64", 97n)]);


assert_return(() => invoke($1, `8u_good3`, [0n]), [value("i64", 98n)]);


assert_return(() => invoke($1, `8u_good4`, [0n]), [value("i64", 99n)]);


assert_return(() => invoke($1, `8u_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `8s_good1`, [0n]), [value("i64", 97n)]);


assert_return(() => invoke($1, `8s_good2`, [0n]), [value("i64", 97n)]);


assert_return(() => invoke($1, `8s_good3`, [0n]), [value("i64", 98n)]);


assert_return(() => invoke($1, `8s_good4`, [0n]), [value("i64", 99n)]);


assert_return(() => invoke($1, `8s_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `16u_good1`, [0n]), [value("i64", 25185n)]);


assert_return(() => invoke($1, `16u_good2`, [0n]), [value("i64", 25185n)]);


assert_return(() => invoke($1, `16u_good3`, [0n]), [value("i64", 25442n)]);


assert_return(() => invoke($1, `16u_good4`, [0n]), [value("i64", 25699n)]);


assert_return(() => invoke($1, `16u_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `16s_good1`, [0n]), [value("i64", 25185n)]);


assert_return(() => invoke($1, `16s_good2`, [0n]), [value("i64", 25185n)]);


assert_return(() => invoke($1, `16s_good3`, [0n]), [value("i64", 25442n)]);


assert_return(() => invoke($1, `16s_good4`, [0n]), [value("i64", 25699n)]);


assert_return(() => invoke($1, `16s_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `32u_good1`, [0n]), [value("i64", 1684234849n)]);


assert_return(() => invoke($1, `32u_good2`, [0n]), [value("i64", 1684234849n)]);


assert_return(() => invoke($1, `32u_good3`, [0n]), [value("i64", 1701077858n)]);


assert_return(() => invoke($1, `32u_good4`, [0n]), [value("i64", 1717920867n)]);


assert_return(() => invoke($1, `32u_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `32s_good1`, [0n]), [value("i64", 1684234849n)]);


assert_return(() => invoke($1, `32s_good2`, [0n]), [value("i64", 1684234849n)]);


assert_return(() => invoke($1, `32s_good3`, [0n]), [value("i64", 1701077858n)]);


assert_return(() => invoke($1, `32s_good4`, [0n]), [value("i64", 1717920867n)]);


assert_return(() => invoke($1, `32s_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `64_good1`, [0n]), [value("i64", 7523094288207667809n)]);


assert_return(() => invoke($1, `64_good2`, [0n]), [value("i64", 7523094288207667809n)]);


assert_return(() => invoke($1, `64_good3`, [0n]), [value("i64", 7595434461045744482n)]);


assert_return(() => invoke($1, `64_good4`, [0n]), [value("i64", 7667774633883821155n)]);


assert_return(() => invoke($1, `64_good5`, [0n]), [value("i64", 122n)]);


assert_return(() => invoke($1, `8u_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good1`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good2`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good3`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good4`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good5`, [65503n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8u_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `8s_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16u_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `16s_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32u_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good4`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `32s_good5`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good1`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good2`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good3`, [65504n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `64_good4`, [65504n]), [value("i64", 0n)]);


assert_trap(() => invoke($1, `64_good5`, [65504n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `8u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `8s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `16u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `16s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `32u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `32s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `64_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `8u_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `8s_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `16u_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `16s_bad`, [1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `32u_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `32s_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `64_bad`, [1n]), `out of bounds memory access`);


let $2 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "\\00\\00\\00\\00\\00\\00\\a0\\7f\\01\\00\\d0\\7f")

  (func (export "32_good1") (param $$i i64) (result f32)
    (f32.load offset=0 (local.get $$i))                   ;; 0.0 '\\00\\00\\00\\00'
  )
  (func (export "32_good2") (param $$i i64) (result f32)
    (f32.load align=1 (local.get $$i))                    ;; 0.0 '\\00\\00\\00\\00'
  )
  (func (export "32_good3") (param $$i i64) (result f32)
    (f32.load offset=1 align=1 (local.get $$i))           ;; 0.0 '\\00\\00\\00\\00'
  )
  (func (export "32_good4") (param $$i i64) (result f32)
    (f32.load offset=2 align=2 (local.get $$i))           ;; 0.0 '\\00\\00\\00\\00'
  )
  (func (export "32_good5") (param $$i i64) (result f32)
    (f32.load offset=8 align=4 (local.get $$i))           ;; nan:0x500001 '\\01\\00\\d0\\7f'
  )
  (func (export "32_bad") (param $$i i64)
    (drop (f32.load offset=4294967295 (local.get $$i)))
  )
)`);


assert_return(() => invoke($2, `32_good1`, [0n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good2`, [0n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good3`, [0n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good4`, [0n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good5`, [0n]), [bytes("f32", [0x1, 0x0, 0xd0, 0x7f])]);


assert_return(() => invoke($2, `32_good1`, [65524n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good2`, [65524n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good3`, [65524n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good4`, [65524n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good5`, [65524n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good1`, [65525n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good2`, [65525n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good3`, [65525n]), [value("f32", 0)]);


assert_return(() => invoke($2, `32_good4`, [65525n]), [value("f32", 0)]);


assert_trap(() => invoke($2, `32_good5`, [65525n]), `out of bounds memory access`);


assert_trap(() => invoke($2, `32_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($2, `32_bad`, [1n]), `out of bounds memory access`);


let $3 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\f4\\7f\\01\\00\\00\\00\\00\\00\\fc\\7f")

  (func (export "64_good1") (param $$i i64) (result f64)
    (f64.load offset=0 (local.get $$i))                     ;; 0.0 '\\00\\00\\00\\00\\00\\00\\00\\00'
  )
  (func (export "64_good2") (param $$i i64) (result f64)
    (f64.load align=1 (local.get $$i))                      ;; 0.0 '\\00\\00\\00\\00\\00\\00\\00\\00'
  )
  (func (export "64_good3") (param $$i i64) (result f64)
    (f64.load offset=1 align=1 (local.get $$i))             ;; 0.0 '\\00\\00\\00\\00\\00\\00\\00\\00'
  )
  (func (export "64_good4") (param $$i i64) (result f64)
    (f64.load offset=2 align=2 (local.get $$i))             ;; 0.0 '\\00\\00\\00\\00\\00\\00\\00\\00'
  )
  (func (export "64_good5") (param $$i i64) (result f64)
    (f64.load offset=18 align=8 (local.get $$i))            ;; nan:0xc000000000001 '\\01\\00\\00\\00\\00\\00\\fc\\7f'
  )
  (func (export "64_bad") (param $$i i64)
    (drop (f64.load offset=4294967295 (local.get $$i)))
  )
)`);


assert_return(() => invoke($3, `64_good1`, [0n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good2`, [0n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good3`, [0n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good4`, [0n]), [value("f64", 0)]);


assert_return(
  () => invoke($3, `64_good5`, [0n]),
  [bytes("f64", [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0xfc, 0x7f])],
);


assert_return(() => invoke($3, `64_good1`, [65510n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good2`, [65510n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good3`, [65510n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good4`, [65510n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good5`, [65510n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good1`, [65511n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good2`, [65511n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good3`, [65511n]), [value("f64", 0)]);


assert_return(() => invoke($3, `64_good4`, [65511n]), [value("f64", 0)]);


assert_trap(() => invoke($3, `64_good5`, [65511n]), `out of bounds memory access`);


assert_trap(() => invoke($3, `64_bad`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($3, `64_bad`, [1n]), `out of bounds memory access`);
