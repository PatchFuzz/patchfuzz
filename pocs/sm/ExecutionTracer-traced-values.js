if (typeof enableExecutionTracing == "undefined") {
  quit();
}
const VALUE_SUMMARY_VERSION = 2;

const JSVAL_TYPE_DOUBLE = 0x00;
const JSVAL_TYPE_INT32 = 0x01;
const JSVAL_TYPE_BOOLEAN = 0x02;
const JSVAL_TYPE_UNDEFINED = 0x03;
const JSVAL_TYPE_NULL = 0x04;
const JSVAL_TYPE_MAGIC = 0x05;
const JSVAL_TYPE_STRING = 0x06;
const JSVAL_TYPE_SYMBOL = 0x07;
const JSVAL_TYPE_BIGINT = 0x09;
const JSVAL_TYPE_OBJECT = 0x0c;

const GETTER_SETTER_MAGIC = 0x0f;

const GENERIC_OBJECT_HAS_DENSE_ELEMENTS = 1;

const NUMBER_IS_OUT_OF_LINE_MAGIC = 0xf;
const MIN_INLINE_INT = -1;
const MAX_INLINE_INT = 13;

const STRING_ENCODING_LATIN1 = 0;

const OBJECT_KIND_ARRAY_LIKE = 1;
const OBJECT_KIND_MAP_LIKE = 2;
const OBJECT_KIND_FUNCTION = 3;
const OBJECT_KIND_WRAPPED_PRIMITIVE_OBJECT = 4;
const OBJECT_KIND_GENERIC_OBJECT = 5;
const OBJECT_KIND_PROXY_OBJECT = 6;

const MAX_COLLECTION_VALUES = 16;

class BufferReader {
  #view;
  #index;

  constructor(buffer, index = 0) {
    this.#view = new DataView(buffer);
    this.#index = index;
  }

  peekUint8() {
    return this.#view.getUint8(this.#index);
  }

  readUint8() {
    let result = this.#view.getUint8(this.#index);
    this.#index += 1;
    return result;
  }

  readUint16() {
    let result = this.#view.getUint16(this.#index, true);
    this.#index += 2;
    return result;
  }

  readUint32() {
    let result = this.#view.getUint32(this.#index, true);
    this.#index += 4;
    return result;
  }

  readInt8() {
    let result = this.#view.getInt8(this.#index);
    this.#index += 1;
    return result;
  }

  readInt16() {
    let result = this.#view.getInt16(this.#index, true);
    this.#index += 2;
    return result;
  }

  readInt32() {
    let result = this.#view.getInt32(this.#index, true);
    this.#index += 4;
    return result;
  }

  readFloat64() {
    let result = this.#view.getFloat64(this.#index, true);
    this.#index += 8;
    return result;
  }

  readString() {
    let encodingAndLength = this.readUint16();
    let length = encodingAndLength & ~(0b11 << 14);
    let encoding = encodingAndLength >> 14;
    if (length == 0) {
      return "";
    }

    
    
    print(encoding, STRING_ENCODING_LATIN1);
    let result = String.fromCharCode(...new Uint8Array(this.#view.buffer.slice(this.#index, this.#index + length)));

    this.#index += length;
    return result;
  }
}

var g = newGlobal({ newCompartment: true });
var h = newGlobal({ newCompartment: true });
g.ccw = h;
h.wrappedObject = {foo: 0};
var dbg = new Debugger();
dbg.addDebuggee(g);

g.enableExecutionTracing();

g.eval(`
var wrappedNumber = new Number(0);
wrappedNumber.foo = 0;

[
  0.1,
  0,
  -2,
  -1,
  13,
  14,
  42,
  false,
  true,
  "bar",
  999999999999999999999999n,
  new Proxy({}, {}),
  [0],
  new Set([0]),
  new Map([[1, 0]]),
  {foo: 42},
  function foo(a,b) {},
  {"1": 0},
  new String("foo"),
  new Boolean(false),
  new Number(0),
  wrappedNumber,
  [{foo: {}}],
  new Set([{foo: {}}]),
  new Map([[{foo: {}}, {bar: {}}]]),
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"],
  {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0},
  -0.0,
  null,
  undefined,
  Symbol.for("foo"),
  [,0],
  {[42000]: 0, [Symbol.for("foo")]: 0},
  {shapeTest: 0},
  {shapeTest: 42},
  function foobar(a, {x}, bar = 42) {},
  function foobaz(a, a) {},
  function barbaz(a, ...rest) {},
  ccw.wrappedObject,
  {get testGetter() {return 42}},
].map(function f1(x) { return x; });`);

const trace = g.getExecutionTrace();

g.disableExecutionTracing();

print(trace.length, 1);

let versionReader = new BufferReader(trace[0].valueBuffer, 0);
print(versionReader.readUint32(), VALUE_SUMMARY_VERSION);

function testSingleArgument(event, cb) {
  print(typeof event.values, "number");
  print(event.values < trace[0].valueBuffer.byteLength, true);

  let reader = new BufferReader(trace[0].valueBuffer, event.values);

  
  print(reader.readUint32(), 3);

  cb(reader);

  
  print(reader.readUint8() & 0xf, JSVAL_TYPE_INT32);
}

function inlinedInt32Flags(val) {
  return (val - MIN_INLINE_INT) << 4;
}

const events = trace[0].events.filter(e => e.kind == "FunctionEnter");

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_DOUBLE | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readFloat64(), 0.1);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readInt32(), -2);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(-1));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(13));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readInt32(), 14);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_INT32 | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readInt32(), 42);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_BOOLEAN);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_BOOLEAN | 1 << 4);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_STRING);
  print(reader.readString(), "bar");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_BIGINT);
  print(reader.readString(), "999999999999999999999999");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_PROXY_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Proxy");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Array");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Set");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_MAP_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Map");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(1));
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Object");
  print(shape[1], "foo");

  print(reader.readUint32(), 1);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readInt32(), 42);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_FUNCTION);

  print(reader.readString(), "foo");
  print(reader.readUint32(), 2);
  print(reader.readString(), "a");
  print(reader.readString(), "b");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT | (GENERIC_OBJECT_HAS_DENSE_ELEMENTS << 4));
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Object");

  
  print(reader.readUint32(), 0);

  
  print(reader.readUint32(), 2);
  print(reader.readUint8(), JSVAL_TYPE_MAGIC);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_WRAPPED_PRIMITIVE_OBJECT);

  print(reader.readUint8(), JSVAL_TYPE_STRING);
  print(reader.readString(), "foo");

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "String");
  print(shape[1], "length");

  
  print(reader.readUint32(), 1);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(3));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_WRAPPED_PRIMITIVE_OBJECT);

  print(reader.readUint8(), JSVAL_TYPE_BOOLEAN);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Boolean");

  
  print(reader.readUint32(), 0);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_WRAPPED_PRIMITIVE_OBJECT);

  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Number");

  
  print(reader.readUint32(), 0);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_WRAPPED_PRIMITIVE_OBJECT);

  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Number");
  print(shape[1], "foo");

  
  print(reader.readUint32(), 1);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape[0], "Array");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let nestedShape = trace[0].shapeSummaries[reader.readUint32()];
  print(nestedShape.length, 2);
  print(nestedShape[0], "Object");
  print(nestedShape[1], "foo");

  
  print(reader.readUint32(), 1);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape[0], "Set");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let nestedShape = trace[0].shapeSummaries[reader.readUint32()];
  print(nestedShape.length, 2);
  print(nestedShape[0], "Object");
  print(nestedShape[1], "foo");

  
  print(reader.readUint32(), 1);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_MAP_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape[0], "Map");

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let nestedShape = trace[0].shapeSummaries[reader.readUint32()];
  print(nestedShape.length, 2);
  print(nestedShape[0], "Object");
  print(nestedShape[1], "foo");
  print(reader.readUint32(), 1);

  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  nestedShape = trace[0].shapeSummaries[reader.readUint32()];
  print(nestedShape.length, 2);
  print(nestedShape[0], "Object");
  print(nestedShape[1], "bar");
  print(reader.readUint32(), 1);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Array");

  print(reader.readUint32(), 20); 
  for (let i = 0; i < MAX_COLLECTION_VALUES; i++) {
    print(reader.readUint8(), JSVAL_TYPE_STRING);
    print(reader.readString(), String.fromCharCode("a".charCodeAt(0) + i));
  }
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 17);
  print(shape[0], "Object");
  print(shape.numProperties, 20);

  print(reader.readUint32(), 20);
  for (let i = 0; i < MAX_COLLECTION_VALUES; i++) {
    print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
  }
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_DOUBLE | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readFloat64(), -0.0);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_NULL);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_UNDEFINED);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_SYMBOL);
  print(reader.readString(), "foo");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_ARRAY_LIKE);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 1);
  print(shape[0], "Array");

  print(reader.readUint32(), 2); 
  print(reader.readUint8(), JSVAL_TYPE_MAGIC);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 3);
  print(shape[0], "Object");
  print(shape[1], "Symbol(foo)");
  print(shape[2], "42000");

  print(reader.readUint32(), 2); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

let shapeTestId = -1;
testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Object");
  print(shape[1], "shapeTest");

  
  
  shapeTestId = shape;

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Object");
  print(shape[1], "shapeTest");

  print(shape, shapeTestId);

  print(reader.readUint32(), 1); 
  print(reader.readUint8(), JSVAL_TYPE_INT32 | NUMBER_IS_OUT_OF_LINE_MAGIC << 4);
  print(reader.readInt32(), 42);
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_FUNCTION);

  print(reader.readString(), "foobar");
  print(reader.readUint32(), 3);
  print(reader.readString(), "a");
  print(reader.readString(), "");
  print(reader.readString(), "bar");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_FUNCTION);

  print(reader.readString(), "foobaz");
  print(reader.readUint32(), 2);
  print(reader.readString(), "a");
  print(reader.readString(), "a");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_FUNCTION);

  print(reader.readString(), "barbaz");
  print(reader.readUint32(), 2);
  print(reader.readString(), "a");
  print(reader.readString(), "rest");
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Object");
  print(shape[1], "foo");

  print(reader.readUint32(), 1);
  print(reader.readUint8(), JSVAL_TYPE_INT32 | inlinedInt32Flags(0));
});

testSingleArgument(events.shift(), reader => {
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_GENERIC_OBJECT);

  let shape = trace[0].shapeSummaries[reader.readUint32()];
  print(shape.length, 2);
  print(shape[0], "Object");
  print(shape[1], "testGetter");

  print(reader.readUint32(), 1);
  print(reader.readUint8(), GETTER_SETTER_MAGIC);
  print(reader.readUint8(), JSVAL_TYPE_OBJECT);
  print(reader.readUint8(), OBJECT_KIND_FUNCTION);
  print(reader.readString(), "get testGetter");
  print(reader.readUint32(), 0);
  print(reader.readUint8(), JSVAL_TYPE_UNDEFINED);
});

print(events.length, 0);

