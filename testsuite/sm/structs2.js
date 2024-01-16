










{
    let txt =
    `(module
        (type $hasOOL (struct
                      ;; In-line storage; 16 fields that preserve 16-alignment
                      (field i64) (field i64) (field i64) (field i64) ;; 32
                      (field i64) (field i64) (field i64) (field i64) ;; 64
                      (field i64) (field i64) (field i64) (field i64) ;; 96
                      (field i64) (field i64) (field i64) (field i64) ;; 128
                      ;; Out-of-line storage (or maybe it starts earlier, but
                      ;; definitely not after this point).  16 bytes on the
                      ;; basis that StructLayout::close will round the requested
                      ;; block size up to at max the next 16 byte boundary.
                      ;; The goal is that the last (field i8) is right at the
                      ;; end of the resulting malloc'd block, so that, if the
                      ;; struct.new initialisation code mistakenly initialises
                      ;; that field with a write larger than 8 bits, then we'll
                      ;; have a write off the end of the malloc'd block, which
                      ;; ASan automation runs should detect.
                      (field i8) (field i8) (field i8) (field i8)
                      (field i8) (field i8) (field i8) (field i8)
                      (field i8) (field i8) (field i8) (field i8)
                      (field i8) (field i8) (field i8) (field i8))
        )
        (func (export "build8")
              (param $filler i64) (param $interesting i32) (result eqref)
          (struct.new $hasOOL
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
          )
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let obj8 = exports.build8(0x1234n, 0x5678);
    
    
    
    
    assertEq(obj8[0] + BigInt(obj8[31]), 0x12ACn); 
}


{
    let txt =
    `(module
        (type $hasOOL (struct
                      ;; in-line storage
                      (field i64) (field i64) (field i64) (field i64) ;; 32
                      (field i64) (field i64) (field i64) (field i64) ;; 64
                      (field i64) (field i64) (field i64) (field i64) ;; 96
                      (field i64) (field i64) (field i64) (field i64) ;; 128
                      (field i16) (field i16) (field i16) (field i16)
                      (field i16) (field i16) (field i16) (field i16))
        )
        (func (export "build16")
              (param $filler i64) (param $interesting i32) (result eqref)
          (struct.new $hasOOL
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $filler) (local.get $filler)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
                      (local.get $interesting) (local.get $interesting)
          )
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let obj16 = exports.build16(0x4321n, 0x7865);
    assertEq(obj16[0] + BigInt(obj16[23]), 0xBB86n); 
}


{
    let txt =
    `(module
        (type $struct8x8
           (struct (field i8) (field i8) (field i8) (field (mut i8))
                   (field i8) (field i8) (field i8) (field i8)
        ))
        (func (export "create") (result eqref)
           (struct.new $struct8x8 (i32.const 0x55) (i32.const 0x55)
                                  (i32.const 0x55) (i32.const 0x55)
                                  (i32.const 0x55) (i32.const 0x55)
                                  (i32.const 0x55) (i32.const 0x55)
        ))
        (func (export "writeField8x8_3") (param $p eqref) (param $v i32)
           (struct.set $struct8x8 3 (ref.cast $struct8x8 (local.get $p))
                                    (local.get $v))
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let theObject = exports.create();
    exports.writeField8x8_3(theObject, 0x77);
    assertEq(theObject[0], 0x55);
    assertEq(theObject[1], 0x55);
    assertEq(theObject[2], 0x55);
    assertEq(theObject[3], 0x77);
    assertEq(theObject[4], 0x55);
    assertEq(theObject[5], 0x55);
    assertEq(theObject[6], 0x55);
    assertEq(theObject[7], 0x55);
}


{
    let txt =
    `(module
        (type $struct16x8
           (struct (field i16) (field i16) (field i16) (field (mut i16))
                   (field i16) (field i16) (field i16) (field i16)
        ))
        (func (export "create") (result eqref)
           (struct.new $struct16x8 (i32.const 0x5555) (i32.const 0x5555)
                                   (i32.const 0x5555) (i32.const 0x5555)
                                   (i32.const 0x5555) (i32.const 0x5555)
                                   (i32.const 0x5555) (i32.const 0x5555)
        ))
        (func (export "writeField16x8_3") (param $p eqref) (param $v i32)
           (struct.set $struct16x8 3 (ref.cast $struct16x8 (local.get $p))
                                    (local.get $v))
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let theObject = exports.create();
    exports.writeField16x8_3(theObject, 0x7766);
    assertEq(theObject[0], 0x5555);
    assertEq(theObject[1], 0x5555);
    assertEq(theObject[2], 0x5555);
    assertEq(theObject[3], 0x7766);
    assertEq(theObject[4], 0x5555);
    assertEq(theObject[5], 0x5555);
    assertEq(theObject[6], 0x5555);
    assertEq(theObject[7], 0x5555);
}


{
    let txt =
    `(module
        (type $struct8x8
           (struct (field i8) (field i8) (field i8) (field i8)
                   (field i8) (field i8) (field i8) (field i8)
        ))
        (func (export "create") (result eqref)
           (struct.new $struct8x8 (i32.const 0x11) (i32.const 0x82)
                                  (i32.const 0x23) (i32.const 0x94)
                                  (i32.const 0x35) (i32.const 0xA6)
                                  (i32.const 0x47) (i32.const 0xB8)
        ))
        ;; read i8 from a field, unsigned extend, read value has top bit 0
        (func (export "readU8hi0") (param $p eqref) (result i32)
           (struct.get_u $struct8x8 2 (ref.cast $struct8x8 (local.get $p)))
        )
        ;; read i8 from a field, unsigned extend, read value has top bit 1
        (func (export "readU8hi1") (param $p eqref) (result i32)
           (struct.get_u $struct8x8 3 (ref.cast $struct8x8 (local.get $p)))
        )
        ;; read i8 from a field, signed extend, read value has top bit 0
        (func (export "readS8hi0") (param $p eqref) (result i32)
           (struct.get_s $struct8x8 4 (ref.cast $struct8x8 (local.get $p)))
        )
        ;; read i8 from a field, signed extend, read value has top bit 1
        (func (export "readS8hi1") (param $p eqref) (result i32)
           (struct.get_s $struct8x8 5 (ref.cast $struct8x8 (local.get $p)))
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let theObject = exports.create();
    assertEq(exports.readU8hi0(theObject), 0x23);  
    assertEq(exports.readU8hi1(theObject), 0x94);  
    assertEq(exports.readS8hi0(theObject), 0x35);  
    assertEq(exports.readS8hi1(theObject), -0x5A); 
}


{
    let txt =
    `(module
        (type $struct16x8
           (struct (field i16) (field i16) (field i16) (field i16)
                   (field i16) (field i16) (field i16) (field i16)
        ))
        (func (export "create") (result eqref)
           (struct.new $struct16x8 (i32.const 0x11FF) (i32.const 0x82FE)
                                   (i32.const 0x23FD) (i32.const 0x94FC)
                                   (i32.const 0x35FB) (i32.const 0xA6FA)
                                   (i32.const 0x47F9) (i32.const 0xB8F8)
        ))
        ;; read i16 from a field, unsigned extend, read value has top bit 0
        (func (export "readU16hi0") (param $p eqref) (result i32)
           (struct.get_u $struct16x8 2 (ref.cast $struct16x8 (local.get $p)))
        )
        ;; read i16 from a field, unsigned extend, read value has top bit 1
        (func (export "readU16hi1") (param $p eqref) (result i32)
           (struct.get_u $struct16x8 3 (ref.cast $struct16x8 (local.get $p)))
        )
        ;; read i16 from a field, signed extend, read value has top bit 0
        (func (export "readS16hi0") (param $p eqref) (result i32)
           (struct.get_s $struct16x8 4 (ref.cast $struct16x8 (local.get $p)))
        )
        ;; read i16 from a field, signed extend, read value has top bit 1
        (func (export "readS16hi1") (param $p eqref) (result i32)
           (struct.get_s $struct16x8 5 (ref.cast $struct16x8 (local.get $p)))
        )
     )`;
    let exports = wasmEvalText(txt).exports;
    let theObject = exports.create();
    assertEq(exports.readU16hi0(theObject), 0x23FD);  
    assertEq(exports.readU16hi1(theObject), 0x94FC);  
    assertEq(exports.readS16hi0(theObject), 0x35FB);  
    assertEq(exports.readS16hi1(theObject), -0x5906); 
}
