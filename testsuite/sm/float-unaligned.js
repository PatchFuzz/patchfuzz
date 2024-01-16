













function makeLoadStore(numBallast, ty, offset) {
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    let loadtxt =
      `(func (export "get_${ty}_${offset}") (param $p i32) (result ${ty})
         ${ballast(() => `
              (i32.const 8)
              (i32.store (i32.const 8) (i32.add (i32.load (i32.const 8)) (i32.const 1)))
              (${ty}.load (i32.const 8))`)}

         (${ty}.store (i32.const 0) (${ty}.load offset=${offset} (local.get $p)))

         ${ballast(() => `
             ${ty}.store`)}

         (${ty}.load (i32.const 0)))`;

    
    let storetxt =
      `(func (export "set_${ty}_${offset}") (param $p i32) (param $v ${ty})
         (local $tmp ${ty})
         ${ballast(() => `
              (i32.const 8)
              (i32.store (i32.const 8) (i32.add (i32.load (i32.const 8)) (i32.const 1)))
              (${ty}.load (i32.const 8))`)}

         (local.set $tmp (${ty}.add (local.get $v) (${ty}.load (i32.const 16))))
         (${ty}.store offset=${offset} (local.get $p) (local.get $tmp))

         ${ballast(() => `
             ${ty}.store`)}
         (${ty}.store (i32.const 8) (local.get $v)))`;

    return `${loadtxt}
            ${storetxt}`;

    function ballast(thunk) {
        let s = "";
        for ( let i=0 ; i < numBallast; i++ )
            s += thunk();
        return s;
    }
}





function makeInstance(numBallast, offset) {
    let txt =
        `(module
           (memory (export "memory") 1 1)
           ${makeLoadStore(numBallast, 'f64', offset)}
           ${makeLoadStore(numBallast, 'f32', offset)})`;
    return new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(txt)));
}


for ( let offset=0 ; offset < 8; offset++ ) {

    
    
    for ( let numBallast=0; numBallast < 16; numBallast++ ) {
        let ins = makeInstance(numBallast, offset);
        let mem = ins.exports.memory;
        let buf = new DataView(mem.buffer);

        
        for ( let i=0; i < 9; i++ ) {
	    let offs = 256+i;
            let val = Math.PI+i;

            buf.setFloat64(offs + offset, val, true);
            assertEq(ins.exports["get_f64_" + offset](offs), val);

            ins.exports["set_f64_" + offset](offs + 32, val);
            assertEq(buf.getFloat64(offs + 32 + offset, true), val);
        }

        for ( let i=0; i < 9; i++ ) {
            let offs = 512+i;
            let val = Math.fround(Math.PI+i);

            buf.setFloat32(offs + offset, val, true);
            assertEq(ins.exports["get_f32_" + offset](offs), val);

            ins.exports["set_f32_" + offset](offs + 32, val);
            assertEq(buf.getFloat32(offs + 32 + offset, true), val);
        }
    }
}
