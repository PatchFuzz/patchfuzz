





var conf = getBuildConfiguration();
var excluded = conf.arm64 || conf["arm64-simulator"] || conf.arm || conf["arm-simulator"];
var thirtytwobit = conf["pointer-byte-size"] == 4;

const RuntimeError = WebAssembly.RuntimeError;

function storeModuleSrc(type, ext, offset, align) {
    var load_ext = ext === '' ? '' : ext + '_s';
    return `(module
       (memory (export "mem") 1)
       (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f")
       (data (i32.const 16) "\\f0\\f1\\f2\\f3\\f4\\f5\\f6\\f7\\f8\\f9\\fa\\fb\\fc\\fd\\fe\\ff")
       (func $store (param i32) (param ${type})
         (${type}.store${ext}
          offset=${offset}
          ${align != 0 ? 'align=' + align : ''}
          (local.get 0)
          (local.get 1)
         )
       ) (export "store" (func 0))
       (func $load (param i32) (result ${type})
        (${type}.load${load_ext}
         offset=${offset}
         ${align != 0 ? 'align=' + align : ''}
         (local.get 0)
        )
       ) (export "load" (func 1)))`;
}

function storeModule(type, ext, offset, align, exportBox = null) {
    let exports = wasmEvalText(storeModuleSrc(type, ext, offset, align)).exports;
    if (exportBox !== null)
        exportBox.exports = exports;
    return exports;
}

function testStoreOOB(type, ext, base, offset, align, value) {
    let exportBox = {};
    if (type === 'i64') {
        assertErrorMessage(() => wasmAssert(
            storeModuleSrc(type, ext, offset, align),
            [{type, func: '$store', args: [`i32.const ${base}`, `i64.const ${value}`]}],
            {},
            exportBox
        ), RuntimeError, /index out of bounds/);
    } else {
        assertErrorMessage(() => storeModule(type, ext, offset, align, exportBox).store(base, value),
                           RuntimeError,
                           /index out of bounds/);
    }

    
    let buf = new Int8Array(exportBox.exports.mem.buffer);
    let len = buf.length;
    for ( let addr = base + offset ; addr < len; addr++ )
        assertEq(buf[addr], 0);
}



for (let align of [0,1,2,4]) {

    for (let offset of [0, 1, 2, 3, 4, 8, 16, 41, 0xfff0, 0xfff8]) {
        
        let lastValidIndex = 0x10000 - 1 - offset;
        if (align < 2 && !excluded) {
            testStoreOOB('i32', '8', lastValidIndex + 1, offset, align, -42);
        }

        
        lastValidIndex = 0x10000 - 2 - offset;
        if (align < 4 && !excluded) {
            testStoreOOB('i32', '16', lastValidIndex + 1, offset, align, -32768);
        }

        
        lastValidIndex = 0x10000 - 4 - offset;
        if (!excluded) {
            testStoreOOB('i32', '', lastValidIndex + 1, offset, align, 1337);
            testStoreOOB('f32', '', lastValidIndex + 1, offset, align, Math.fround(13.37));
        }

        
        lastValidIndex = 0x10000 - 8 - offset;
        if (!excluded) {
            testStoreOOB('f64', '', lastValidIndex + 1, offset, align, 1.23456789);
        }
    }

    for (let offset of [0, 1, 2, 3, 4, 8, 16, 41, 0xfff0, 0xfff8]) {
        
        let lastValidIndex = 0x10000 - 1 - offset;
        if (align < 2 && !excluded) {
            testStoreOOB('i64', '8', lastValidIndex + 1, offset, align, -42);
        }

        
        lastValidIndex = 0x10000 - 2 - offset;
        if (align < 4 && !excluded) {
            testStoreOOB('i64', '16', lastValidIndex + 1, offset, align, -32768);
        }

        
        lastValidIndex = 0x10000 - 4 - offset;
        if (!excluded) {
            testStoreOOB('i64', '32', lastValidIndex + 1, offset, align, 0xf1231337 | 0);
        }

        
        lastValidIndex = 0x10000 - 8 - offset;
        if (!excluded) {
            testStoreOOB('i64', '', lastValidIndex + 1, offset, align, '0x1234567887654321');
        }
    }
}





if (thirtytwobit) {
    testStoreOOB('i64', '', 0x10000 - 4, 0, 0, '0x0123456789abcdef');
}
