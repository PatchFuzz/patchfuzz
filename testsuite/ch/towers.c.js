

var referenceScore = 778;

if (typeof (WScript) === "undefined") {
    var WScript = {
        Echo: print
    }
}
var print = function () {};

var performance = performance || {};
performance.now = (function () {
    return performance.now ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        performance.webkitNow ||
        Date.now;
})();


function reportResult(score) {
    WScript.Echo("### SCORE: " + (100 * referenceScore / score));
}

var top = {};
top.JetStream = {
    goodTime: performance.now,
    reportResult: reportResult
};

var __time_before = top.JetStream.goodTime();





















var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');






var moduleOverrides = {};
for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
    }
}



var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
    
    
    if (!Module['print']) Module['print'] = function print(x) {
        process['stdout'].write(x + '\n');
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
        process['stderr'].write(x + '\n');
    };

    var nodeFS = require('fs');
    var nodePath = require('path');

    Module['read'] = function read(filename, binary) {
        filename = nodePath['normalize'](filename);
        var ret = nodeFS['readFileSync'](filename);
        
        if (!ret && filename != nodePath['resolve'](filename)) {
            filename = path.join(__dirname, '..', 'src', filename);
            ret = nodeFS['readFileSync'](filename);
        }
        if (ret && !binary) ret = ret.toString();
        return ret;
    };

    Module['readBinary'] = function readBinary(filename) {
        return Module['read'](filename, true)
    };

    Module['load'] = function load(f) {
        globalEval(read(f));
    };

    Module['arguments'] = process['argv'].slice(2);

    module['exports'] = Module;
} else if (ENVIRONMENT_IS_SHELL) {
    if (!Module['print']) Module['print'] = print;
    if (typeof printErr != 'undefined') Module['printErr'] = printErr; 

    if (typeof read != 'undefined') {
        Module['read'] = read;
    } else {
        Module['read'] = function read() {
            throw 'no read() available (jsc?)'
        };
    }

    Module['readBinary'] = function readBinary(f) {
        return read(f, 'binary');
    };

    if (typeof scriptArgs != 'undefined') {
        Module['arguments'] = scriptArgs;
    } else if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    this['Module'] = Module;

    eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); 
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    Module['read'] = function read(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send(null);
        return xhr.responseText;
    };

    if (typeof arguments != 'undefined') {
        Module['arguments'] = arguments;
    }

    if (typeof console !== 'undefined') {
        if (!Module['print']) Module['print'] = function print(x) {
            console.log(x);
        };
        if (!Module['printErr']) Module['printErr'] = function printErr(x) {
            console.log(x);
        };
    } else {
        
        var TRY_USE_DUMP = false;
        if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof (dump) !== "undefined") ? (function (x) {
            dump(x);
        }) : (function (x) {
            
        }));
    }

    if (ENVIRONMENT_IS_WEB) {
        this['Module'] = Module;
    } else {
        Module['load'] = importScripts;
    }
} else {
    
    throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
    eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
    Module['load'] = function load(f) {
        globalEval(Module['read'](f));
    };
}
if (!Module['print']) {
    Module['print'] = function () {};
}
if (!Module['printErr']) {
    Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
    Module['arguments'] = [];
}



Module.print = Module['print'];
Module.printErr = Module['printErr'];


Module['preRun'] = [];
Module['postRun'] = [];


for (var key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
    }
}









var Runtime = {
    stackSave: function () {
        return STACKTOP;
    },
    stackRestore: function (stackTop) {
        STACKTOP = stackTop;
    },
    forceAlign: function (target, quantum) {
        quantum = quantum || 4;
        if (quantum == 1) return target;
        if (isNumber(target) && isNumber(quantum)) {
            return Math.ceil(target / quantum) * quantum;
        } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
            return '(((' + target + ')+' + (quantum - 1) + ')&' + -quantum + ')';
        }
        return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
    },
    isNumberType: function (type) {
        return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
    },
    isPointerType: function isPointerType(type) {
        return type[type.length - 1] == '*';
    },
    isStructType: function isStructType(type) {
        if (isPointerType(type)) return false;
        if (isArrayType(type)) return true;
        if (/<?\{ ?[^}]* ?\}>?/.test(type)) return true; 
        
        return type[0] == '%';
    },
    INT_TYPES: {
        "i1": 0,
        "i8": 0,
        "i16": 0,
        "i32": 0,
        "i64": 0
    },
    FLOAT_TYPES: {
        "float": 0,
        "double": 0
    },
    or64: function (x, y) {
        var l = (x | 0) | (y | 0);
        var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
        return l + h;
    },
    and64: function (x, y) {
        var l = (x | 0) & (y | 0);
        var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
        return l + h;
    },
    xor64: function (x, y) {
        var l = (x | 0) ^ (y | 0);
        var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
        return l + h;
    },
    getNativeTypeSize: function (type) {
        switch (type) {
        case 'i1':
        case 'i8':
            return 1;
        case 'i16':
            return 2;
        case 'i32':
            return 4;
        case 'i64':
            return 8;
        case 'float':
            return 4;
        case 'double':
            return 8;
        default:
            {
                if (type[type.length - 1] === '*') {
                    return Runtime.QUANTUM_SIZE; 
                } else if (type[0] === 'i') {
                    var bits = parseInt(type.substr(1));
                    assert(bits % 8 === 0);
                    return bits / 8;
                } else {
                    return 0;
                }
            }
        }
    },
    getNativeFieldSize: function (type) {
        return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
    },
    dedup: function dedup(items, ident) {
        var seen = {};
        if (ident) {
            return items.filter(function (item) {
                if (seen[item[ident]]) return false;
                seen[item[ident]] = true;
                return true;
            });
        } else {
            return items.filter(function (item) {
                if (seen[item]) return false;
                seen[item] = true;
                return true;
            });
        }
    },
    set: function set() {
        var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
        var ret = {};
        for (var i = 0; i < args.length; i++) {
            ret[args[i]] = 0;
        }
        return ret;
    },
    STACK_ALIGN: 8,
    getAlignSize: function (type, size, vararg) {
        
        if (!vararg && (type == 'i64' || type == 'double')) return 8;
        if (!type) return Math.min(size, 8); 
        return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
    },
    calculateStructAlignment: function calculateStructAlignment(type) {
        type.flatSize = 0;
        type.alignSize = 0;
        var diffs = [];
        var prev = -1;
        var index = 0;
        type.flatIndexes = type.fields.map(function (field) {
            index++;
            var size, alignSize;
            if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
                size = Runtime.getNativeTypeSize(field); 
                alignSize = Runtime.getAlignSize(field, size);
            } else if (Runtime.isStructType(field)) {
                if (field[1] === '0') {
                    
                    
                    
                    size = 0;
                    if (Types.types[field]) {
                        alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
                    } else {
                        alignSize = type.alignSize || QUANTUM_SIZE;
                    }
                } else {
                    size = Types.types[field].flatSize;
                    alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
                }
            } else if (field[0] == 'b') {
                
                size = field.substr(1) | 0;
                alignSize = 1;
            } else if (field[0] === '<') {
                
                size = alignSize = Types.types[field].flatSize; 
            } else if (field[0] === 'i') {
                
                
                size = alignSize = parseInt(field.substr(1)) / 8;
                assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
            } else {
                assert(false, 'invalid type for calculateStructAlignment');
            }
            if (type.packed) alignSize = 1;
            type.alignSize = Math.max(type.alignSize, alignSize);
            var curr = Runtime.alignMemory(type.flatSize, alignSize); 
            type.flatSize = curr + size;
            if (prev >= 0) {
                diffs.push(curr - prev);
            }
            prev = curr;
            return curr;
        });
        if (type.name_ && type.name_[0] === '[') {
            
            
            type.flatSize = parseInt(type.name_.substr(1)) * type.flatSize / 2;
        }
        type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
        if (diffs.length == 0) {
            type.flatFactor = type.flatSize;
        } else if (Runtime.dedup(diffs).length == 1) {
            type.flatFactor = diffs[0];
        }
        type.needsFlattening = (type.flatFactor != 1);
        return type.flatIndexes;
    },
    generateStructInfo: function (struct, typeName, offset) {
        var type, alignment;
        if (typeName) {
            offset = offset || 0;
            type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
            if (!type) return null;
            if (type.fields.length != struct.length) {
                printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
                return null;
            }
            alignment = type.flatIndexes;
        } else {
            var type = {
                fields: struct.map(function (item) {
                    return item[0]
                })
            };
            alignment = Runtime.calculateStructAlignment(type);
        }
        var ret = {
            __size__: type.flatSize
        };
        if (typeName) {
            struct.forEach(function (item, i) {
                if (typeof item === 'string') {
                    ret[item] = alignment[i] + offset;
                } else {
                    
                    var key;
                    for (var k in item) key = k;
                    ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
                }
            });
        } else {
            struct.forEach(function (item, i) {
                ret[item[1]] = alignment[i];
            });
        }
        return ret;
    },
    dynCall: function (sig, ptr, args) {
        if (args && args.length) {
            if (!args.splice) args = Array.prototype.slice.call(args);
            args.splice(0, 0, ptr);
            return Module['dynCall_' + sig].apply(null, args);
        } else {
            return Module['dynCall_' + sig].call(null, ptr);
        }
    },
    functionPointers: [],
    addFunction: function (func) {
        for (var i = 0; i < Runtime.functionPointers.length; i++) {
            if (!Runtime.functionPointers[i]) {
                Runtime.functionPointers[i] = func;
                return 2 * (1 + i);
            }
        }
        throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
    },
    removeFunction: function (index) {
        Runtime.functionPointers[(index - 2) / 2] = null;
    },
    getAsmConst: function (code, numArgs) {
        
        if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
        var func = Runtime.asmConstCache[code];
        if (func) return func;
        var args = [];
        for (var i = 0; i < numArgs; i++) {
            args.push(String.fromCharCode(36) + i); 
        }
        code = Pointer_stringify(code);
        if (code[0] === '"') {
            
            if (code.indexOf('"', 1) === code.length - 1) {
                code = code.substr(1, code.length - 2);
            } else {
                
                abort('invalid EM_ASM input |' + code + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
            }
        }
        return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + code + ' })'); 
    },
    warnOnce: function (text) {
        if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
        if (!Runtime.warnOnce.shown[text]) {
            Runtime.warnOnce.shown[text] = 1;
            Module.printErr(text);
        }
    },
    funcWrappers: {},
    getFuncWrapper: function (func, sig) {
        assert(sig);
        if (!Runtime.funcWrappers[func]) {
            Runtime.funcWrappers[func] = function dynCall_wrapper() {
                return Runtime.dynCall(sig, func, arguments);
            };
        }
        return Runtime.funcWrappers[func];
    },
    UTF8Processor: function () {
        var buffer = [];
        var needed = 0;
        this.processCChar = function (code) {
            code = code & 0xFF;

            if (buffer.length == 0) {
                if ((code & 0x80) == 0x00) { 
                    return String.fromCharCode(code);
                }
                buffer.push(code);
                if ((code & 0xE0) == 0xC0) { 
                    needed = 1;
                } else if ((code & 0xF0) == 0xE0) { 
                    needed = 2;
                } else { 
                    needed = 3;
                }
                return '';
            }

            if (needed) {
                buffer.push(code);
                needed--;
                if (needed > 0) return '';
            }

            var c1 = buffer[0];
            var c2 = buffer[1];
            var c3 = buffer[2];
            var c4 = buffer[3];
            var ret;
            if (buffer.length == 2) {
                ret = String.fromCharCode(((c1 & 0x1F) << 6) | (c2 & 0x3F));
            } else if (buffer.length == 3) {
                ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F));
            } else {
                
                var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                    ((c3 & 0x3F) << 6) | (c4 & 0x3F);
                ret = String.fromCharCode(
                    Math.floor((codePoint - 0x10000) / 0x400) + 0xD800, (codePoint - 0x10000) % 0x400 + 0xDC00);
            }
            buffer.length = 0;
            return ret;
        }
        this.processJSString = function processJSString(string) {
            string = unescape(encodeURIComponent(string));
            var ret = [];
            for (var i = 0; i < string.length; i++) {
                ret.push(string.charCodeAt(i));
            }
            return ret;
        }
    },
    getCompilerSetting: function (name) {
        throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
    },
    stackAlloc: function (size) {
        var ret = STACKTOP;
        STACKTOP = (STACKTOP + size) | 0;
        STACKTOP = (((STACKTOP) + 7) & -8);
        return ret;
    },
    staticAlloc: function (size) {
        var ret = STATICTOP;
        STATICTOP = (STATICTOP + size) | 0;
        STATICTOP = (((STATICTOP) + 7) & -8);
        return ret;
    },
    dynamicAlloc: function (size) {
        var ret = DYNAMICTOP;
        DYNAMICTOP = (DYNAMICTOP + size) | 0;
        DYNAMICTOP = (((DYNAMICTOP) + 7) & -8);
        if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();;
        return ret;
    },
    alignMemory: function (size, quantum) {
        var ret = size = Math.ceil((size) / (quantum ? quantum : 8)) * (quantum ? quantum : 8);
        return ret;
    },
    makeBigInt: function (low, high, unsigned) {
        var ret = (unsigned ? ((+((low >>> 0))) + ((+((high >>> 0))) * (+4294967296))) : ((+((low >>> 0))) + ((+((high | 0))) * (+4294967296))));
        return ret;
    },
    GLOBAL_BASE: 8,
    QUANTUM_SIZE: 4,
    __dummy__: 0
}


Module['Runtime'] = Runtime;








var __THREW__ = 0; 

var ABORT = false; 
var EXITSTATUS = 0;

var undef = 0;


var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;

function assert(condition, text) {
    if (!condition) {
        abort('Assertion failed: ' + text);
    }
}

var globalScope = this;


















function ccall(ident, returnType, argTypes, args) {
    return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;


function getCFunc(ident) {
    try {
        var func = Module['_' + ident]; 
        if (!func) func = eval('_' + ident); 
    } catch (e) {}
    assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
    return func;
}


function ccallFunc(func, returnType, argTypes, args) {
    var stack = 0;

    function toC(value, type) {
        if (type == 'string') {
            if (value === null || value === undefined || value === 0) return 0; 
            value = intArrayFromString(value);
            type = 'array';
        }
        if (type == 'array') {
            if (!stack) stack = Runtime.stackSave();
            var ret = Runtime.stackAlloc(value.length);
            writeArrayToMemory(value, ret);
            return ret;
        }
        return value;
    }

    function fromC(value, type) {
        if (type == 'string') {
            return Pointer_stringify(value);
        }
        assert(type != 'array');
        return value;
    }
    var i = 0;
    var cArgs = args ? args.map(function (arg) {
        return toC(arg, argTypes[i++]);
    }) : [];
    var ret = fromC(func.apply(null, cArgs), returnType);
    if (stack) Runtime.stackRestore(stack);
    return ret;
}








function cwrap(ident, returnType, argTypes) {
    var func = getCFunc(ident);
    return function () {
        return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
    }
}
Module["cwrap"] = cwrap;









function setValue(ptr, value, type, noSafe) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; 
    switch (type) {
    case 'i1':
        HEAP8[(ptr)] = value;
        break;
    case 'i8':
        HEAP8[(ptr)] = value;
        break;
    case 'i16':
        HEAP16[((ptr) >> 1)] = value;
        break;
    case 'i32':
        HEAP32[((ptr) >> 2)] = value;
        break;
    case 'i64':
        (tempI64 = [value >>> 0, (tempDouble = value, (+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble) / (+4294967296)))), (+4294967295))) | 0) >>> 0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / (+4294967296)))))) >>> 0) : 0)], HEAP32[((ptr) >> 2)] = tempI64[0], HEAP32[(((ptr) + (4)) >> 2)] = tempI64[1]);
        break;
    case 'float':
        HEAPF32[((ptr) >> 2)] = value;
        break;
    case 'double':
        HEAPF64[((ptr) >> 3)] = value;
        break;
    default:
        abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;


function getValue(ptr, type, noSafe) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; 
    switch (type) {
    case 'i1':
        return HEAP8[(ptr)];
    case 'i8':
        return HEAP8[(ptr)];
    case 'i16':
        return HEAP16[((ptr) >> 1)];
    case 'i32':
        return HEAP32[((ptr) >> 2)];
    case 'i64':
        return HEAP32[((ptr) >> 2)];
    case 'float':
        return HEAPF32[((ptr) >> 2)];
    case 'double':
        return HEAPF64[((ptr) >> 3)];
    default:
        abort('invalid type for setValue: ' + type);
    }
    return null;
}
Module['getValue'] = getValue;

var ALLOC_NORMAL = 0; 
var ALLOC_STACK = 1; 
var ALLOC_STATIC = 2; 
var ALLOC_DYNAMIC = 3; 
var ALLOC_NONE = 4; 
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;














function allocate(slab, types, allocator, ptr) {
    var zeroinit, size;
    if (typeof slab === 'number') {
        zeroinit = true;
        size = slab;
    } else {
        zeroinit = false;
        size = slab.length;
    }

    var singleType = typeof types === 'string' ? types : null;

    var ret;
    if (allocator == ALLOC_NONE) {
        ret = ptr;
    } else {
        ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
    }

    if (zeroinit) {
        var ptr = ret,
            stop;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
            HEAP32[((ptr) >> 2)] = 0;
        }
        stop = ret + size;
        while (ptr < stop) {
            HEAP8[((ptr++) | 0)] = 0;
        }
        return ret;
    }

    if (singleType === 'i8') {
        if (slab.subarray || slab.slice) {
            HEAPU8.set(slab, ret);
        } else {
            HEAPU8.set(new Uint8Array(slab), ret);
        }
        return ret;
    }

    var i = 0,
        type, typeSize, previousType;
    while (i < size) {
        var curr = slab[i];

        if (typeof curr === 'function') {
            curr = Runtime.getFunctionIndex(curr);
        }

        type = singleType || types[i];
        if (type === 0) {
            i++;
            continue;
        }

        if (type == 'i64') type = 'i32'; 

        setValue(ret + i, curr, type);

        
        if (previousType !== type) {
            typeSize = Runtime.getNativeTypeSize(type);
            previousType = type;
        }
        i += typeSize;
    }

    return ret;
}
Module['allocate'] = allocate;

function Pointer_stringify(ptr,  length) {
    
    
    var hasUtf = false;
    var t;
    var i = 0;
    while (1) {
        t = HEAPU8[(((ptr) + (i)) | 0)];
        if (t >= 128) hasUtf = true;
        else if (t == 0 && !length) break;
        i++;
        if (length && i == length) break;
    }
    if (!length) length = i;

    var ret = '';

    if (!hasUtf) {
        var MAX_CHUNK = 1024; 
        var curr;
        while (length > 0) {
            curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
            ret = ret ? ret + curr : curr;
            ptr += MAX_CHUNK;
            length -= MAX_CHUNK;
        }
        return ret;
    }

    var utf8 = new Runtime.UTF8Processor();
    for (i = 0; i < length; i++) {
        t = HEAPU8[(((ptr) + (i)) | 0)];
        ret += utf8.processCChar(t);
    }
    return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;



function UTF16ToString(ptr) {
    var i = 0;

    var str = '';
    while (1) {
        var codeUnit = HEAP16[(((ptr) + (i * 2)) >> 1)];
        if (codeUnit == 0)
            return str;
        ++i;
        
        str += String.fromCharCode(codeUnit);
    }
}
Module['UTF16ToString'] = UTF16ToString;



function stringToUTF16(str, outPtr) {
    for (var i = 0; i < str.length; ++i) {
        
        var codeUnit = str.charCodeAt(i); 
        HEAP16[(((outPtr) + (i * 2)) >> 1)] = codeUnit;
    }
    
    HEAP16[(((outPtr) + (str.length * 2)) >> 1)] = 0;
}
Module['stringToUTF16'] = stringToUTF16;



function UTF32ToString(ptr) {
    var i = 0;

    var str = '';
    while (1) {
        var utf32 = HEAP32[(((ptr) + (i * 4)) >> 2)];
        if (utf32 == 0)
            return str;
        ++i;
        
        if (utf32 >= 0x10000) {
            var ch = utf32 - 0x10000;
            str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        } else {
            str += String.fromCharCode(utf32);
        }
    }
}
Module['UTF32ToString'] = UTF32ToString;




function stringToUTF32(str, outPtr) {
    var iChar = 0;
    for (var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
        
        var codeUnit = str.charCodeAt(iCodeUnit); 
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
            var trailSurrogate = str.charCodeAt(++iCodeUnit);
            codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
        }
        HEAP32[(((outPtr) + (iChar * 4)) >> 2)] = codeUnit;
        ++iChar;
    }
    
    HEAP32[(((outPtr) + (iChar * 4)) >> 2)] = 0;
}
Module['stringToUTF32'] = stringToUTF32;

function demangle(func) {
    var i = 3;
    
    var basicTypes = {
        'v': 'void',
        'b': 'bool',
        'c': 'char',
        's': 'short',
        'i': 'int',
        'l': 'long',
        'f': 'float',
        'd': 'double',
        'w': 'wchar_t',
        'a': 'signed char',
        'h': 'unsigned char',
        't': 'unsigned short',
        'j': 'unsigned int',
        'm': 'unsigned long',
        'x': 'long long',
        'y': 'unsigned long long',
        'z': '...'
    };
    var subs = [];
    var first = true;

    function dump(x) {
        
        if (x) Module.print(x);
        Module.print(func);
        var pre = '';
        for (var a = 0; a < i; a++) pre += ' ';
        Module.print(pre + '^');
    }

    function parseNested() {
        i++;
        if (func[i] === 'K') i++; 
        var parts = [];
        while (func[i] !== 'E') {
            if (func[i] === 'S') { 
                i++;
                var next = func.indexOf('_', i);
                var num = func.substring(i, next) || 0;
                parts.push(subs[num] || '?');
                i = next + 1;
                continue;
            }
            if (func[i] === 'C') { 
                parts.push(parts[parts.length - 1]);
                i += 2;
                continue;
            }
            var size = parseInt(func.substr(i));
            var pre = size.toString().length;
            if (!size || !pre) {
                i--;
                break;
            } 
            var curr = func.substr(i + pre, size);
            parts.push(curr);
            subs.push(curr);
            i += pre + size;
        }
        i++; 
        return parts;
    }

    function parse(rawList, limit, allowVoid) { 
        limit = limit || Infinity;
        var ret = '',
            list = [];

        function flushList() {
            return '(' + list.join(', ') + ')';
        }
        var name;
        if (func[i] === 'N') {
            
            name = parseNested().join('::');
            limit--;
            if (limit === 0) return rawList ? [name] : name;
        } else {
            
            if (func[i] === 'K' || (first && func[i] === 'L')) i++; 
            var size = parseInt(func.substr(i));
            if (size) {
                var pre = size.toString().length;
                name = func.substr(i + pre, size);
                i += pre + size;
            }
        }
        first = false;
        if (func[i] === 'I') {
            i++;
            var iList = parse(true);
            var iRet = parse(true, 1, true);
            ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
        } else {
            ret = name;
        }
        paramLoop: while (i < func.length && limit-- > 0) {
            
            var c = func[i++];
            if (c in basicTypes) {
                list.push(basicTypes[c]);
            } else {
                switch (c) {
                case 'P':
                    list.push(parse(true, 1, true)[0] + '*');
                    break; 
                case 'R':
                    list.push(parse(true, 1, true)[0] + '&');
                    break; 
                case 'L':
                    { 
                        i++; 
                        var end = func.indexOf('E', i);
                        var size = end - i;
                        list.push(func.substr(i, size));
                        i += size + 2; 
                        break;
                    }
                case 'A':
                    { 
                        var size = parseInt(func.substr(i));
                        i += size.toString().length;
                        if (func[i] !== '_') throw '?';
                        i++; 
                        list.push(parse(true, 1, true)[0] + ' [' + size + ']');
                        break;
                    }
                case 'E':
                    break paramLoop;
                default:
                    ret += '?' + c;
                    break paramLoop;
                }
            }
        }
        if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; 
        return rawList ? list : ret + flushList();
    }
    try {
        
        if (func == 'Object._main' || func == '_main') {
            return 'main()';
        }
        if (typeof func === 'number') func = Pointer_stringify(func);
        if (func[0] !== '_') return func;
        if (func[1] !== '_') return func; 
        if (func[2] !== 'Z') return func;
        switch (func[3]) {
        case 'n':
            return 'operator new()';
        case 'd':
            return 'operator delete()';
        }
        return parse();
    } catch (e) {
        return func;
    }
}

function demangleAll(text) {
    return text.replace(/__Z[\w\d_]+/g, function (x) {
        var y = demangle(x);
        return x === y ? x : (x + ' [' + y + ']')
    });
}

function stackTrace() {
    var stack = new Error().stack;
    return stack ? demangleAll(stack) : '(no stack trace available)'; 
}



var PAGE_SIZE = 4096;

function alignMemoryPage(x) {
    return (x + 4095) & -4096;
}

var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

var STATIC_BASE = 0,
    STATICTOP = 0,
    staticSealed = false; 
var STACK_BASE = 0,
    STACKTOP = 0,
    STACK_MAX = 0; 
var DYNAMIC_BASE = 0,
    DYNAMICTOP = 0; 

function enlargeMemory() {
    abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}

var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;

var totalMemory = 4096;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2 * TOTAL_STACK) {
    if (totalMemory < 16 * 1024 * 1024) {
        totalMemory *= 2;
    } else {
        totalMemory += 16 * 1024 * 1024
    }
}
if (totalMemory !== TOTAL_MEMORY) {
    Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be more reasonable');
    TOTAL_MEMORY = totalMemory;
}



assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
    'JS engine does not provide full typed array support');

var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);


HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
            callback();
            continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
            if (callback.arg === undefined) {
                Runtime.dynCall('v', func);
            } else {
                Runtime.dynCall('vi', func, [callback.arg]);
            }
        } else {
            func(callback.arg === undefined ? null : callback.arg);
        }
    }
}

var __ATPRERUN__ = []; 
var __ATINIT__ = []; 
var __ATMAIN__ = []; 
var __ATEXIT__ = []; 
var __ATPOSTRUN__ = []; 

var runtimeInitialized = false;

function preRun() {
    
    if (Module['preRun']) {
        if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
        while (Module['preRun'].length) {
            addOnPreRun(Module['preRun'].shift());
        }
    }
    callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
    if (runtimeInitialized) return;
    runtimeInitialized = true;
    callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
    callRuntimeCallbacks(__ATEXIT__);
}

function postRun() {
    
    if (Module['postRun']) {
        if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
        while (Module['postRun'].length) {
            addOnPostRun(Module['postRun'].shift());
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;

function addOnInit(cb) {
    __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;

function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;

function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;

function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;





function intArrayFromString(stringy, dontAddNull, length  ) {
    var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
    if (length) {
        ret.length = length;
    }
    if (!dontAddNull) {
        ret.push(0);
    }
    return ret;
}
Module['intArrayFromString'] = intArrayFromString;

function intArrayToString(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
        var chr = array[i];
        if (chr > 0xFF) {
            chr &= 0xFF;
        }
        ret.push(String.fromCharCode(chr));
    }
    return ret.join('');
}
Module['intArrayToString'] = intArrayToString;


function writeStringToMemory(string, buffer, dontAddNull) {
    var array = intArrayFromString(string, dontAddNull);
    var i = 0;
    while (i < array.length) {
        var chr = array[i];
        HEAP8[(((buffer) + (i)) | 0)] = chr;
        i = i + 1;
    }
}
Module['writeStringToMemory'] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
    for (var i = 0; i < array.length; i++) {
        HEAP8[(((buffer) + (i)) | 0)] = array[i];
    }
}
Module['writeArrayToMemory'] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; i++) {
        HEAP8[(((buffer) + (i)) | 0)] = str.charCodeAt(i);
    }
    if (!dontAddNull) HEAP8[(((buffer) + (str.length)) | 0)] = 0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
    if (value >= 0) {
        return value;
    }
    return bits <= 32 ? 2 * Math.abs(1 << (bits - 1)) + value 
        : Math.pow(2, bits) + value;
}

function reSign(value, bits, ignore) {
    if (value <= 0) {
        return value;
    }
    var half = bits <= 32 ? Math.abs(1 << (bits - 1)) 
        : Math.pow(2, bits - 1);
    if (value >= half && (bits <= 32 || value > half)) { 
        
        
        value = -2 * half + value; 
    }
    return value;
}


if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
    var ah = a >>> 16;
    var al = a & 0xffff;
    var bh = b >>> 16;
    var bl = b & 0xffff;
    return (al * bl + ((ah * bl + al * bh) << 16)) | 0;
};
Math.imul = Math['imul'];


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;








var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; 

function addRunDependency(id) {
    runDependencies++;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
    }
}
Module['addRunDependency'] = addRunDependency;

function removeRunDependency(id) {
    runDependencies--;
    if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback(); 
        }
    }
}
Module['removeRunDependency'] = removeRunDependency;

Module["preloadedImages"] = {}; 
Module["preloadedAudios"] = {}; 


var memoryInitializer = null;






STATIC_BASE = 8;

STATICTOP = STATIC_BASE + Runtime.alignMemory(283);

__ATINIT__.push();



allocate([32, 69, 114, 114, 111, 114, 32, 105, 110, 32, 84, 111, 119, 101, 114, 115, 58, 32, 37, 115, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 117, 116, 32, 111, 102, 32, 115, 112, 97, 99, 101, 32, 32, 32, 0, 100, 105, 115, 99, 32, 115, 105, 122, 101, 32, 101, 114, 114, 111, 114, 0, 110, 111, 116, 104, 105, 110, 103, 32, 116, 111, 32, 112, 111, 112, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 69, 114, 114, 111, 114, 32, 105, 110, 32, 84, 111, 119, 101, 114, 115, 46, 0, 0, 0, 0, 0, 0, 0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);




var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { 

    HEAP8[tempDoublePtr] = HEAP8[ptr];

    HEAP8[tempDoublePtr + 1] = HEAP8[ptr + 1];

    HEAP8[tempDoublePtr + 2] = HEAP8[ptr + 2];

    HEAP8[tempDoublePtr + 3] = HEAP8[ptr + 3];

}

function copyTempDouble(ptr) {

    HEAP8[tempDoublePtr] = HEAP8[ptr];

    HEAP8[tempDoublePtr + 1] = HEAP8[ptr + 1];

    HEAP8[tempDoublePtr + 2] = HEAP8[ptr + 2];

    HEAP8[tempDoublePtr + 3] = HEAP8[ptr + 3];

    HEAP8[tempDoublePtr + 4] = HEAP8[ptr + 4];

    HEAP8[tempDoublePtr + 5] = HEAP8[ptr + 5];

    HEAP8[tempDoublePtr + 6] = HEAP8[ptr + 6];

    HEAP8[tempDoublePtr + 7] = HEAP8[ptr + 7];

}


function _llvm_lifetime_end() {}

function _malloc(bytes) {
    
    var ptr = Runtime.dynamicAlloc(bytes + 8);
    return (ptr + 8) & 0xFFFFFFF8;
}
Module["_malloc"] = _malloc;




var ERRNO_CODES = {
    EPERM: 1,
    ENOENT: 2,
    ESRCH: 3,
    EINTR: 4,
    EIO: 5,
    ENXIO: 6,
    E2BIG: 7,
    ENOEXEC: 8,
    EBADF: 9,
    ECHILD: 10,
    EAGAIN: 11,
    EWOULDBLOCK: 11,
    ENOMEM: 12,
    EACCES: 13,
    EFAULT: 14,
    ENOTBLK: 15,
    EBUSY: 16,
    EEXIST: 17,
    EXDEV: 18,
    ENODEV: 19,
    ENOTDIR: 20,
    EISDIR: 21,
    EINVAL: 22,
    ENFILE: 23,
    EMFILE: 24,
    ENOTTY: 25,
    ETXTBSY: 26,
    EFBIG: 27,
    ENOSPC: 28,
    ESPIPE: 29,
    EROFS: 30,
    EMLINK: 31,
    EPIPE: 32,
    EDOM: 33,
    ERANGE: 34,
    ENOMSG: 42,
    EIDRM: 43,
    ECHRNG: 44,
    EL2NSYNC: 45,
    EL3HLT: 46,
    EL3RST: 47,
    ELNRNG: 48,
    EUNATCH: 49,
    ENOCSI: 50,
    EL2HLT: 51,
    EDEADLK: 35,
    ENOLCK: 37,
    EBADE: 52,
    EBADR: 53,
    EXFULL: 54,
    ENOANO: 55,
    EBADRQC: 56,
    EBADSLT: 57,
    EDEADLOCK: 35,
    EBFONT: 59,
    ENOSTR: 60,
    ENODATA: 61,
    ETIME: 62,
    ENOSR: 63,
    ENONET: 64,
    ENOPKG: 65,
    EREMOTE: 66,
    ENOLINK: 67,
    EADV: 68,
    ESRMNT: 69,
    ECOMM: 70,
    EPROTO: 71,
    EMULTIHOP: 72,
    EDOTDOT: 73,
    EBADMSG: 74,
    ENOTUNIQ: 76,
    EBADFD: 77,
    EREMCHG: 78,
    ELIBACC: 79,
    ELIBBAD: 80,
    ELIBSCN: 81,
    ELIBMAX: 82,
    ELIBEXEC: 83,
    ENOSYS: 38,
    ENOTEMPTY: 39,
    ENAMETOOLONG: 36,
    ELOOP: 40,
    EOPNOTSUPP: 95,
    EPFNOSUPPORT: 96,
    ECONNRESET: 104,
    ENOBUFS: 105,
    EAFNOSUPPORT: 97,
    EPROTOTYPE: 91,
    ENOTSOCK: 88,
    ENOPROTOOPT: 92,
    ESHUTDOWN: 108,
    ECONNREFUSED: 111,
    EADDRINUSE: 98,
    ECONNABORTED: 103,
    ENETUNREACH: 101,
    ENETDOWN: 100,
    ETIMEDOUT: 110,
    EHOSTDOWN: 112,
    EHOSTUNREACH: 113,
    EINPROGRESS: 115,
    EALREADY: 114,
    EDESTADDRREQ: 89,
    EMSGSIZE: 90,
    EPROTONOSUPPORT: 93,
    ESOCKTNOSUPPORT: 94,
    EADDRNOTAVAIL: 99,
    ENETRESET: 102,
    EISCONN: 106,
    ENOTCONN: 107,
    ETOOMANYREFS: 109,
    EUSERS: 87,
    EDQUOT: 122,
    ESTALE: 116,
    ENOTSUP: 95,
    ENOMEDIUM: 123,
    EILSEQ: 84,
    EOVERFLOW: 75,
    ECANCELED: 125,
    ENOTRECOVERABLE: 131,
    EOWNERDEAD: 130,
    ESTRPIPE: 86
};

var ERRNO_MESSAGES = {
    0: "Success",
    1: "Not super-user",
    2: "No such file or directory",
    3: "No such process",
    4: "Interrupted system call",
    5: "I/O error",
    6: "No such device or address",
    7: "Arg list too long",
    8: "Exec format error",
    9: "Bad file number",
    10: "No children",
    11: "No more processes",
    12: "Not enough core",
    13: "Permission denied",
    14: "Bad address",
    15: "Block device required",
    16: "Mount device busy",
    17: "File exists",
    18: "Cross-device link",
    19: "No such device",
    20: "Not a directory",
    21: "Is a directory",
    22: "Invalid argument",
    23: "Too many open files in system",
    24: "Too many open files",
    25: "Not a typewriter",
    26: "Text file busy",
    27: "File too large",
    28: "No space left on device",
    29: "Illegal seek",
    30: "Read only file system",
    31: "Too many links",
    32: "Broken pipe",
    33: "Math arg out of domain of func",
    34: "Math result not representable",
    35: "File locking deadlock error",
    36: "File or path name too long",
    37: "No record locks available",
    38: "Function not implemented",
    39: "Directory not empty",
    40: "Too many symbolic links",
    42: "No message of desired type",
    43: "Identifier removed",
    44: "Channel number out of range",
    45: "Level 2 not synchronized",
    46: "Level 3 halted",
    47: "Level 3 reset",
    48: "Link number out of range",
    49: "Protocol driver not attached",
    50: "No CSI structure available",
    51: "Level 2 halted",
    52: "Invalid exchange",
    53: "Invalid request descriptor",
    54: "Exchange full",
    55: "No anode",
    56: "Invalid request code",
    57: "Invalid slot",
    59: "Bad font file fmt",
    60: "Device not a stream",
    61: "No data (for no delay io)",
    62: "Timer expired",
    63: "Out of streams resources",
    64: "Machine is not on the network",
    65: "Package not installed",
    66: "The object is remote",
    67: "The link has been severed",
    68: "Advertise error",
    69: "Srmount error",
    70: "Communication error on send",
    71: "Protocol error",
    72: "Multihop attempted",
    73: "Cross mount point (not really error)",
    74: "Trying to read unreadable message",
    75: "Value too large for defined data type",
    76: "Given log. name not unique",
    77: "f.d. invalid for this operation",
    78: "Remote address changed",
    79: "Can   access a needed shared lib",
    80: "Accessing a corrupted shared lib",
    81: ".lib section in a.out corrupted",
    82: "Attempting to link in too many libs",
    83: "Attempting to exec a shared library",
    84: "Illegal byte sequence",
    86: "Streams pipe error",
    87: "Too many users",
    88: "Socket operation on non-socket",
    89: "Destination address required",
    90: "Message too long",
    91: "Protocol wrong type for socket",
    92: "Protocol not available",
    93: "Unknown protocol",
    94: "Socket type not supported",
    95: "Not supported",
    96: "Protocol family not supported",
    97: "Address family not supported by protocol family",
    98: "Address already in use",
    99: "Address not available",
    100: "Network interface is not configured",
    101: "Network is unreachable",
    102: "Connection reset by network",
    103: "Connection aborted",
    104: "Connection reset by peer",
    105: "No buffer space available",
    106: "Socket is already connected",
    107: "Socket is not connected",
    108: "Can't send after socket shutdown",
    109: "Too many references",
    110: "Connection timed out",
    111: "Connection refused",
    112: "Host is down",
    113: "Host is unreachable",
    114: "Socket already connected",
    115: "Connection already in progress",
    116: "Stale file handle",
    122: "Quota exceeded",
    123: "No medium (in tape drive)",
    125: "Operation canceled",
    130: "Previous owner died",
    131: "State not recoverable"
};


var ___errno_state = 0;

function ___setErrNo(value) {
    
    HEAP32[((___errno_state) >> 2)] = value;
    return value;
}

var PATH = {
    splitPath: function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
    },
    normalizeArray: function (parts, allowAboveRoot) {
        
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === '.') {
                parts.splice(i, 1);
            } else if (last === '..') {
                parts.splice(i, 1);
                up++;
            } else if (up) {
                parts.splice(i, 1);
                up--;
            }
        }
        
        if (allowAboveRoot) {
            for (; up--; up) {
                parts.unshift('..');
            }
        }
        return parts;
    },
    normalize: function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        
        path = PATH.normalizeArray(path.split('/').filter(function (p) {
            return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
            path = '.';
        }
        if (path && trailingSlash) {
            path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
    },
    dirname: function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
            
            return '.';
        }
        if (dir) {
            
            dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
    },
    basename: function (path) {
        
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
    },
    extname: function (path) {
        return PATH.splitPath(path)[3];
    },
    join: function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
    },
    join2: function (l, r) {
        return PATH.normalize(l + '/' + r);
    },
    resolve: function () {
        var resolvedPath = '',
            resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = (i >= 0) ? arguments[i] : FS.cwd();
            
            if (typeof path !== 'string') {
                throw new TypeError('Arguments to path.resolve must be strings');
            } else if (!path) {
                continue;
            }
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charAt(0) === '/';
        }
        
        
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function (p) {
            return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    },
    relative: function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);

        function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
                if (arr[start] !== '') break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
                if (arr[end] !== '') break;
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
            }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
    }
};

var TTY = {
    ttys: [],
    init: function () {
        
        
        
        
        
        
        
        
    },
    shutdown: function () {
        
        
        
        
        
        
        
        
        
    },
    register: function (dev, ops) {
        TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
        };
        FS.registerDevice(dev, TTY.stream_ops);
    },
    stream_ops: {
        open: function (stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
                throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
            }
            stream.tty = tty;
            stream.seekable = false;
        },
        close: function (stream) {
            
            if (stream.tty.output.length) {
                stream.tty.ops.put_char(stream.tty, 10);
            }
        },
        read: function (stream, buffer, offset, length, pos  ) {
            if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
                var result;
                try {
                    result = stream.tty.ops.get_char(stream.tty);
                } catch (e) {
                    throw new FS.ErrnoError(ERRNO_CODES.EIO);
                }
                if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                }
                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset + i] = result;
            }
            if (bytesRead) {
                stream.node.timestamp = Date.now();
            }
            return bytesRead;
        },
        write: function (stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
            }
            for (var i = 0; i < length; i++) {
                try {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                } catch (e) {
                    throw new FS.ErrnoError(ERRNO_CODES.EIO);
                }
            }
            if (length) {
                stream.node.timestamp = Date.now();
            }
            return i;
        }
    },
    default_tty_ops: {
        get_char: function (tty) {
            if (!tty.input.length) {
                var result = null;
                if (ENVIRONMENT_IS_NODE) {
                    result = process['stdin']['read']();
                    if (!result) {
                        if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                            return null; 
                        }
                        return undefined; 
                    }
                } else if (typeof window != 'undefined' &&
                    typeof window.prompt == 'function') {
                    
                    result = window.prompt('Input: '); 
                    if (result !== null) {
                        result += '\n';
                    }
                } else if (typeof readline == 'function') {
                    
                    result = readline();
                    if (result !== null) {
                        result += '\n';
                    }
                }
                if (!result) {
                    return null;
                }
                tty.input = intArrayFromString(result, true);
            }
            return tty.input.shift();
        },
        put_char: function (tty, val) {
            if (val === null || val === 10) {
                Module['print'](tty.output.join(''));
                tty.output = [];
            } else {
                tty.output.push(TTY.utf8.processCChar(val));
            }
        }
    },
    default_tty1_ops: {
        put_char: function (tty, val) {
            if (val === null || val === 10) {
                Module['printErr'](tty.output.join(''));
                tty.output = [];
            } else {
                tty.output.push(TTY.utf8.processCChar(val));
            }
        }
    }
};

var MEMFS = {
    ops_table: null,
    CONTENT_OWNING: 1,
    CONTENT_FLEXIBLE: 2,
    CONTENT_FIXED: 3,
    mount: function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511  , 0);
    },
    createNode: function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
                dir: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        lookup: MEMFS.node_ops.lookup,
                        mknod: MEMFS.node_ops.mknod,
                        rename: MEMFS.node_ops.rename,
                        unlink: MEMFS.node_ops.unlink,
                        rmdir: MEMFS.node_ops.rmdir,
                        readdir: MEMFS.node_ops.readdir,
                        symlink: MEMFS.node_ops.symlink
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek,
                        read: MEMFS.stream_ops.read,
                        write: MEMFS.stream_ops.write,
                        allocate: MEMFS.stream_ops.allocate,
                        mmap: MEMFS.stream_ops.mmap
                    }
                },
                link: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        readlink: MEMFS.node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: FS.chrdev_stream_ops
                },
            };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
        } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.contents = [];
            node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        
        if (parent) {
            parent.contents[name] = node;
        }
        return node;
    },
    ensureFlexible: function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
            var contents = node.contents;
            node.contents = Array.prototype.slice.call(contents);
            node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
    },
    node_ops: {
        getattr: function (node) {
            var attr = {};
            
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
                attr.size = 4096;
            } else if (FS.isFile(node.mode)) {
                attr.size = node.contents.length;
            } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length;
            } else {
                attr.size = 0;
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            
            
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr;
        },
        setattr: function (node, attr) {
            if (attr.mode !== undefined) {
                node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
                node.timestamp = attr.timestamp;
            }
            if (attr.size !== undefined) {
                MEMFS.ensureFlexible(node);
                var contents = node.contents;
                if (attr.size < contents.length) contents.length = attr.size;
                else
                    while (attr.size > contents.length) contents.push(0);
            }
        },
        lookup: function (parent, name) {
            throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },
        mknod: function (parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function (old_node, new_dir, new_name) {
            
            if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name);
                } catch (e) {}
                if (new_node) {
                    for (var i in new_node.contents) {
                        throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
                    }
                }
            }
            
            delete old_node.parent.contents[old_node.name];
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            old_node.parent = new_dir;
        },
        unlink: function (parent, name) {
            delete parent.contents[name];
        },
        rmdir: function (parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
            }
            delete parent.contents[name];
        },
        readdir: function (node) {
            var entries = ['.', '..']
            for (var key in node.contents) {
                if (!node.contents.hasOwnProperty(key)) {
                    continue;
                }
                entries.push(key);
            }
            return entries;
        },
        symlink: function (parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511  | 40960, 0);
            node.link = oldpath;
            return node;
        },
        readlink: function (node) {
            if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
            }
            return node.link;
        }
    },
    stream_ops: {
        read: function (stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length)
                return 0;
            var size = Math.min(contents.length - position, length);
            assert(size >= 0);
            if (size > 8 && contents.subarray) { 
                buffer.set(contents.subarray(position, position + size), offset);
            } else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i];
                }
            }
            return size;
        },
        write: function (stream, buffer, offset, length, position, canOwn) {
            var node = stream.node;
            node.timestamp = Date.now();
            var contents = node.contents;
            if (length && contents.length === 0 && position === 0 && buffer.subarray) {
                
                if (canOwn && offset === 0) {
                    node.contents = buffer; 
                    node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
                } else {
                    node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
                    node.contentMode = MEMFS.CONTENT_FIXED;
                }
                return length;
            }
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            while (contents.length < position) contents.push(0);
            for (var i = 0; i < length; i++) {
                contents[position + i] = buffer[offset + i];
            }
            return length;
        },
        llseek: function (stream, offset, whence) {
            var position = offset;
            if (whence === 1) { 
                position += stream.position;
            } else if (whence === 2) { 
                if (FS.isFile(stream.node.mode)) {
                    position += stream.node.contents.length;
                }
            }
            if (position < 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
            }
            stream.ungotten = [];
            stream.position = position;
            return position;
        },
        allocate: function (stream, offset, length) {
            MEMFS.ensureFlexible(stream.node);
            var contents = stream.node.contents;
            var limit = offset + length;
            while (limit > contents.length) contents.push(0);
        },
        mmap: function (stream, buffer, offset, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            
            if (!(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer)) {
                
                
                allocated = false;
                ptr = contents.byteOffset;
            } else {
                
                if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                        contents = contents.subarray(position, position + length);
                    } else {
                        contents = Array.prototype.slice.call(contents, position, position + length);
                    }
                }
                allocated = true;
                ptr = _malloc(length);
                if (!ptr) {
                    throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
                }
                buffer.set(contents, ptr);
            }
            return {
                ptr: ptr,
                allocated: allocated
            };
        }
    }
};

var IDBFS = {
    dbs: {},
    indexedDB: function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (mount) {
        
        return MEMFS.mount.apply(null, arguments);
    },
    syncfs: function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function (err, local) {
            if (err) return callback(err);

            IDBFS.getRemoteSet(mount, function (err, remote) {
                if (err) return callback(err);

                var src = populate ? remote : local;
                var dst = populate ? local : remote;

                IDBFS.reconcile(src, dst, callback);
            });
        });
    },
    getDB: function (name, callback) {
        
        var db = IDBFS.dbs[name];
        if (db) {
            return callback(null, db);
        }

        var req;
        try {
            req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
            return callback(e);
        }
        req.onupgradeneeded = function (e) {
            var db = e.target.result;
            var transaction = e.target.transaction;

            var fileStore;

            if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
                fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
            } else {
                fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
            }

            fileStore.createIndex('timestamp', 'timestamp', {
                unique: false
            });
        };
        req.onsuccess = function () {
            db = req.result;

            
            IDBFS.dbs[name] = db;
            callback(null, db);
        };
        req.onerror = function () {
            callback(this.error);
        };
    },
    getLocalSet: function (mount, callback) {
        var entries = {};

        function isRealDir(p) {
            return p !== '.' && p !== '..';
        };

        function toAbsolute(root) {
            return function (p) {
                return PATH.join2(root, p);
            }
        };

        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));

        while (check.length) {
            var path = check.pop();
            var stat;

            try {
                stat = FS.stat(path);
            } catch (e) {
                return callback(e);
            }

            if (FS.isDir(stat.mode)) {
                check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
            }

            entries[path] = {
                timestamp: stat.mtime
            };
        }

        return callback(null, {
            type: 'local',
            entries: entries
        });
    },
    getRemoteSet: function (mount, callback) {
        var entries = {};

        IDBFS.getDB(mount.mountpoint, function (err, db) {
            if (err) return callback(err);

            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = function () {
                callback(this.error);
            };

            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');

            index.openKeyCursor().onsuccess = function (event) {
                var cursor = event.target.result;

                if (!cursor) {
                    return callback(null, {
                        type: 'remote',
                        db: db,
                        entries: entries
                    });
                }

                entries[cursor.primaryKey] = {
                    timestamp: cursor.key
                };

                cursor.continue();
            };
        });
    },
    loadLocalEntry: function (path, callback) {
        var stat, node;

        try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
        } catch (e) {
            return callback(e);
        }

        if (FS.isDir(stat.mode)) {
            return callback(null, {
                timestamp: stat.mtime,
                mode: stat.mode
            });
        } else if (FS.isFile(stat.mode)) {
            return callback(null, {
                timestamp: stat.mtime,
                mode: stat.mode,
                contents: node.contents
            });
        } else {
            return callback(new Error('node type not supported'));
        }
    },
    storeLocalEntry: function (path, entry, callback) {
        try {
            if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode);
            } else if (FS.isFile(entry.mode)) {
                FS.writeFile(path, entry.contents, {
                    encoding: 'binary',
                    canOwn: true
                });
            } else {
                return callback(new Error('node type not supported'));
            }

            FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
            return callback(e);
        }

        callback(null);
    },
    removeLocalEntry: function (path, callback) {
        try {
            var lookup = FS.lookupPath(path);
            var stat = FS.stat(path);

            if (FS.isDir(stat.mode)) {
                FS.rmdir(path);
            } else if (FS.isFile(stat.mode)) {
                FS.unlink(path);
            }
        } catch (e) {
            return callback(e);
        }

        callback(null);
    },
    loadRemoteEntry: function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function (event) {
            callback(null, event.target.result);
        };
        req.onerror = function () {
            callback(this.error);
        };
    },
    storeRemoteEntry: function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function () {
            callback(null);
        };
        req.onerror = function () {
            callback(this.error);
        };
    },
    removeRemoteEntry: function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function () {
            callback(null);
        };
        req.onerror = function () {
            callback(this.error);
        };
    },
    reconcile: function (src, dst, callback) {
        var total = 0;

        var create = [];
        Object.keys(src.entries).forEach(function (key) {
            var e = src.entries[key];
            var e2 = dst.entries[key];
            if (!e2 || e.timestamp > e2.timestamp) {
                create.push(key);
                total++;
            }
        });

        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
            var e = dst.entries[key];
            var e2 = src.entries[key];
            if (!e2) {
                remove.push(key);
                total++;
            }
        });

        if (!total) {
            return callback(null);
        }

        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);

        function done(err) {
            if (err) {
                if (!done.errored) {
                    done.errored = true;
                    return callback(err);
                }
                return;
            }
            if (++completed >= total) {
                return callback(null);
            }
        };

        transaction.onerror = function () {
            done(this.error);
        };

        
        
        create.sort().forEach(function (path) {
            if (dst.type === 'local') {
                IDBFS.loadRemoteEntry(store, path, function (err, entry) {
                    if (err) return done(err);
                    IDBFS.storeLocalEntry(path, entry, done);
                });
            } else {
                IDBFS.loadLocalEntry(path, function (err, entry) {
                    if (err) return done(err);
                    IDBFS.storeRemoteEntry(store, path, entry, done);
                });
            }
        });

        
        
        remove.sort().reverse().forEach(function (path) {
            if (dst.type === 'local') {
                IDBFS.removeLocalEntry(path, done);
            } else {
                IDBFS.removeRemoteEntry(store, path, done);
            }
        });
    }
};

var NODEFS = {
    isWindows: false,
    staticInit: function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
    },
    mount: function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
    },
    createNode: function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
    },
    getMode: function (path) {
        var stat;
        try {
            stat = fs.lstatSync(path);
            if (NODEFS.isWindows) {
                
                
                stat.mode = stat.mode | ((stat.mode & 146) >> 1);
            }
        } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
    },
    realPath: function (node) {
        var parts = [];
        while (node.parent !== node) {
            parts.push(node.name);
            node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
    },
    flagsToPermissionStringMap: {
        0: "r",
        1: "r+",
        2: "r+",
        64: "r",
        65: "r+",
        66: "r+",
        129: "rx+",
        193: "rx+",
        514: "w+",
        577: "w",
        578: "w+",
        705: "wx",
        706: "wx+",
        1024: "a",
        1025: "a",
        1026: "a+",
        1089: "a",
        1090: "a+",
        1153: "ax",
        1154: "ax+",
        1217: "ax",
        1218: "ax+",
        4096: "rs",
        4098: "rs+"
    },
    flagsToPermissionString: function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
            return NODEFS.flagsToPermissionStringMap[flags];
        } else {
            return flags;
        }
    },
    node_ops: {
        getattr: function (node) {
            var path = NODEFS.realPath(node);
            var stat;
            try {
                stat = fs.lstatSync(path);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
            
            
            if (NODEFS.isWindows && !stat.blksize) {
                stat.blksize = 4096;
            }
            if (NODEFS.isWindows && !stat.blocks) {
                stat.blocks = (stat.size + stat.blksize - 1) / stat.blksize | 0;
            }
            return {
                dev: stat.dev,
                ino: stat.ino,
                mode: stat.mode,
                nlink: stat.nlink,
                uid: stat.uid,
                gid: stat.gid,
                rdev: stat.rdev,
                size: stat.size,
                atime: stat.atime,
                mtime: stat.mtime,
                ctime: stat.ctime,
                blksize: stat.blksize,
                blocks: stat.blocks
            };
        },
        setattr: function (node, attr) {
            var path = NODEFS.realPath(node);
            try {
                if (attr.mode !== undefined) {
                    fs.chmodSync(path, attr.mode);
                    
                    node.mode = attr.mode;
                }
                if (attr.timestamp !== undefined) {
                    var date = new Date(attr.timestamp);
                    fs.utimesSync(path, date, date);
                }
                if (attr.size !== undefined) {
                    fs.truncateSync(path, attr.size);
                }
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        lookup: function (parent, name) {
            var path = PATH.join2(NODEFS.realPath(parent), name);
            var mode = NODEFS.getMode(path);
            return NODEFS.createNode(parent, name, mode);
        },
        mknod: function (parent, name, mode, dev) {
            var node = NODEFS.createNode(parent, name, mode, dev);
            
            var path = NODEFS.realPath(node);
            try {
                if (FS.isDir(node.mode)) {
                    fs.mkdirSync(path, node.mode);
                } else {
                    fs.writeFileSync(path, '', {
                        mode: node.mode
                    });
                }
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
            return node;
        },
        rename: function (oldNode, newDir, newName) {
            var oldPath = NODEFS.realPath(oldNode);
            var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
            try {
                fs.renameSync(oldPath, newPath);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        unlink: function (parent, name) {
            var path = PATH.join2(NODEFS.realPath(parent), name);
            try {
                fs.unlinkSync(path);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        rmdir: function (parent, name) {
            var path = PATH.join2(NODEFS.realPath(parent), name);
            try {
                fs.rmdirSync(path);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        readdir: function (node) {
            var path = NODEFS.realPath(node);
            try {
                return fs.readdirSync(path);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        symlink: function (parent, newName, oldPath) {
            var newPath = PATH.join2(NODEFS.realPath(parent), newName);
            try {
                fs.symlinkSync(oldPath, newPath);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        readlink: function (node) {
            var path = NODEFS.realPath(node);
            try {
                return fs.readlinkSync(path);
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        }
    },
    stream_ops: {
        open: function (stream) {
            var path = NODEFS.realPath(stream.node);
            try {
                if (FS.isFile(stream.node.mode)) {
                    stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
                }
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        close: function (stream) {
            try {
                if (FS.isFile(stream.node.mode) && stream.nfd) {
                    fs.closeSync(stream.nfd);
                }
            } catch (e) {
                if (!e.code) throw e;
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
        },
        read: function (stream, buffer, offset, length, position) {
            
            var nbuffer = new Buffer(length);
            var res;
            try {
                res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
            } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
            if (res > 0) {
                for (var i = 0; i < res; i++) {
                    buffer[offset + i] = nbuffer[i];
                }
            }
            return res;
        },
        write: function (stream, buffer, offset, length, position) {
            
            var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
            var res;
            try {
                res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
            } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
            }
            return res;
        },
        llseek: function (stream, offset, whence) {
            var position = offset;
            if (whence === 1) { 
                position += stream.position;
            } else if (whence === 2) { 
                if (FS.isFile(stream.node.mode)) {
                    try {
                        var stat = fs.fstatSync(stream.nfd);
                        position += stat.size;
                    } catch (e) {
                        throw new FS.ErrnoError(ERRNO_CODES[e.code]);
                    }
                }
            }

            if (position < 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
            }

            stream.position = position;
            return position;
        }
    }
};

var _stdin = allocate(1, "i32*", ALLOC_STATIC);

var _stdout = allocate(1, "i32*", ALLOC_STATIC);

var _stderr = allocate(1, "i32*", ALLOC_STATIC);

function _fflush(stream) {
    
    
    
}
var FS = {
    root: null,
    mounts: [],
    devices: [null],
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    ErrnoError: null,
    genericErrors: {},
    handleFSError: function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
    },
    lookupPath: function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};

        var defaults = {
            follow_mount: true,
            recurse_count: 0
        };
        for (var key in defaults) {
            if (opts[key] === undefined) {
                opts[key] = defaults[key];
            }
        }

        if (opts.recurse_count > 8) { 
            throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }

        
        var parts = PATH.normalizeArray(path.split('/').filter(function (p) {
            return !!p;
        }), false);

        
        var current = FS.root;
        var current_path = '/';

        for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length - 1);
            if (islast && opts.parent) {
                
                break;
            }

            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);

            
            if (FS.isMountpoint(current)) {
                if (!islast || (islast && opts.follow_mount)) {
                    current = current.mounted.root;
                }
            }

            
            
            if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH.resolve(PATH.dirname(current_path), link);

                    var lookup = FS.lookupPath(current_path, {
                        recurse_count: opts.recurse_count
                    });
                    current = lookup.node;

                    if (count++ > 40) { 
                        throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
                    }
                }
            }
        }

        return {
            path: current_path,
            node: current
        };
    },
    getPath: function (node) {
        var path;
        while (true) {
            if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path) return mount;
                return mount[mount.length - 1] !== '/' ? mount + '/' + path : mount + path;
            }
            path = path ? node.name + '/' + path : node.name;
            node = node.parent;
        }
    },
    hashName: function (parentid, name) {
        var hash = 0;


        for (var i = 0; i < name.length; i++) {
            hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
    },
    hashAddNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
    },
    hashRemoveNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
        } else {
            var current = FS.nameTable[hash];
            while (current) {
                if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break;
                }
                current = current.name_next;
            }
        }
    },
    lookupNode: function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
                return node;
            }
        }
        
        return FS.lookup(parent, name);
    },
    createNode: function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
            FS.FSNode = function (parent, name, mode, rdev) {
                if (!parent) {
                    parent = this; 
                }
                this.parent = parent;
                this.mount = parent.mount;
                this.mounted = null;
                this.id = FS.nextInode++;
                this.name = name;
                this.mode = mode;
                this.node_ops = {};
                this.stream_ops = {};
                this.rdev = rdev;
            };

            FS.FSNode.prototype = {};

            
            var readMode = 292 | 73;
            var writeMode = 146;

            
            
            Object.defineProperties(FS.FSNode.prototype, {
                read: {
                    get: function () {
                        return (this.mode & readMode) === readMode;
                    },
                    set: function (val) {
                        val ? this.mode |= readMode : this.mode &= ~readMode;
                    }
                },
                write: {
                    get: function () {
                        return (this.mode & writeMode) === writeMode;
                    },
                    set: function (val) {
                        val ? this.mode |= writeMode : this.mode &= ~writeMode;
                    }
                },
                isFolder: {
                    get: function () {
                        return FS.isDir(this.mode);
                    },
                },
                isDevice: {
                    get: function () {
                        return FS.isChrdev(this.mode);
                    },
                },
            });
        }

        var node = new FS.FSNode(parent, name, mode, rdev);

        FS.hashAddNode(node);

        return node;
    },
    destroyNode: function (node) {
        FS.hashRemoveNode(node);
    },
    isRoot: function (node) {
        return node === node.parent;
    },
    isMountpoint: function (node) {
        return !!node.mounted;
    },
    isFile: function (mode) {
        return (mode & 61440) === 32768;
    },
    isDir: function (mode) {
        return (mode & 61440) === 16384;
    },
    isLink: function (mode) {
        return (mode & 61440) === 40960;
    },
    isChrdev: function (mode) {
        return (mode & 61440) === 8192;
    },
    isBlkdev: function (mode) {
        return (mode & 61440) === 24576;
    },
    isFIFO: function (mode) {
        return (mode & 61440) === 4096;
    },
    isSocket: function (mode) {
        return (mode & 49152) === 49152;
    },
    flagModes: {
        "r": 0,
        "rs": 1052672,
        "r+": 2,
        "w": 577,
        "wx": 705,
        "xw": 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        "a": 1089,
        "ax": 1217,
        "xa": 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
    },
    modeStringToFlags: function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
            throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
    },
    flagsToPermissionString: function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
            perms += 'w';
        }
        return perms;
    },
    nodePermissions: function (node, perms) {
        if (FS.ignorePermissions) {
            return 0;
        }
        
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
            return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
            return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
            return ERRNO_CODES.EACCES;
        }
        return 0;
    },
    mayLookup: function (dir) {
        return FS.nodePermissions(dir, 'x');
    },
    mayCreate: function (dir, name) {
        try {
            var node = FS.lookupNode(dir, name);
            return ERRNO_CODES.EEXIST;
        } catch (e) {}
        return FS.nodePermissions(dir, 'wx');
    },
    mayDelete: function (dir, name, isdir) {
        var node;
        try {
            node = FS.lookupNode(dir, name);
        } catch (e) {
            return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
            return err;
        }
        if (isdir) {
            if (!FS.isDir(node.mode)) {
                return ERRNO_CODES.ENOTDIR;
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return ERRNO_CODES.EBUSY;
            }
        } else {
            if (FS.isDir(node.mode)) {
                return ERRNO_CODES.EISDIR;
            }
        }
        return 0;
    },
    mayOpen: function (node, flags) {
        if (!node) {
            return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
            return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
            if ((flags & 2097155) !== 0 || 
                (flags & 512)) {
                return ERRNO_CODES.EISDIR;
            }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
                return fd;
            }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
    },
    getStream: function (fd) {
        return FS.streams[fd];
    },
    createStream: function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
            FS.FSStream = function () {};
            FS.FSStream.prototype = {};
            
            Object.defineProperties(FS.FSStream.prototype, {
                object: {
                    get: function () {
                        return this.node;
                    },
                    set: function (val) {
                        this.node = val;
                    }
                },
                isRead: {
                    get: function () {
                        return (this.flags & 2097155) !== 1;
                    }
                },
                isWrite: {
                    get: function () {
                        return (this.flags & 2097155) !== 0;
                    }
                },
                isAppend: {
                    get: function () {
                        return (this.flags & 1024);
                    }
                }
            });
        }
        if (stream.__proto__) {
            
            stream.__proto__ = FS.FSStream.prototype;
        } else {
            var newStream = new FS.FSStream();
            for (var p in stream) {
                newStream[p] = stream[p];
            }
            stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
    },
    closeStream: function (fd) {
        FS.streams[fd] = null;
    },
    getStreamFromPtr: function (ptr) {
        return FS.streams[ptr - 1];
    },
    getPtrForStream: function (stream) {
        return stream ? stream.fd + 1 : 0;
    },
    chrdev_stream_ops: {
        open: function (stream) {
            var device = FS.getDevice(stream.node.rdev);
            
            stream.stream_ops = device.stream_ops;
            
            if (stream.stream_ops.open) {
                stream.stream_ops.open(stream);
            }
        },
        llseek: function () {
            throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
    },
    major: function (dev) {
        return ((dev) >> 8);
    },
    minor: function (dev) {
        return ((dev) & 0xff);
    },
    makedev: function (ma, mi) {
        return ((ma) << 8 | (mi));
    },
    registerDevice: function (dev, ops) {
        FS.devices[dev] = {
            stream_ops: ops
        };
    },
    getDevice: function (dev) {
        return FS.devices[dev];
    },
    getMounts: function (mount) {
        var mounts = [];
        var check = [mount];

        while (check.length) {
            var m = check.pop();

            mounts.push(m);

            check.push.apply(check, m.mounts);
        }

        return mounts;
    },
    syncfs: function (populate, callback) {
        if (typeof (populate) === 'function') {
            callback = populate;
            populate = false;
        }

        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;

        function done(err) {
            if (err) {
                if (!done.errored) {
                    done.errored = true;
                    return callback(err);
                }
                return;
            }
            if (++completed >= mounts.length) {
                callback(null);
            }
        };

        
        mounts.forEach(function (mount) {
            if (!mount.type.syncfs) {
                return done(null);
            }
            mount.type.syncfs(mount, populate, done);
        });
    },
    mount: function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;

        if (root && FS.root) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
            });

            mountpoint = lookup.path; 
            node = lookup.node;

            if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
            }

            if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
            }
        }

        var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
        };

        
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;

        if (root) {
            FS.root = mountRoot;
        } else if (node) {
            
            node.mounted = mount;

            
            if (node.mount) {
                node.mount.mounts.push(mount);
            }
        }

        return mountRoot;
    },
    unmount: function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
        });

        if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }

        
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);

        Object.keys(FS.nameTable).forEach(function (hash) {
            var current = FS.nameTable[hash];

            while (current) {
                var next = current.name_next;

                if (mounts.indexOf(current.mount) !== -1) {
                    FS.destroyNode(current);
                }

                current = next;
            }
        });

        
        node.mounted = null;

        
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
    },
    lookup: function (parent, name) {
        return parent.node_ops.lookup(parent, name);
    },
    mknod: function (path, mode, dev) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
    },
    create: function (path, mode) {
        mode = mode !== undefined ? mode : 438  ;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
    },
    mkdir: function (path, mode) {
        mode = mode !== undefined ? mode : 511  ;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
    },
    mkdev: function (path, mode, dev) {
        if (typeof (dev) === 'undefined') {
            dev = mode;
            mode = 438  ;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
    },
    symlink: function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, {
            parent: true
        });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
    },
    rename: function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        
        var lookup, old_dir, new_dir;
        try {
            lookup = FS.lookupPath(old_path, {
                parent: true
            });
            old_dir = lookup.node;
            lookup = FS.lookupPath(new_path, {
                parent: true
            });
            new_dir = lookup.node;
        } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        
        if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        
        var old_node = FS.lookupNode(old_dir, old_name);
        
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        
        var new_node;
        try {
            new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
            
        }
        
        if (old_node === new_node) {
            return;
        }
        
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        
        
        err = new_node ?
            FS.mayDelete(new_dir, new_name, isdir) :
            FS.mayCreate(new_dir, new_name);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        
        if (new_dir !== old_dir) {
            err = FS.nodePermissions(old_dir, 'w');
            if (err) {
                throw new FS.ErrnoError(err);
            }
        }
        
        FS.hashRemoveNode(old_node);
        
        try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
            throw e;
        } finally {
            
            
            FS.hashAddNode(old_node);
        }
    },
    rmdir: function (path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
    },
    readdir: function (path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
    },
    unlink: function (path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
            
            if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
            throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
    },
    readlink: function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
    },
    stat: function (path, dontFollow) {
        var lookup = FS.lookupPath(path, {
            follow: !dontFollow
        });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
    },
    lstat: function (path) {
        return FS.stat(path, true);
    },
    chmod: function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node;
        } else {
            node = path;
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
            mode: (mode & 4095) | (node.mode & ~4095),
            timestamp: Date.now()
        });
    },
    lchmod: function (path, mode) {
        FS.chmod(path, mode, true);
    },
    fchmod: function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
    },
    chown: function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node;
        } else {
            node = path;
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
            timestamp: Date.now()
            
        });
    },
    lchown: function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
    },
    fchown: function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
    },
    truncate: function (path, len) {
        if (len < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
            var lookup = FS.lookupPath(path, {
                follow: true
            });
            node = lookup.node;
        } else {
            node = path;
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
            throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
        });
    },
    ftruncate: function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
    },
    utime: function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
        });
    },
    open: function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438  : mode;
        if ((flags & 64)) {
            mode = (mode & 4095) | 32768;
        } else {
            mode = 0;
        }
        var node;
        if (typeof path === 'object') {
            node = path;
        } else {
            path = PATH.normalize(path);
            try {
                var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                });
                node = lookup.node;
            } catch (e) {
                
            }
        }
        
        if ((flags & 64)) {
            if (node) {
                
                if ((flags & 128)) {
                    throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
                }
            } else {
                
                node = FS.mknod(path, mode, 0);
            }
        }
        if (!node) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        
        if (FS.isChrdev(node.mode)) {
            flags &= ~512;
        }
        
        var err = FS.mayOpen(node, flags);
        if (err) {
            throw new FS.ErrnoError(err);
        }
        
        if ((flags & 512)) {
            FS.truncate(node, 0);
        }
        
        flags &= ~(128 | 512);

        
        var stream = FS.createStream({
            node: node,
            path: FS.getPath(node), 
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            
            ungotten: [],
            error: false
        }, fd_start, fd_end);
        
        if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1;
                Module['printErr']('read file: ' + path);
            }
        }
        return stream;
    },
    close: function (stream) {
        try {
            if (stream.stream_ops.close) {
                stream.stream_ops.close(stream);
            }
        } catch (e) {
            throw e;
        } finally {
            FS.closeStream(stream.fd);
        }
    },
    llseek: function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
    },
    read: function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
            position = stream.position;
            seeking = false;
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
    },
    write: function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
            position = stream.position;
            seeking = false;
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
            
            FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
    },
    allocate: function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
    },
    mmap: function (stream, buffer, offset, length, position, prot, flags) {
        
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
    },
    ioctl: function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
    },
    readFile: function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
            throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
            ret = '';
            var utf8 = new Runtime.UTF8Processor();
            for (var i = 0; i < length; i++) {
                ret += utf8.processCChar(buf[i]);
            }
        } else if (opts.encoding === 'binary') {
            ret = buf;
        }
        FS.close(stream);
        return ret;
    },
    writeFile: function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
            throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
            var utf8 = new Runtime.UTF8Processor();
            var buf = new Uint8Array(utf8.processJSString(data));
            FS.write(stream, buf, 0, buf.length, 0, opts.canOwn);
        } else if (opts.encoding === 'binary') {
            FS.write(stream, data, 0, data.length, 0, opts.canOwn);
        }
        FS.close(stream);
    },
    cwd: function () {
        return FS.currentPath;
    },
    chdir: function (path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
            throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
    },
    createDefaultDirectories: function () {
        FS.mkdir('/tmp');
    },
    createDefaultDevices: function () {
        
        FS.mkdir('/dev');
        
        FS.registerDevice(FS.makedev(1, 3), {
            read: function () {
                return 0;
            },
            write: function () {
                return 0;
            }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        
        
        
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        
        
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
    },
    createStandardStreams: function () {
        
        
        

        
        
        
        
        if (Module['stdin']) {
            FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
            FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
            FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
            FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
            FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
            FS.symlink('/dev/tty1', '/dev/stderr');
        }

        
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin) >> 2)] = FS.getPtrForStream(stdin);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');

        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout) >> 2)] = FS.getPtrForStream(stdout);
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');

        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr) >> 2)] = FS.getPtrForStream(stderr);
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
    },
    ensureErrnoError: function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
                if (ERRNO_CODES[key] === errno) {
                    this.code = key;
                    break;
                }
            }
            this.message = ERRNO_MESSAGES[errno];
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        
        [ERRNO_CODES.ENOENT].forEach(function (code) {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = '<generic error, no stack>';
        });
    },
    staticInit: function () {
        FS.ensureErrnoError();

        FS.nameTable = new Array(4096);

        FS.mount(MEMFS, {}, '/');

        FS.createDefaultDirectories();
        FS.createDefaultDevices();
    },
    init: function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;

        FS.ensureErrnoError();

        
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];

        FS.createStandardStreams();
    },
    quit: function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
                continue;
            }
            FS.close(stream);
        }
    },
    getMode: function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
    },
    joinPath: function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
    },
    absolutePath: function (relative, base) {
        return PATH.resolve(base, relative);
    },
    standardizePath: function (path) {
        return PATH.normalize(path);
    },
    findObject: function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
            return ret.object;
        } else {
            ___setErrNo(ret.error);
            return null;
        }
    },
    analyzePath: function (path, dontResolveLastLink) {
        
        try {
            var lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            path = lookup.path;
        } catch (e) {}
        var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
        };
        try {
            var lookup = FS.lookupPath(path, {
                parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === '/';
        } catch (e) {
            ret.error = e.errno;
        };
        return ret;
    },
    createFolder: function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
    },
    createPath: function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
                FS.mkdir(current);
            } catch (e) {
                
            }
            parent = current;
        }
        return current;
    },
    createFile: function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
    },
    createDataFile: function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
            if (typeof data === 'string') {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                data = arr;
            }
            
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 'w');
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
        }
        return node;
    },
    createDevice: function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        
        
        FS.registerDevice(dev, {
            open: function (stream) {
                stream.seekable = false;
            },
            close: function (stream) {
                
                if (output && output.buffer && output.buffer.length) {
                    output(10);
                }
            },
            read: function (stream, buffer, offset, length, pos  ) {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input();
                    } catch (e) {
                        throw new FS.ErrnoError(ERRNO_CODES.EIO);
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                    }
                    if (result === null || result === undefined) break;
                    bytesRead++;
                    buffer[offset + i] = result;
                }
                if (bytesRead) {
                    stream.node.timestamp = Date.now();
                }
                return bytesRead;
            },
            write: function (stream, buffer, offset, length, pos) {
                for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i]);
                    } catch (e) {
                        throw new FS.ErrnoError(ERRNO_CODES.EIO);
                    }
                }
                if (length) {
                    stream.node.timestamp = Date.now();
                }
                return i;
            }
        });
        return FS.mkdev(path, mode, dev);
    },
    createLink: function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
    },
    forceLoadFile: function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
            
            try {
                
                
                obj.contents = intArrayFromString(Module['read'](obj.url), true);
            } catch (e) {
                success = false;
            }
        } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
    },
    createLazyFile: function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
            if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            
            function LazyUint8Array() {
                this.lengthKnown = false;
                this.chunks = []; 
            }
            LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
                if (idx > this.length - 1 || idx < 0) {
                    return undefined;
                }
                var chunkOffset = idx % this.chunkSize;
                var chunkNum = Math.floor(idx / this.chunkSize);
                return this.getter(chunkNum)[chunkOffset];
            }
            LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
                this.getter = getter;
            }
            LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
                
                var xhr = new XMLHttpRequest();
                xhr.open('HEAD', url, false);
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                var datalength = Number(xhr.getResponseHeader("Content-length"));
                var header;
                var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                var chunkSize = 1024 * 1024; 

                if (!hasByteServing) chunkSize = datalength;

                
                var doXHR = (function (from, to) {
                    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");

                    
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', url, false);
                    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);

                    
                    if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                    if (xhr.overrideMimeType) {
                        xhr.overrideMimeType('text/plain; charset=x-user-defined');
                    }

                    xhr.send(null);
                    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                    if (xhr.response !== undefined) {
                        return new Uint8Array(xhr.response || []);
                    } else {
                        return intArrayFromString(xhr.responseText || '', true);
                    }
                });
                var lazyArray = this;
                lazyArray.setDataGetter(function (chunkNum) {
                    var start = chunkNum * chunkSize;
                    var end = (chunkNum + 1) * chunkSize - 1; 
                    end = Math.min(end, datalength - 1); 
                    if (typeof (lazyArray.chunks[chunkNum]) === "undefined") {
                        lazyArray.chunks[chunkNum] = doXHR(start, end);
                    }
                    if (typeof (lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                    return lazyArray.chunks[chunkNum];
                });

                this._length = datalength;
                this._chunkSize = chunkSize;
                this.lengthKnown = true;
            }

            var lazyArray = new LazyUint8Array();
            Object.defineProperty(lazyArray, "length", {
                get: function () {
                    if (!this.lengthKnown) {
                        this.cacheLength();
                    }
                    return this._length;
                }
            });
            Object.defineProperty(lazyArray, "chunkSize", {
                get: function () {
                    if (!this.lengthKnown) {
                        this.cacheLength();
                    }
                    return this._chunkSize;
                }
            });

            var properties = {
                isDevice: false,
                contents: lazyArray
            };
        } else {
            var properties = {
                isDevice: false,
                url: url
            };
        }

        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        
        
        
        if (properties.contents) {
            node.contents = properties.contents;
        } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
        }
        
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function (key) {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
                if (!FS.forceLoadFile(node)) {
                    throw new FS.ErrnoError(ERRNO_CODES.EIO);
                }
                return fn.apply(null, arguments);
            };
        });
        
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
            if (!FS.forceLoadFile(node)) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            var contents = stream.node.contents;
            if (position >= contents.length)
                return 0;
            var size = Math.min(contents.length - position, length);
            assert(size >= 0);
            if (contents.slice) { 
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i];
                }
            } else {
                for (var i = 0; i < size; i++) { 
                    buffer[offset + i] = contents.get(position + i);
                }
            }
            return size;
        };
        node.stream_ops = stream_ops;
        return node;
    },
    createPreloadedFile: function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        
        
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;

        function processData(byteArray) {
            function finish(byteArray) {
                if (!dontCreateFile) {
                    FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
                }
                if (onload) onload();
                removeRunDependency('cp ' + fullname);
            }
            var handled = false;
            Module['preloadPlugins'].forEach(function (plugin) {
                if (handled) return;
                if (plugin['canHandle'](fullname)) {
                    plugin['handle'](byteArray, fullname, finish, function () {
                        if (onerror) onerror();
                        removeRunDependency('cp ' + fullname);
                    });
                    handled = true;
                }
            });
            if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
            Browser.asyncLoad(url, function (byteArray) {
                processData(byteArray);
            }, onerror);
        } else {
            processData(url);
        }
    },
    indexedDB: function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    DB_NAME: function () {
        return 'EM_FS_' + window.location.pathname;
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
            return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
            console.log('creating db');
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror();
            }
            paths.forEach(function (path) {
                var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                putRequest.onsuccess = function putRequest_onsuccess() {
                    ok++;
                    if (ok + fail == total) finish()
                };
                putRequest.onerror = function putRequest_onerror() {
                    fail++;
                    if (ok + fail == total) finish()
                };
            });
            transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
    },
    loadFilesFromDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
            return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; 
        openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            try {
                var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
            } catch (e) {
                onerror(e);
                return;
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror();
            }
            paths.forEach(function (path) {
                var getRequest = files.get(path);
                getRequest.onsuccess = function getRequest_onsuccess() {
                    if (FS.analyzePath(path).exists) {
                        FS.unlink(path);
                    }
                    FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                    ok++;
                    if (ok + fail == total) finish();
                };
                getRequest.onerror = function getRequest_onerror() {
                    fail++;
                    if (ok + fail == total) finish()
                };
            });
            transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
    }
};



function _mkport() {
    throw 'TODO'
}
var SOCKFS = {
    mount: function (mount) {
        return FS.createNode(null, '/', 16384 | 511  , 0);
    },
    createSocket: function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
            assert(streaming == (protocol == 6)); 
        }

        
        var sock = {
            family: family,
            type: type,
            protocol: protocol,
            server: null,
            peers: {},
            pending: [],
            recv_queue: [],
            sock_ops: SOCKFS.websocket_sock_ops
        };

        
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;

        
        
        var stream = FS.createStream({
            path: name,
            node: node,
            flags: FS.modeStringToFlags('r+'),
            seekable: false,
            stream_ops: SOCKFS.stream_ops
        });

        
        
        sock.stream = stream;

        return sock;
    },
    getSocket: function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
            return null;
        }
        return stream.node.sock;
    },
    stream_ops: {
        poll: function (stream) {
            var sock = stream.node.sock;
            return sock.sock_ops.poll(sock);
        },
        ioctl: function (stream, request, varargs) {
            var sock = stream.node.sock;
            return sock.sock_ops.ioctl(sock, request, varargs);
        },
        read: function (stream, buffer, offset, length, position  ) {
            var sock = stream.node.sock;
            var msg = sock.sock_ops.recvmsg(sock, length);
            if (!msg) {
                
                return 0;
            }
            buffer.set(msg.buffer, offset);
            return msg.buffer.length;
        },
        write: function (stream, buffer, offset, length, position  ) {
            var sock = stream.node.sock;
            return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },
        close: function (stream) {
            var sock = stream.node.sock;
            sock.sock_ops.close(sock);
        }
    },
    nextname: function () {
        if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
    },
    websocket_sock_ops: {
        createPeer: function (sock, addr, port) {
            var ws;

            if (typeof addr === 'object') {
                ws = addr;
                addr = null;
                port = null;
            }

            if (ws) {
                
                
                if (ws._socket) {
                    addr = ws._socket.remoteAddress;
                    port = ws._socket.remotePort;
                }
                
                
                else {
                    var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                    if (!result) {
                        throw new Error('WebSocket URL must be in the format ws(s)://address:port');
                    }
                    addr = result[1];
                    port = parseInt(result[2], 10);
                }
            } else {
                
                try {
                    var url = 'ws://' + addr + ':' + port;
                    
                    var opts = ENVIRONMENT_IS_NODE ? {
                        headers: {
                            'websocket-protocol': ['binary']
                        }
                    } : ['binary'];
                    
                    var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
                    ws = new WebSocket(url, opts);
                    ws.binaryType = 'arraybuffer';
                } catch (e) {
                    throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
                }
            }


            var peer = {
                addr: addr,
                port: port,
                socket: ws,
                dgram_send_queue: []
            };

            SOCKFS.websocket_sock_ops.addPeer(sock, peer);
            SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);

            
            
            
            if (sock.type === 2 && typeof sock.sport !== 'undefined') {
                peer.dgram_send_queue.push(new Uint8Array([
                    255, 255, 255, 255,
                    'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0), ((sock.sport & 0xff00) >> 8), (sock.sport & 0xff)
                ]));
            }

            return peer;
        },
        getPeer: function (sock, addr, port) {
            return sock.peers[addr + ':' + port];
        },
        addPeer: function (sock, peer) {
            sock.peers[peer.addr + ':' + peer.port] = peer;
        },
        removePeer: function (sock, peer) {
            delete sock.peers[peer.addr + ':' + peer.port];
        },
        handlePeerEvents: function (sock, peer) {
            var first = true;

            var handleOpen = function () {
                try {
                    var queued = peer.dgram_send_queue.shift();
                    while (queued) {
                        peer.socket.send(queued);
                        queued = peer.dgram_send_queue.shift();
                    }
                } catch (e) {
                    
                    
                    peer.socket.close();
                }
            };

            function handleMessage(data) {
                assert(typeof data !== 'string' && data.byteLength !== undefined); 
                data = new Uint8Array(data); 


                
                var wasfirst = first;
                first = false;
                if (wasfirst &&
                    data.length === 10 &&
                    data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                    data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
                    
                    var newport = ((data[8] << 8) | data[9]);
                    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                    peer.port = newport;
                    SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                    return;
                }

                sock.recv_queue.push({
                    addr: peer.addr,
                    port: peer.port,
                    data: data
                });
            };

            if (ENVIRONMENT_IS_NODE) {
                peer.socket.on('open', handleOpen);
                peer.socket.on('message', function (data, flags) {
                    if (!flags.binary) {
                        return;
                    }
                    handleMessage((new Uint8Array(data)).buffer); 
                });
                peer.socket.on('error', function () {
                    
                });
            } else {
                peer.socket.onopen = handleOpen;
                peer.socket.onmessage = function peer_socket_onmessage(event) {
                    handleMessage(event.data);
                };
            }
        },
        poll: function (sock) {
            if (sock.type === 1 && sock.server) {
                
                
                return sock.pending.length ? (64 | 1) : 0;
            }

            var mask = 0;
            var dest = sock.type === 1 ? 
                SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
                null;

            if (sock.recv_queue.length ||
                !dest || 
                (dest && dest.socket.readyState === dest.socket.CLOSING) ||
                (dest && dest.socket.readyState === dest.socket.CLOSED)) { 
                mask |= (64 | 1);
            }

            if (!dest || 
                (dest && dest.socket.readyState === dest.socket.OPEN)) {
                mask |= 4;
            }

            if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
                (dest && dest.socket.readyState === dest.socket.CLOSED)) {
                mask |= 16;
            }

            return mask;
        },
        ioctl: function (sock, request, arg) {
            switch (request) {
            case 21531:
                var bytes = 0;
                if (sock.recv_queue.length) {
                    bytes = sock.recv_queue[0].data.length;
                }
                HEAP32[((arg) >> 2)] = bytes;
                return 0;
            default:
                return ERRNO_CODES.EINVAL;
            }
        },
        close: function (sock) {
            
            if (sock.server) {
                try {
                    sock.server.close();
                } catch (e) {}
                sock.server = null;
            }
            
            var peers = Object.keys(sock.peers);
            for (var i = 0; i < peers.length; i++) {
                var peer = sock.peers[peers[i]];
                try {
                    peer.socket.close();
                } catch (e) {}
                SOCKFS.websocket_sock_ops.removePeer(sock, peer);
            }
            return 0;
        },
        bind: function (sock, addr, port) {
            if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL); 
            }
            sock.saddr = addr;
            sock.sport = port || _mkport();
            
            
            
            if (sock.type === 2) {
                
                if (sock.server) {
                    sock.server.close();
                    sock.server = null;
                }
                
                
                try {
                    sock.sock_ops.listen(sock, 0);
                } catch (e) {
                    if (!(e instanceof FS.ErrnoError)) throw e;
                    if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
                }
            }
        },
        connect: function (sock, addr, port) {
            if (sock.server) {
                throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
            }

            
            
            

            
            if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
                var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                if (dest) {
                    if (dest.socket.readyState === dest.socket.CONNECTING) {
                        throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
                    } else {
                        throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
                    }
                }
            }

            
            
            var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
            sock.daddr = peer.addr;
            sock.dport = peer.port;

            
            throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },
        listen: function (sock, backlog) {
            if (!ENVIRONMENT_IS_NODE) {
                throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
            }
            if (sock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL); 
            }
            var WebSocketServer = require('ws').Server;
            var host = sock.saddr;
            sock.server = new WebSocketServer({
                host: host,
                port: sock.sport
                
            });

            sock.server.on('connection', function (ws) {
                if (sock.type === 1) {
                    var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);

                    
                    var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
                    newsock.daddr = peer.addr;
                    newsock.dport = peer.port;

                    
                    sock.pending.push(newsock);
                } else {
                    
                    
                    
                    SOCKFS.websocket_sock_ops.createPeer(sock, ws);
                }
            });
            sock.server.on('closed', function () {
                sock.server = null;
            });
            sock.server.on('error', function () {
                
            });
        },
        accept: function (listensock) {
            if (!listensock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
            }
            var newsock = listensock.pending.shift();
            newsock.stream.flags = listensock.stream.flags;
            return newsock;
        },
        getname: function (sock, peer) {
            var addr, port;
            if (peer) {
                if (sock.daddr === undefined || sock.dport === undefined) {
                    throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                }
                addr = sock.daddr;
                port = sock.dport;
            } else {
                
                
                addr = sock.saddr || 0;
                port = sock.sport || 0;
            }
            return {
                addr: addr,
                port: port
            };
        },
        sendmsg: function (sock, buffer, offset, length, addr, port) {
            if (sock.type === 2) {
                
                
                if (addr === undefined || port === undefined) {
                    addr = sock.daddr;
                    port = sock.dport;
                }
                
                if (addr === undefined || port === undefined) {
                    throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
                }
            } else {
                
                addr = sock.daddr;
                port = sock.dport;
            }

            
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);

            
            if (sock.type === 1) {
                if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                    throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                } else if (dest.socket.readyState === dest.socket.CONNECTING) {
                    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                }
            }

            
            
            
            var data;
            if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
                data = buffer.slice(offset, offset + length);
            } else { 
                data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
            }

            
            
            
            if (sock.type === 2) {
                if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                    
                    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
                    }
                    dest.dgram_send_queue.push(data);
                    return length;
                }
            }

            try {
                
                dest.socket.send(data);
                return length;
            } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
            }
        },
        recvmsg: function (sock, length) {
            
            if (sock.type === 1 && sock.server) {
                
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }

            var queued = sock.recv_queue.shift();
            if (!queued) {
                if (sock.type === 1) {
                    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);

                    if (!dest) {
                        
                        throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
                    } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        
                        return null;
                    } else {
                        
                        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                    }
                } else {
                    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
                }
            }

            
            
            var queuedLength = queued.data.byteLength || queued.data.length;
            var queuedOffset = queued.data.byteOffset || 0;
            var queuedBuffer = queued.data.buffer || queued.data;
            var bytesRead = Math.min(length, queuedLength);
            var res = {
                buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
                addr: queued.addr,
                port: queued.port
            };


            
            if (sock.type === 1 && bytesRead < queuedLength) {
                var bytesRemaining = queuedLength - bytesRead;
                queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
                sock.recv_queue.unshift(queued);
            }

            return res;
        }
    }
};

function _send(fd, buf, len, flags) {
    var sock = SOCKFS.getSocket(fd);
    if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
    }
    
    return _write(fd, buf, len);
}

function _pwrite(fildes, buf, nbyte, offset) {
    
    
    var stream = FS.getStream(fildes);
    if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
    }
    try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
    } catch (e) {
        FS.handleFSError(e);
        return -1;
    }
}

function _write(fildes, buf, nbyte) {
    
    
    var stream = FS.getStream(fildes);
    if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
    }


    try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
    } catch (e) {
        FS.handleFSError(e);
        return -1;
    }
}


Module["_strlen"] = _strlen;

function _fileno(stream) {
    
    
    stream = FS.getStreamFromPtr(stream);
    if (!stream) return -1;
    return stream.fd;
}

function _fputs(s, stream) {
    
    
    var fd = _fileno(stream);
    return _write(fd, s, _strlen(s));
}

function _fputc(c, stream) {
    
    
    var chr = unSign(c & 0xFF);
    HEAP8[((_fputc.ret) | 0)] = chr;
    var fd = _fileno(stream);
    var ret = _write(fd, _fputc.ret, 1);
    if (ret == -1) {
        var streamObj = FS.getStreamFromPtr(stream);
        if (streamObj) streamObj.error = true;
        return -1;
    } else {
        return chr;
    }
}

function _puts(s) {
    
    
    
    var stdout = HEAP32[((_stdout) >> 2)];
    var ret = _fputs(s, stdout);
    if (ret < 0) {
        return ret;
    } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
    }
}


Module["_memset"] = _memset;

function _free() {}
Module["_free"] = _free;

function _llvm_lifetime_start() {}

var Browser = {
    mainLoop: {
        scheduler: null,
        method: "",
        shouldPause: false,
        paused: false,
        queue: [],
        pause: function () {
            Browser.mainLoop.shouldPause = true;
        },
        resume: function () {
            if (Browser.mainLoop.paused) {
                Browser.mainLoop.paused = false;
                Browser.mainLoop.scheduler();
            }
            Browser.mainLoop.shouldPause = false;
        },
        updateStatus: function () {
            if (Module['setStatus']) {
                var message = Module['statusMessage'] || 'Please wait...';
                var remaining = Browser.mainLoop.remainingBlockers;
                var expected = Browser.mainLoop.expectedBlockers;
                if (remaining) {
                    if (remaining < expected) {
                        Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
                    } else {
                        Module['setStatus'](message);
                    }
                } else {
                    Module['setStatus']('');
                }
            }
        }
    },
    isFullScreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; 

        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;

        try {
            new Blob();
            Browser.hasBlobConstructor = true;
        } catch (e) {
            Browser.hasBlobConstructor = false;
            console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
            console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.noImageDecoding = true;
        }

        
        
        
        
        
        
        

        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = null;
            if (Browser.hasBlobConstructor) {
                try {
                    b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    });
                    if (b.size !== byteArray.length) { 
                        
                        b = new Blob([(new Uint8Array(byteArray)).buffer], {
                            type: Browser.getMimetype(name)
                        });
                    }
                } catch (e) {
                    Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
                }
            }
            if (!b) {
                var bb = new Browser.BlobBuilder();
                bb.append((new Uint8Array(byteArray)).buffer); 
                b = bb.getBlob();
            }
            var url = Browser.URLObject.createObjectURL(b);
            var img = new Image();
            img.onload = function img_onload() {
                assert(img.complete, 'Image ' + name + ' could not be decoded');
                var canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                Module["preloadedImages"][name] = canvas;
                Browser.URLObject.revokeObjectURL(url);
                if (onload) onload(byteArray);
            };
            img.onerror = function img_onerror(event) {
                console.log('Image ' + url + ' could not be decoded');
                if (onerror) onerror();
            };
            img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);

        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4) in {
                '.ogg': 1,
                '.wav': 1,
                '.mp3': 1
            };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;

            function finish(audio) {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = audio;
                if (onload) onload(byteArray);
            }

            function fail() {
                if (done) return;
                done = true;
                Module["preloadedAudios"][name] = new Audio(); 
                if (onerror) onerror();
            }
            if (Browser.hasBlobConstructor) {
                try {
                    var b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    });
                } catch (e) {
                    return fail();
                }
                var url = Browser.URLObject.createObjectURL(b); 
                var audio = new Audio();
                audio.addEventListener('canplaythrough', function () {
                    finish(audio)
                }, false); 
                audio.onerror = function audio_onerror(event) {
                    if (done) return;
                    console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');

                    function encode64(data) {
                        var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var PAD = '=';
                        var ret = '';
                        var leftchar = 0;
                        var leftbits = 0;
                        for (var i = 0; i < data.length; i++) {
                            leftchar = (leftchar << 8) | data[i];
                            leftbits += 8;
                            while (leftbits >= 6) {
                                var curr = (leftchar >> (leftbits - 6)) & 0x3f;
                                leftbits -= 6;
                                ret += BASE[curr];
                            }
                        }
                        if (leftbits == 2) {
                            ret += BASE[(leftchar & 3) << 4];
                            ret += PAD + PAD;
                        } else if (leftbits == 4) {
                            ret += BASE[(leftchar & 0xf) << 2];
                            ret += PAD;
                        }
                        return ret;
                    }
                    audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
                    finish(audio); 
                };
                audio.src = url;
                
                Browser.safeSetTimeout(function () {
                    finish(audio); 
                }, 10000);
            } else {
                return fail();
            }
        };
        Module['preloadPlugins'].push(audioPlugin);

        

        var canvas = Module['canvas'];

        
        

        canvas.requestPointerLock = canvas['requestPointerLock'] ||
            canvas['mozRequestPointerLock'] ||
            canvas['webkitRequestPointerLock'] ||
            canvas['msRequestPointerLock'] ||
            function () {};
        canvas.exitPointerLock = document['exitPointerLock'] ||
            document['mozExitPointerLock'] ||
            document['webkitExitPointerLock'] ||
            document['msExitPointerLock'] ||
            function () {}; 
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);

        function pointerLockChange() {
            Browser.pointerLock = document['pointerLockElement'] === canvas ||
                document['mozPointerLockElement'] === canvas ||
                document['webkitPointerLockElement'] === canvas ||
                document['msPointerLockElement'] === canvas;
        }

        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        document.addEventListener('mspointerlockchange', pointerLockChange, false);

        if (Module['elementPointerLock']) {
            canvas.addEventListener("click", function (ev) {
                if (!Browser.pointerLock && canvas.requestPointerLock) {
                    canvas.requestPointerLock();
                    ev.preventDefault();
                }
            }, false);
        }
    },
    createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        var errorInfo = '?';

        function onContextCreationError(event) {
            errorInfo = event.statusMessage || errorInfo;
        }
        try {
            if (useWebGL) {
                var contextAttributes = {
                    antialias: false,
                    alpha: false
                };

                if (webGLContextAttributes) {
                    for (var attribute in webGLContextAttributes) {
                        contextAttributes[attribute] = webGLContextAttributes[attribute];
                    }
                }


                canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
                try {
                    ['experimental-webgl', 'webgl'].some(function (webglId) {
                        return ctx = canvas.getContext(webglId, contextAttributes);
                    });
                } finally {
                    canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
                }
            } else {
                ctx = canvas.getContext('2d');
            }
            if (!ctx) throw ':(';
        } catch (e) {
            Module.print('Could not create canvas: ' + [errorInfo, e]);
            return null;
        }
        if (useWebGL) {
            
            canvas.style.backgroundColor = "black";

            
            canvas.addEventListener('webglcontextlost', function (event) {
                alert('WebGL context lost. You will need to reload the page.');
            }, false);
        }
        if (setInModule) {
            GLctx = Module.ctx = ctx;
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
                callback()
            });
            Browser.init();
        }
        return ctx;
    },
    destroyContext: function (canvas, useWebGL, setInModule) {},
    fullScreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullScreen: function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;

        var canvas = Module['canvas'];
        var canvasContainer = canvas.parentNode;

        function fullScreenChange() {
            Browser.isFullScreen = false;
            if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
                document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
                document['fullScreenElement'] || document['fullscreenElement'] ||
                document['msFullScreenElement'] || document['msFullscreenElement'] ||
                document['webkitCurrentFullScreenElement']) === canvasContainer) {
                canvas.cancelFullScreen = document['cancelFullScreen'] ||
                    document['mozCancelFullScreen'] ||
                    document['webkitCancelFullScreen'] ||
                    document['msExitFullscreen'] ||
                    document['exitFullscreen'] ||
                    function () {};
                canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
                if (Browser.lockPointer) canvas.requestPointerLock();
                Browser.isFullScreen = true;
                if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
            } else {

                
                var canvasContainer = canvas.parentNode;
                canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                canvasContainer.parentNode.removeChild(canvasContainer);

                if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
            }
            if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
            Browser.updateCanvasDimensions(canvas);
        }

        if (!Browser.fullScreenHandlersInstalled) {
            Browser.fullScreenHandlersInstalled = true;
            document.addEventListener('fullscreenchange', fullScreenChange, false);
            document.addEventListener('mozfullscreenchange', fullScreenChange, false);
            document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
            document.addEventListener('MSFullscreenChange', fullScreenChange, false);
        }

        
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);

        
        canvasContainer.requestFullScreen = canvasContainer['requestFullScreen'] ||
            canvasContainer['mozRequestFullScreen'] ||
            canvasContainer['msRequestFullscreen'] ||
            (canvasContainer['webkitRequestFullScreen'] ? function () {
            canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT'])
        } : null);
        canvasContainer.requestFullScreen();
    },
    requestAnimationFrame: function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { 
            setTimeout(func, 1000 / 60);
        } else {
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = window['requestAnimationFrame'] ||
                    window['mozRequestAnimationFrame'] ||
                    window['webkitRequestAnimationFrame'] ||
                    window['msRequestAnimationFrame'] ||
                    window['oRequestAnimationFrame'] ||
                    window['setTimeout'];
            }
            window.requestAnimationFrame(func);
        }
    },
    safeCallback: function (func) {
        return function () {
            if (!ABORT) return func.apply(null, arguments);
        };
    },
    safeRequestAnimationFrame: function (func) {
        return Browser.requestAnimationFrame(function () {
            if (!ABORT) func();
        });
    },
    safeSetTimeout: function (func, timeout) {
        return setTimeout(function () {
            if (!ABORT) func();
        }, timeout);
    },
    safeSetInterval: function (func, timeout) {
        return setInterval(function () {
            if (!ABORT) func();
        }, timeout);
    },
    getMimetype: function (name) {
        return {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'bmp': 'image/bmp',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav',
            'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.') + 1)];
    },
    getUserMedia: function (func) {
        if (!window.getUserMedia) {
            window.getUserMedia = navigator['getUserMedia'] ||
                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
    },
    getMovementX: function (event) {
        return event['movementX'] ||
            event['mozMovementX'] ||
            event['webkitMovementX'] ||
            0;
    },
    getMovementY: function (event) {
        return event['movementY'] ||
            event['mozMovementY'] ||
            event['webkitMovementY'] ||
            0;
    },
    getMouseWheelDelta: function (event) {
        return Math.max(-1, Math.min(1, event.type === 'DOMMouseScroll' ? event.detail : -event.wheelDelta));
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    calculateMouseEvent: function (event) { 
        if (Browser.pointerLock) {
            
            
            
            if (event.type != 'mousemove' &&
                ('mozMovementX' in event)) {
                Browser.mouseMovementX = Browser.mouseMovementY = 0;
            } else {
                Browser.mouseMovementX = Browser.getMovementX(event);
                Browser.mouseMovementY = Browser.getMovementY(event);
            }

            
            if (typeof SDL != "undefined") {
                Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
            } else {
                
                
                Browser.mouseX += Browser.mouseMovementX;
                Browser.mouseY += Browser.mouseMovementY;
            }
        } else {
            
            
            var rect = Module["canvas"].getBoundingClientRect();
            var x, y;

            
            
            
            var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
            var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
            if (event.type == 'touchstart' ||
                event.type == 'touchend' ||
                event.type == 'touchmove') {
                var t = event.touches.item(0);
                if (t) {
                    x = t.pageX - (scrollX + rect.left);
                    y = t.pageY - (scrollY + rect.top);
                } else {
                    return;
                }
            } else {
                x = event.pageX - (scrollX + rect.left);
                y = event.pageY - (scrollY + rect.top);
            }

            
            
            
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);

            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y;
        }
    },
    xhrLoad: function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { 
                onload(xhr.response);
            } else {
                onerror();
            }
        };
        xhr.onerror = onerror;
        xhr.send(null);
    },
    asyncLoad: function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function (arrayBuffer) {
            assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
            onload(new Uint8Array(arrayBuffer));
            if (!noRunDep) removeRunDependency('al ' + url);
        }, function (event) {
            if (onerror) {
                onerror();
            } else {
                throw 'Loading data file "' + url + '" failed.';
            }
        });
        if (!noRunDep) addRunDependency('al ' + url);
    },
    resizeListeners: [],
    updateResizeListeners: function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function (listener) {
            listener(canvas.width, canvas.height);
        });
    },
    setCanvasSize: function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullScreenCanvasSize: function () {
        
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2)];
            flags = flags | 0x00800000; 
            HEAP32[((SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2)] = flags
        }
        Browser.updateResizeListeners();
    },
    setWindowedCanvasSize: function () {
        
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2)];
            flags = flags & ~0x00800000; 
            HEAP32[((SDL.screen + Runtime.QUANTUM_SIZE * 0) >> 2)] = flags
        }
        Browser.updateResizeListeners();
    },
    updateCanvasDimensions: function (canvas, wNative, hNative) {
        if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative;
        } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (w / h < Module['forcedAspectRatio']) {
                w = Math.round(h * Module['forcedAspectRatio']);
            } else {
                h = Math.round(w / Module['forcedAspectRatio']);
            }
        }
        if (((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
            document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
            document['fullScreenElement'] || document['fullscreenElement'] ||
            document['msFullScreenElement'] || document['msFullscreenElement'] ||
            document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
            var factor = Math.min(screen.width / w, screen.height / h);
            w = Math.round(w * factor);
            h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
            if (canvas.width != w) canvas.width = w;
            if (canvas.height != h) canvas.height = h;
            if (typeof canvas.style != 'undefined') {
                canvas.style.removeProperty("width");
                canvas.style.removeProperty("height");
            }
        } else {
            if (canvas.width != wNative) canvas.width = wNative;
            if (canvas.height != hNative) canvas.height = hNative;
            if (typeof canvas.style != 'undefined') {
                if (w != wNative || h != hNative) {
                    canvas.style.setProperty("width", w + "px", "important");
                    canvas.style.setProperty("height", h + "px", "important");
                } else {
                    canvas.style.removeProperty("width");
                    canvas.style.removeProperty("height");
                }
            }
        }
    }
};



function _fwrite(ptr, size, nitems, stream) {
    
    
    var bytesToWrite = nitems * size;
    if (bytesToWrite == 0) return 0;
    var fd = _fileno(stream);
    var bytesWritten = _write(fd, ptr, bytesToWrite);
    if (bytesWritten == -1) {
        var streamObj = FS.getStreamFromPtr(stream);
        if (streamObj) streamObj.error = true;
        return 0;
    } else {
        return Math.floor(bytesWritten / size);
    }
}


function __reallyNegative(x) {
    return x < 0 || (x === 0 && (1 / x) === -Infinity);
}

function __formatString(format, varargs) {
    var textIndex = format;
    var argIndex = 0;

    function getNextArg(type) {
        
        
        var ret;
        if (type === 'double') {
            ret = (HEAP32[((tempDoublePtr) >> 2)] = HEAP32[(((varargs) + (argIndex)) >> 2)], HEAP32[(((tempDoublePtr) + (4)) >> 2)] = HEAP32[(((varargs) + ((argIndex) + (4))) >> 2)], (+(HEAPF64[(tempDoublePtr) >> 3])));
        } else if (type == 'i64') {
            ret = [HEAP32[(((varargs) + (argIndex)) >> 2)],
                HEAP32[(((varargs) + (argIndex + 4)) >> 2)]
            ];

        } else {
            type = 'i32'; 
            ret = HEAP32[(((varargs) + (argIndex)) >> 2)];
        }
        argIndex += Runtime.getNativeFieldSize(type);
        return ret;
    }

    var ret = [];
    var curr, next, currArg;
    while (1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex + 1) | 0)];
        if (curr == 37) {
            
            var flagAlwaysSigned = false;
            var flagLeftAlign = false;
            var flagAlternative = false;
            var flagZeroPad = false;
            var flagPadSign = false;
            flagsLoop: while (1) {
                switch (next) {
                case 43:
                    flagAlwaysSigned = true;
                    break;
                case 45:
                    flagLeftAlign = true;
                    break;
                case 35:
                    flagAlternative = true;
                    break;
                case 48:
                    if (flagZeroPad) {
                        break flagsLoop;
                    } else {
                        flagZeroPad = true;
                        break;
                    }
                case 32:
                    flagPadSign = true;
                    break;
                default:
                    break flagsLoop;
                }
                textIndex++;
                next = HEAP8[((textIndex + 1) | 0)];
            }

            
            var width = 0;
            if (next == 42) {
                width = getNextArg('i32');
                textIndex++;
                next = HEAP8[((textIndex + 1) | 0)];
            } else {
                while (next >= 48 && next <= 57) {
                    width = width * 10 + (next - 48);
                    textIndex++;
                    next = HEAP8[((textIndex + 1) | 0)];
                }
            }

            
            var precisionSet = false,
                precision = -1;
            if (next == 46) {
                precision = 0;
                precisionSet = true;
                textIndex++;
                next = HEAP8[((textIndex + 1) | 0)];
                if (next == 42) {
                    precision = getNextArg('i32');
                    textIndex++;
                } else {
                    while (1) {
                        var precisionChr = HEAP8[((textIndex + 1) | 0)];
                        if (precisionChr < 48 ||
                            precisionChr > 57) break;
                        precision = precision * 10 + (precisionChr - 48);
                        textIndex++;
                    }
                }
                next = HEAP8[((textIndex + 1) | 0)];
            }
            if (precision < 0) {
                precision = 6; 
                precisionSet = false;
            }

            
            var argSize;
            switch (String.fromCharCode(next)) {
            case 'h':
                var nextNext = HEAP8[((textIndex + 2) | 0)];
                if (nextNext == 104) {
                    textIndex++;
                    argSize = 1; 
                } else {
                    argSize = 2; 
                }
                break;
            case 'l':
                var nextNext = HEAP8[((textIndex + 2) | 0)];
                if (nextNext == 108) {
                    textIndex++;
                    argSize = 8; 
                } else {
                    argSize = 4; 
                }
                break;
            case 'L': 
            case 'q': 
            case 'j': 
                argSize = 8;
                break;
            case 'z': 
            case 't': 
            case 'I': 
                argSize = 4;
                break;
            default:
                argSize = null;
            }
            if (argSize) textIndex++;
            next = HEAP8[((textIndex + 1) | 0)];

            
            switch (String.fromCharCode(next)) {
            case 'd':
            case 'i':
            case 'u':
            case 'o':
            case 'x':
            case 'X':
            case 'p':
                {
                    
                    var signed = next == 100 || next == 105;
                    argSize = argSize || 4;
                    var currArg = getNextArg('i' + (argSize * 8));
                    var origArg = currArg;
                    var argText;
                    
                    if (argSize == 8) {
                        currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
                    }
                    
                    if (argSize <= 4) {
                        var limit = Math.pow(256, argSize) - 1;
                        currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
                    }
                    
                    var currAbsArg = Math.abs(currArg);
                    var prefix = '';
                    if (next == 100 || next == 105) {
                        if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null);
                        else
                            argText = reSign(currArg, 8 * argSize, 1).toString(10);
                    } else if (next == 117) {
                        if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true);
                        else
                            argText = unSign(currArg, 8 * argSize, 1).toString(10);
                        currArg = Math.abs(currArg);
                    } else if (next == 111) {
                        argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
                    } else if (next == 120 || next == 88) {
                        prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                        if (argSize == 8 && i64Math) {
                            if (origArg[1]) {
                                argText = (origArg[1] >>> 0).toString(16);
                                var lower = (origArg[0] >>> 0).toString(16);
                                while (lower.length < 8) lower = '0' + lower;
                                argText += lower;
                            } else {
                                argText = (origArg[0] >>> 0).toString(16);
                            }
                        } else
                        if (currArg < 0) {
                            
                            currArg = -currArg;
                            argText = (currAbsArg - 1).toString(16);
                            var buffer = [];
                            for (var i = 0; i < argText.length; i++) {
                                buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                            }
                            argText = buffer.join('');
                            while (argText.length < argSize * 2) argText = 'f' + argText;
                        } else {
                            argText = currAbsArg.toString(16);
                        }
                        if (next == 88) {
                            prefix = prefix.toUpperCase();
                            argText = argText.toUpperCase();
                        }
                    } else if (next == 112) {
                        if (currAbsArg === 0) {
                            argText = '(nil)';
                        } else {
                            prefix = '0x';
                            argText = currAbsArg.toString(16);
                        }
                    }
                    if (precisionSet) {
                        while (argText.length < precision) {
                            argText = '0' + argText;
                        }
                    }

                    
                    if (currArg >= 0) {
                        if (flagAlwaysSigned) {
                            prefix = '+' + prefix;
                        } else if (flagPadSign) {
                            prefix = ' ' + prefix;
                        }
                    }

                    
                    if (argText.charAt(0) == '-') {
                        prefix = '-' + prefix;
                        argText = argText.substr(1);
                    }

                    
                    while (prefix.length + argText.length < width) {
                        if (flagLeftAlign) {
                            argText += ' ';
                        } else {
                            if (flagZeroPad) {
                                argText = '0' + argText;
                            } else {
                                prefix = ' ' + prefix;
                            }
                        }
                    }

                    
                    argText = prefix + argText;
                    argText.split('').forEach(function (chr) {
                        ret.push(chr.charCodeAt(0));
                    });
                    break;
                }
            case 'f':
            case 'F':
            case 'e':
            case 'E':
            case 'g':
            case 'G':
                {
                    
                    var currArg = getNextArg('double');
                    var argText;
                    if (isNaN(currArg)) {
                        argText = 'nan';
                        flagZeroPad = false;
                    } else if (!isFinite(currArg)) {
                        argText = (currArg < 0 ? '-' : '') + 'inf';
                        flagZeroPad = false;
                    } else {
                        var isGeneral = false;
                        var effectivePrecision = Math.min(precision, 20);

                        
                        
                        if (next == 103 || next == 71) {
                            isGeneral = true;
                            precision = precision || 1;
                            var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                            if (precision > exponent && exponent >= -4) {
                                next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                                precision -= exponent + 1;
                            } else {
                                next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                                precision--;
                            }
                            effectivePrecision = Math.min(precision, 20);
                        }

                        if (next == 101 || next == 69) {
                            argText = currArg.toExponential(effectivePrecision);
                            
                            if (/[eE][-+]\d$/.test(argText)) {
                                argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                            }
                        } else if (next == 102 || next == 70) {
                            argText = currArg.toFixed(effectivePrecision);
                            if (currArg === 0 && __reallyNegative(currArg)) {
                                argText = '-' + argText;
                            }
                        }

                        var parts = argText.split('e');
                        if (isGeneral && !flagAlternative) {
                            
                            while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                                (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                                parts[0] = parts[0].slice(0, -1);
                            }
                        } else {
                            
                            if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                            
                            while (precision > effectivePrecision++) parts[0] += '0';
                        }
                        argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');

                        
                        if (next == 69) argText = argText.toUpperCase();

                        
                        if (currArg >= 0) {
                            if (flagAlwaysSigned) {
                                argText = '+' + argText;
                            } else if (flagPadSign) {
                                argText = ' ' + argText;
                            }
                        }
                    }

                    
                    while (argText.length < width) {
                        if (flagLeftAlign) {
                            argText += ' ';
                        } else {
                            if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                                argText = argText[0] + '0' + argText.slice(1);
                            } else {
                                argText = (flagZeroPad ? '0' : ' ') + argText;
                            }
                        }
                    }

                    
                    if (next < 97) argText = argText.toUpperCase();

                    
                    argText.split('').forEach(function (chr) {
                        ret.push(chr.charCodeAt(0));
                    });
                    break;
                }
            case 's':
                {
                    
                    var arg = getNextArg('i8*');
                    var argLength = arg ? _strlen(arg) : '(null)'.length;
                    if (precisionSet) argLength = Math.min(argLength, precision);
                    if (!flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32);
                        }
                    }
                    if (arg) {
                        for (var i = 0; i < argLength; i++) {
                            ret.push(HEAPU8[((arg++) | 0)]);
                        }
                    } else {
                        ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
                    }
                    if (flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32);
                        }
                    }
                    break;
                }
            case 'c':
                {
                    
                    if (flagLeftAlign) ret.push(getNextArg('i8'));
                    while (--width > 0) {
                        ret.push(32);
                    }
                    if (!flagLeftAlign) ret.push(getNextArg('i8'));
                    break;
                }
            case 'n':
                {
                    
                    var ptr = getNextArg('i32*');
                    HEAP32[((ptr) >> 2)] = ret.length;
                    break;
                }
            case '%':
                {
                    
                    ret.push(curr);
                    break;
                }
            default:
                {
                    
                    for (var i = startTextIndex; i < textIndex + 2; i++) {
                        ret.push(HEAP8[(i)]);
                    }
                }
            }
            textIndex += 2;
            
            
        } else {
            ret.push(curr);
            textIndex += 1;
        }
    }
    return ret;
}

function _fprintf(stream, format, varargs) {
    
    
    var result = __formatString(format, varargs);
    var stack = Runtime.stackSave();
    var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
    Runtime.stackRestore(stack);
    return ret;
}

function _printf(format, varargs) {
    
    
    var stdout = HEAP32[((_stdout) >> 2)];
    return _fprintf(stdout, format, varargs);
}



function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    return dest;
}
Module["_memcpy"] = _memcpy;
FS.staticInit();
__ATINIT__.unshift({
    func: function () {
        if (!Module["noFSInit"] && !FS.init.initialized) FS.init()
    }
});
__ATMAIN__.push({
    func: function () {
        FS.ignorePermissions = false
    }
});
__ATEXIT__.push({
    func: function () {
        FS.quit()
    }
});
Module["FS_createFolder"] = FS.createFolder;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createLink"] = FS.createLink;
Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4);
HEAP32[((___errno_state) >> 2)] = 0;
__ATINIT__.unshift({
    func: function () {
        TTY.init()
    }
});
__ATEXIT__.push({
    func: function () {
        TTY.shutdown()
    }
});
TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) {
    var fs = require("fs");
    NODEFS.staticInit();
}
__ATINIT__.push({
    func: function () {
        SOCKFS.root = FS.mount(SOCKFS, {}, null);
    }
});
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) {
    Browser.requestFullScreen(lockPointer, resizeCanvas)
};
Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func)
};
Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates)
};
Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause()
};
Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume()
};
Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia()
}
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

staticSealed = true; 

STACK_MAX = STACK_BASE + 5242880;

DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");


var Math_min = Math.min;

function asmPrintInt(x, y) {
    Module.print('int ' + x + ',' + y); 
}

function asmPrintFloat(x, y) {
    Module.print('float ' + x + ',' + y); 
}

var asm = (function (global, env, buffer) {
    "use asm";
    var a = new global.Int8Array(buffer);
    var b = new global.Int16Array(buffer);
    var c = new global.Int32Array(buffer);
    var d = new global.Uint8Array(buffer);
    var e = new global.Uint16Array(buffer);
    var f = new global.Uint32Array(buffer);
    var g = new global.Float32Array(buffer);
    var h = new global.Float64Array(buffer);
    var i = env.STACKTOP | 0;
    var j = env.STACK_MAX | 0;
    var k = env.tempDoublePtr | 0;
    var l = env.ABORT | 0;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    var q = +env.NaN,
        r = +env.Infinity;
    var s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0.0,
        x = 0,
        y = 0,
        z = 0,
        A = 0.0;
    var B = 0;
    var C = 0;
    var D = 0;
    var E = 0;
    var F = 0;
    var G = 0;
    var H = 0;
    var I = 0;
    var J = 0;
    var K = 0;
    var L = global.Math.floor;
    var M = global.Math.abs;
    var N = global.Math.sqrt;
    var O = global.Math.pow;
    var P = global.Math.cos;
    var Q = global.Math.sin;
    var R = global.Math.tan;
    var S = global.Math.acos;
    var T = global.Math.asin;
    var U = global.Math.atan;
    var V = global.Math.atan2;
    var W = global.Math.exp;
    var X = global.Math.log;
    var Y = global.Math.ceil;
    var Z = global.Math.imul;
    var _ = env.abort;
    var $ = env.assert;
    var aa = env.asmPrintInt;
    var ba = env.asmPrintFloat;
    var ca = env.min;
    var da = env._puts;
    var ea = env._llvm_lifetime_start;
    var fa = env._fflush;
    var ga = env.__formatString;
    var ha = env._fputc;
    var ia = env._send;
    var ja = env._pwrite;
    var ka = env._fileno;
    var la = env.__reallyNegative;
    var ma = env._fwrite;
    var na = env._malloc;
    var oa = env._printf;
    var pa = env._fprintf;
    var qa = env.___setErrNo;
    var ra = env._llvm_lifetime_end;
    var sa = env._fputs;
    var ta = env._free;
    var ua = env._write;
    var va = env._emscripten_memcpy_big;
    var wa = env._mkport;
    var xa = 0.0;
    
    function ya(a) {
        a = a | 0;
        var b = 0;
        b = i;
        i = i + a | 0;
        i = i + 7 & -8;
        return b | 0
    }

    function za() {
        return i | 0
    }

    function Aa(a) {
        a = a | 0;
        i = a
    }

    function Ba(a, b) {
        a = a | 0;
        b = b | 0;
        if ((m | 0) == 0) {
            m = a;
            n = b
        }
    }

    function Ca(b) {
        b = b | 0;
        a[k] = a[b];
        a[k + 1 | 0] = a[b + 1 | 0];
        a[k + 2 | 0] = a[b + 2 | 0];
        a[k + 3 | 0] = a[b + 3 | 0]
    }

    function Da(b) {
        b = b | 0;
        a[k] = a[b];
        a[k + 1 | 0] = a[b + 1 | 0];
        a[k + 2 | 0] = a[b + 2 | 0];
        a[k + 3 | 0] = a[b + 3 | 0];
        a[k + 4 | 0] = a[b + 4 | 0];
        a[k + 5 | 0] = a[b + 5 | 0];
        a[k + 6 | 0] = a[b + 6 | 0];
        a[k + 7 | 0] = a[b + 7 | 0]
    }

    function Ea(a) {
        a = a | 0;
        B = a
    }

    function Fa(a) {
        a = a | 0;
        C = a
    }

    function Ga(a) {
        a = a | 0;
        D = a
    }

    function Ha(a) {
        a = a | 0;
        E = a
    }

    function Ia(a) {
        a = a | 0;
        F = a
    }

    function Ja(a) {
        a = a | 0;
        G = a
    }

    function Ka(a) {
        a = a | 0;
        H = a
    }

    function La(a) {
        a = a | 0;
        I = a
    }

    function Ma(a) {
        a = a | 0;
        J = a
    }

    function Na(a) {
        a = a | 0;
        K = a
    }

    function Oa(a, b) {
        a = a | 0;
        b = b | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;
        d = i;
        i = i + 8 | 0;
        e = d;
        f = i;
        i = i + 8 | 0;
        g = i;
        i = i + 8 | 0;
        h = 32 + (a << 2) | 0;
        a = c[h >> 2] | 0;
        if ((a | 0) > 0) {
            j = c[56 + (a << 3) >> 2] | 0;
            k = 60 + (a << 3) | 0;
            l = c[k >> 2] | 0;
            c[k >> 2] = c[12];
            c[12] = a;
            c[h >> 2] = l;
            m = j
        } else {
            c[g >> 2] = 240;
            oa(8, g | 0) | 0;
            m = 0
        }
        g = 32 + (b << 2) | 0;
        b = c[g >> 2] | 0;
        do {
            if ((b | 0) > 0) {
                if ((c[56 + (b << 3) >> 2] | 0) > (m | 0)) {
                    break
                }
                c[f >> 2] = 224;
                oa(8, f | 0) | 0;
                n = c[64] | 0;
                o = n + 1 | 0;
                c[64] = o;
                i = d;
                return
            }
        } while (0);
        f = c[12] | 0;
        if ((f | 0) > 0) {
            c[12] = c[60 + (f << 3) >> 2];
            p = b;
            q = f
        } else {
            c[e >> 2] = 208;
            oa(8, e | 0) | 0;
            p = c[g >> 2] | 0;
            q = 0
        }
        c[60 + (q << 3) >> 2] = p;
        c[g >> 2] = q;
        c[56 + (q << 3) >> 2] = m;
        n = c[64] | 0;
        o = n + 1 | 0;
        c[64] = o;
        i = d;
        return
    }

    function Pa(a, b, c) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        var d = 0,
            e = 0,
            f = 0,
            g = 0;
        d = i;
        if ((c | 0) == 1) {
            e = a
        } else {
            f = a;
            a = c;
            while (1) {
                c = 6 - f - b | 0;
                g = a + -1 | 0;
                Pa(f, c, g);
                Oa(f, b);
                if ((g | 0) == 1) {
                    e = c;
                    break
                } else {
                    a = g;
                    f = c
                }
            }
        }
        Oa(e, b);
        i = d;
        return
    }

    function Qa() {
        var a = 0,
            b = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            j = 0,
            k = 0;
        a = i;
        i = i + 8 | 0;
        b = a;
        d = i;
        i = i + 8 | 0;
        c[68 >> 2] = 0;
        c[76 >> 2] = 1;
        c[84 >> 2] = 2;
        c[92 >> 2] = 3;
        c[100 >> 2] = 4;
        c[108 >> 2] = 5;
        c[116 >> 2] = 6;
        c[124 >> 2] = 7;
        c[132 >> 2] = 8;
        c[140 >> 2] = 9;
        c[148 >> 2] = 10;
        c[156 >> 2] = 11;
        c[164 >> 2] = 12;
        c[172 >> 2] = 13;
        c[180 >> 2] = 14;
        c[188 >> 2] = 15;
        c[196 >> 2] = 16;
        c[204 >> 2] = 17;
        c[12] = 18;
        c[36 >> 2] = 0;
        e = 0;
        f = 14;
        while (1) {
            do {
                if ((e | 0) > 0) {
                    if ((c[56 + (e << 3) >> 2] | 0) > (f | 0)) {
                        g = 5;
                        break
                    }
                    c[d >> 2] = 224;
                    oa(8, d | 0) | 0
                } else {
                    g = 5
                }
            } while (0);
            if ((g | 0) == 5) {
                g = 0;
                h = c[12] | 0;
                if ((h | 0) > 0) {
                    c[12] = c[60 + (h << 3) >> 2];
                    j = e;
                    k = h
                } else {
                    c[b >> 2] = 208;
                    oa(8, b | 0) | 0;
                    j = c[36 >> 2] | 0;
                    k = 0
                }
                c[60 + (k << 3) >> 2] = j;
                c[36 >> 2] = k;
                c[56 + (k << 3) >> 2] = f
            }
            h = f + -1 | 0;
            if ((h | 0) <= 0) {
                break
            }
            e = c[36 >> 2] | 0;
            f = h
        }
        c[40 >> 2] = 0;
        c[44 >> 2] = 0;
        c[64] = 0;
        Pa(1, 2, 14);
        if ((c[64] | 0) == 16383) {
            i = a;
            return
        }
        da(264) | 0;
        i = a;
        return
    }

    function Ra() {
        var a = 0,
            b = 0;
        a = i;
        b = 0;
        do {
            Qa();
            b = b + 1 | 0;
        } while ((b | 0) != 1e3);
        i = a;
        return 0
    }

    function Sa() {}

    function Ta(b) {
        b = b | 0;
        var c = 0;
        c = b;
        while (a[c] | 0) {
            c = c + 1 | 0
        }
        return c - b | 0
    }

    function Ua(b, d, e) {
        b = b | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b + e | 0;
        if ((e | 0) >= 20) {
            d = d & 255;
            g = b & 3;
            h = d | d << 8 | d << 16 | d << 24;
            i = f & ~3;
            if (g) {
                g = b + 4 - g | 0;
                while ((b | 0) < (g | 0)) {
                    a[b] = d;
                    b = b + 1 | 0
                }
            }
            while ((b | 0) < (i | 0)) {
                c[b >> 2] = h;
                b = b + 4 | 0
            }
        }
        while ((b | 0) < (f | 0)) {
            a[b] = d;
            b = b + 1 | 0
        }
        return b - e | 0
    }

    function Va(b, d, e) {
        b = b | 0;
        d = d | 0;
        e = e | 0;
        var f = 0;
        if ((e | 0) >= 4096) return va(b | 0, d | 0, e | 0) | 0;
        f = b | 0;
        if ((b & 3) == (d & 3)) {
            while (b & 3) {
                if ((e | 0) == 0) return f | 0;
                a[b] = a[d] | 0;
                b = b + 1 | 0;
                d = d + 1 | 0;
                e = e - 1 | 0
            }
            while ((e | 0) >= 4) {
                c[b >> 2] = c[d >> 2];
                b = b + 4 | 0;
                d = d + 4 | 0;
                e = e - 4 | 0
            }
        }
        while ((e | 0) > 0) {
            a[b] = a[d] | 0;
            b = b + 1 | 0;
            d = d + 1 | 0;
            e = e - 1 | 0
        }
        return f | 0
    }




    
    return {
        _strlen: Ta,
        _memcpy: Va,
        _main: Ra,
        _memset: Ua,
        runPostSets: Sa,
        stackAlloc: ya,
        stackSave: za,
        stackRestore: Aa,
        setThrew: Ba,
        setTempRet0: Ea,
        setTempRet1: Fa,
        setTempRet2: Ga,
        setTempRet3: Ha,
        setTempRet4: Ia,
        setTempRet5: Ja,
        setTempRet6: Ka,
        setTempRet7: La,
        setTempRet8: Ma,
        setTempRet9: Na
    }
})



({
    "Math": Math,
    "Int8Array": Int8Array,
    "Int16Array": Int16Array,
    "Int32Array": Int32Array,
    "Uint8Array": Uint8Array,
    "Uint16Array": Uint16Array,
    "Uint32Array": Uint32Array,
    "Float32Array": Float32Array,
    "Float64Array": Float64Array
}, {
    "abort": abort,
    "assert": assert,
    "asmPrintInt": asmPrintInt,
    "asmPrintFloat": asmPrintFloat,
    "min": Math_min,
    "_puts": _puts,
    "_llvm_lifetime_start": _llvm_lifetime_start,
    "_fflush": _fflush,
    "__formatString": __formatString,
    "_fputc": _fputc,
    "_send": _send,
    "_pwrite": _pwrite,
    "_fileno": _fileno,
    "__reallyNegative": __reallyNegative,
    "_fwrite": _fwrite,
    "_malloc": _malloc,
    "_printf": _printf,
    "_fprintf": _fprintf,
    "___setErrNo": ___setErrNo,
    "_llvm_lifetime_end": _llvm_lifetime_end,
    "_fputs": _fputs,
    "_free": _free,
    "_write": _write,
    "_emscripten_memcpy_big": _emscripten_memcpy_big,
    "_mkport": _mkport,
    "STACKTOP": STACKTOP,
    "STACK_MAX": STACK_MAX,
    "tempDoublePtr": tempDoublePtr,
    "ABORT": ABORT,
    "NaN": NaN,
    "Infinity": Infinity
}, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _main = Module["_main"] = asm["_main"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];

Runtime.stackAlloc = function (size) {
    return asm['stackAlloc'](size)
};
Runtime.stackSave = function () {
    return asm['stackSave']()
};
Runtime.stackRestore = function (top) {
    asm['stackRestore'](top)
};



var i64Math = null;



if (memoryInitializer) {
    if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
        var data = Module['readBinary'](memoryInitializer);
        HEAPU8.set(data, STATIC_BASE);
    } else {
        addRunDependency('memory initializer');
        Browser.asyncLoad(memoryInitializer, function (data) {
            HEAPU8.set(data, STATIC_BASE);
            removeRunDependency('memory initializer');
        }, function (data) {
            throw 'could not load memory initializer ' + memoryInitializer;
        });
    }
}

function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
    
    if (!Module['calledRun'] && shouldRunNow) run();
    if (!Module['calledRun']) dependenciesFulfilled = runCaller; 
}

Module['callMain'] = Module.callMain = function callMain(args) {
    assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
    assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

    args = args || [];

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
        Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    ensureInitRuntime();

    var argc = args.length + 1;

    function pad() {
        for (var i = 0; i < 4 - 1; i++) {
            argv.push(0);
        }
    }
    var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL)];
    pad();
    for (var i = 0; i < argc - 1; i = i + 1) {
        argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
        pad();
    }
    argv.push(0);
    argv = allocate(argv, 'i32', ALLOC_NORMAL);

    initialStackTop = STACKTOP;

    try {

        var ret = Module['_main'](argc, argv, 0);


        
        if (!Module['noExitRuntime']) {
            exit(ret);
        }
    } catch (e) {
        if (e instanceof ExitStatus) {
            
            
            return;
        } else if (e == 'SimulateInfiniteLoop') {
            
            Module['noExitRuntime'] = true;
            return;
        } else {
            if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
            throw e;
        }
    } finally {
        calledMain = true;
    }
}




function run(args) {
    args = args || Module['arguments'];

    if (preloadStartTime === null) preloadStartTime = Date.now();

    if (runDependencies > 0) {
        Module.printErr('run() called, but dependencies remain, so not running');
        return;
    }

    preRun();

    if (runDependencies > 0) return; 
    if (Module['calledRun']) return; 

    function doRun() {
        if (Module['calledRun']) return; 
        Module['calledRun'] = true;

        ensureInitRuntime();

        preMain();

        if (Module['_main'] && shouldRunNow) {
            Module['callMain'](args);
        }

        postRun();
    }

    if (Module['setStatus']) {
        Module['setStatus']('Running...');
        setTimeout(function () {
            setTimeout(function () {
                Module['setStatus']('');
            }, 1);
            if (!ABORT) doRun();
        }, 1);
    } else {
        doRun();
    }
}
Module['run'] = Module.run = run;

function exit(status) {
    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    
    exitRuntime();

    
    
    
    
    
    
    

    
    throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;

function abort(text) {
    if (text) {
        Module.print(text);
        Module.printErr(text);
    }

    ABORT = true;
    EXITSTATUS = 1;

    var extra = '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';

    throw 'abort() at ' + stackTrace() + extra;
}
Module['abort'] = Module.abort = abort;



if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
        Module['preInit'].pop()();
    }
}


var shouldRunNow = true;
if (Module['noInitialRun']) {
    shouldRunNow = false;
}


run();












var __time_after = top.JetStream.goodTime();
top.JetStream.reportResult(__time_after - __time_before);