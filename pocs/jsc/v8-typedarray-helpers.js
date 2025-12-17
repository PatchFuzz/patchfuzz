class MyUint8Array extends Uint8Array {};
class MyFloat32Array extends Float32Array {};
class MyBigInt64Array extends BigInt64Array {};

const builtinCtors = [
  Uint8Array,
  Int8Array,
  Uint16Array,
  Int16Array,
  Uint32Array,
  Int32Array,
  Float16Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray,
  BigUint64Array,
  BigInt64Array
];

const ctors = [
  ...builtinCtors,
  MyUint8Array,
  MyFloat32Array,
  MyBigInt64Array,
];

const floatCtors = [
  Float16Array,
  Float32Array,
  Float64Array,
  MyFloat32Array
];

const intCtors = [
  Uint8Array,
  Int8Array,
  Uint16Array,
  Int16Array,
  Uint32Array,
  Int32Array,
  BigUint64Array,
  BigInt64Array,
  MyUint8Array,
  MyBigInt64Array,
];


const dataViewAccessorsAndSizes = [[DataView.prototype.getUint8,
                                    DataView.prototype.setUint8, 1, false],
                                   [DataView.prototype.getInt8,
                                    DataView.prototype.setInt8, 1, false],
                                   [DataView.prototype.getUint16,
                                    DataView.prototype.setUint16, 2, false],
                                   [DataView.prototype.getInt16,
                                    DataView.prototype.setInt16, 2, false],
                                   [DataView.prototype.getInt32,
                                    DataView.prototype.setInt32, 4, false],
                                   [DataView.prototype.getFloat16,
                                    DataView.prototype.setFloat16, 2, false],
                                   [DataView.prototype.getFloat32,
                                    DataView.prototype.setFloat32, 4, false],
                                   [DataView.prototype.getFloat64,
                                    DataView.prototype.setFloat64, 8, false],
                                   [DataView.prototype.getBigUint64,
                                    DataView.prototype.setBigUint64, 8, true],
                                   [DataView.prototype.getBigInt64,
                                    DataView.prototype.setBigInt64, 8, true]];

function CreateResizableArrayBuffer(byteLength, maxByteLength) {
  return new ArrayBuffer(byteLength, {maxByteLength: maxByteLength});
}

function CreateGrowableSharedArrayBuffer(byteLength, maxByteLength) {
  return new SharedArrayBuffer(byteLength, {maxByteLength: maxByteLength});
}

function IsBigIntTypedArray(ta) {
  return (ta instanceof BigInt64Array) || (ta instanceof BigUint64Array);
}

function AllBigIntMatchedCtorCombinations(test) {
  for (let targetCtor of ctors) {
    for (let sourceCtor of ctors) {
      if (IsBigIntTypedArray(new targetCtor()) !=
          IsBigIntTypedArray(new sourceCtor())) {
        
        continue;
      }
      test(targetCtor, sourceCtor);
    }
  }
}

function AllBigIntUnmatchedCtorCombinations(test) {
  for (let targetCtor of ctors) {
    for (let sourceCtor of ctors) {
      if (IsBigIntTypedArray(new targetCtor()) ==
          IsBigIntTypedArray(new sourceCtor())) {
        continue;
      }
      test(targetCtor, sourceCtor);
    }
  }
}

function ReadDataFromBuffer(ab, ctor) {
  let result = [];
  const ta = new ctor(ab, 0, ab.byteLength / ctor.BYTES_PER_ELEMENT);
  for (let item of ta) {
    result.push(Number(item));
  }
  return result;
}

function WriteToTypedArray(array, index, value) {
  if (array instanceof BigInt64Array ||
      array instanceof BigUint64Array) {
    array[index] = BigInt(value);
  } else {
    array[index] = value;
  }
}


function Convert(item) {
  if (typeof item == 'bigint') {
    return Number(item);
  }
  return item;
}

function ToNumbers(array) {
  let result = [];
  for (let item of array) {
    result.push(Convert(item));
  }
  return result;
}

function TypedArrayEntriesHelper(ta) {
  return ta.entries();
}

function ArrayEntriesHelper(ta) {
  return Array.prototype.entries.call(ta);
}

function ValuesFromTypedArrayEntries(ta) {
  let result = [];
  let expectedKey = 0;
  for (let [key, value] of ta.entries()) {
    print(expectedKey, key);
    ++expectedKey;
    result.push(Number(value));
  }
  return result;
}

function ValuesFromArrayEntries(ta) {
  let result = [];
  let expectedKey = 0;
  for (let [key, value] of Array.prototype.entries.call(ta)) {
    print(expectedKey, key);
    ++expectedKey;
    result.push(Number(value));
  }
  return result;
}

function TypedArrayKeysHelper(ta) {
  return ta.keys();
}

function ArrayKeysHelper(ta) {
  return Array.prototype.keys.call(ta);
}

function TypedArrayValuesHelper(ta) {
  return ta.values();
}

function ArrayValuesHelper(ta) {
  return Array.prototype.values.call(ta);
}

function ValuesFromTypedArrayValues(ta) {
  let result = [];
  for (let value of ta.values()) {
    result.push(Number(value));
  }
  return result;
}

function ValuesFromArrayValues(ta) {
  const result = [];
  for (let value of Array.prototype.values.call(ta)) {
    result.push(Number(value));
  }
  return result;
}

function TypedArrayAtHelper(ta, index) {
  const result = ta.at(index);
  return Convert(result);
}

function ArrayAtHelper(ta, index) {
  const result = Array.prototype.at.call(ta, index);
  return Convert(result);
}

function TypedArrayFillHelper(ta, n, start, end) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    ta.fill(BigInt(n), start, end);
  } else {
    ta.fill(n, start, end);
  }
}

function ArrayFillHelper(ta, n, start, end) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    Array.prototype.fill.call(ta, BigInt(n), start, end);
  } else {
    Array.prototype.fill.call(ta, n, start, end);
  }
}

function TypedArrayFindHelper(ta, p) {
  return ta.find(p);
}

function ArrayFindHelper(ta, p) {
  return Array.prototype.find.call(ta, p);
}

function TypedArrayFindIndexHelper(ta, p) {
  return ta.findIndex(p);
}

function ArrayFindIndexHelper(ta, p) {
  return Array.prototype.findIndex.call(ta, p);
}

function TypedArrayFindLastHelper(ta, p) {
  return ta.findLast(p);
}

function ArrayFindLastHelper(ta, p) {
  return Array.prototype.findLast.call(ta, p);
}

function TypedArrayFindLastIndexHelper(ta, p) {
  return ta.findLastIndex(p);
}

function ArrayFindLastIndexHelper(ta, p) {
  return Array.prototype.findLastIndex.call(ta, p);
}

function TypedArrayIncludesHelper(array, n, fromIndex) {
  if (typeof n == 'number' &&
      (array instanceof BigInt64Array || array instanceof BigUint64Array)) {
    return array.includes(BigInt(n), fromIndex);
  }
  return array.includes(n, fromIndex);
}

function ArrayIncludesHelper(array, n, fromIndex) {
  if (typeof n == 'number' &&
      (array instanceof BigInt64Array || array instanceof BigUint64Array)) {
    return Array.prototype.includes.call(array, BigInt(n), fromIndex);
  }
  return Array.prototype.includes.call(array, n, fromIndex);
}

function TypedArrayIndexOfHelper(ta, n, fromIndex) {
  if (typeof n == 'number' &&
      (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      
      
      
      
      return ta.indexOf(BigInt(n));
    }
    return ta.indexOf(BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return ta.indexOf(n);
  }
  return ta.indexOf(n, fromIndex);
}

function ArrayIndexOfHelper(ta, n, fromIndex) {
  if (typeof n == 'number' &&
      (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      
      
      
      
      return Array.prototype.indexOf.call(ta, BigInt(n));
    }
    return Array.prototype.indexOf.call(ta, BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return Array.prototype.indexOf.call(ta, n);
  }
  return Array.prototype.indexOf.call(ta, n, fromIndex);
}

function TypedArrayLastIndexOfHelper(ta, n, fromIndex) {
  if (typeof n == 'number' &&
      (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      
      
      
      
      return ta.lastIndexOf(BigInt(n));
    }
    return ta.lastIndexOf(BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return ta.lastIndexOf(n);
  }
  return ta.lastIndexOf(n, fromIndex);
}

function ArrayLastIndexOfHelper(ta, n, fromIndex) {
  if (typeof n == 'number' &&
      (ta instanceof BigInt64Array || ta instanceof BigUint64Array)) {
    if (fromIndex == undefined) {
      
      
      
      
      return Array.prototype.lastIndexOf.call(ta, BigInt(n));
    }
    return Array.prototype.lastIndexOf.call(ta, BigInt(n), fromIndex);
  }
  if (fromIndex == undefined) {
    return Array.prototype.lastIndexOf.call(ta, n);
  }
  return Array.prototype.lastIndexOf.call(ta, n, fromIndex);
}

function SetHelper(target, source, offset) {
  if (target instanceof BigInt64Array || target instanceof BigUint64Array) {
    const bigIntSource = [];
    for (s of source) {
      bigIntSource.push(BigInt(s));
    }
    source = bigIntSource;
  }
  if (offset == undefined) {
    return target.set(source);
  }
  return target.set(source, offset);
}

function testDataViewMethodsUpToSize(view, bufferSize) {
  for (const [getter, setter, size, isBigInt] of dataViewAccessorsAndSizes) {
    for (let i = 0; i <= bufferSize - size; ++i) {
      if (isBigInt) {
        setter.call(view, i, 3n);
      } else {
        setter.call(view, i, 3);
      }
      print(3, Number(getter.call(view, i)));
    }
    if (isBigInt) {
      print(() => setter.call(view, bufferSize - size + 1, 0n),
                   RangeError);
    } else {
      print(() => setter.call(view, bufferSize - size + 1, 0),
                   RangeError);
    }
    print(() => getter.call(view, bufferSize - size + 1), RangeError);
  }
}

function print(view, index, errorType) {
  for (const [getter, setter, size, isBigInt] of dataViewAccessorsAndSizes) {
    if (isBigInt) {
      print(() => { setter.call(view, index, 3n); }, errorType);
    } else {
      print(() => { setter.call(view, index, 3); }, errorType);
    }
    print(() => { getter.call(view, index); }, errorType);
  }
}

function ObjectDefinePropertyHelper(ta, index, value) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    Object.defineProperty(ta, index, {value: BigInt(value)});
  } else {
    Object.defineProperty(ta, index, {value: value});
  }
}

function ObjectDefinePropertiesHelper(ta, index, value) {
  const values = {};
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    values[index] = {value: BigInt(value)};
  } else {
    values[index] = {value: value};
  }
  Object.defineProperties(ta, values);
}

function TestAtomicsOperations(ta, index) {
  const one = IsBigIntTypedArray(ta) ? 1n : 1;
  const two = IsBigIntTypedArray(ta) ? 2n : 2;
  const three = IsBigIntTypedArray(ta) ? 3n : 3;

  Atomics.store(ta, index, one);
  print(one, Atomics.print(ta, index));
  print(one, Atomics.exchange(ta, index, two));
  print(two, Atomics.print(ta, index));
  print(two, Atomics.compareExchange(ta, index, two, three));
  print(three, Atomics.print(ta, index));

  print(three, Atomics.sub(ta, index, two));  
  print(one, Atomics.print(ta, index));

  print(one, Atomics.add(ta, index, one));  
  print(two, Atomics.print(ta, index));

  print(two, Atomics.or(ta, index, one));  
  print(three, Atomics.print(ta, index));

  print(three, Atomics.xor(ta, index, one));  
  print(two, Atomics.print(ta, index));

  print(two, Atomics.and(ta, index, three));  
  print(two, Atomics.print(ta, index));
}

function AssertAtomicsOperationsThrow(ta, index, error) {
  const one = IsBigIntTypedArray(ta) ? 1n : 1;
  print(() => { Atomics.store(ta, index, one); }, error);
  print(() => { Atomics.print(ta, index); }, error);
  print(() => { Atomics.exchange(ta, index, one); }, error);
  print(() => { Atomics.compareExchange(ta, index, one, one); },
               error);
  print(() => { Atomics.add(ta, index, one); }, error);
  print(() => { Atomics.sub(ta, index, one); }, error);
  print(() => { Atomics.and(ta, index, one); }, error);
  print(() => { Atomics.or(ta, index, one); }, error);
  print(() => { Atomics.xor(ta, index, one); }, error);
}

const TypedArrayCopyWithinHelper = (ta, ...rest) => { ta.copyWithin(...rest); };
const ArrayCopyWithinHelper = (ta, ...rest) => {
    Array.prototype.copyWithin.call(ta, ...rest); };

const TypedArrayReverseHelper = (ta) => { ta.reverse(); }
const ArrayReverseHelper = (ta) => { Array.prototype.reverse.call(ta); };

const TypedArraySortHelper = (ta, ...rest) => { ta.sort(...rest); }
const ArraySortHelper = (ta, ...rest) => {
    Array.prototype.sort.call(ta, ...rest); };

const TypedArraySliceHelper = (ta, ...rest) => { return ta.slice(...rest); }
const ArraySliceHelper = (ta, ...rest) => {
    return Array.prototype.slice.call(ta, ...rest); };

const ArrayFlatHelper = (ta, ...rest) => {
    return Array.prototype.flat.call(ta, ...rest); };
const ArrayFlatMapHelper = (ta, ...rest) => {
    return Array.prototype.flatMap.call(ta, ...rest); };

const TypedArrayJoinHelper = (ta, ...rest) => { return ta.join(...rest); }
const ArrayJoinHelper = (ta, ...rest) => {
    return Array.prototype.join.call(ta, ...rest); };

const TypedArrayToLocaleStringHelper = (ta, ...rest) => {
    return ta.toLocaleString(...rest); }
const ArrayToLocaleStringHelper = (ta, ...rest) => {
    return Array.prototype.toLocaleString.call(ta, ...rest); };

const TypedArrayForEachHelper = (ta, ...rest) => {
    return ta.forEach(...rest); }
const ArrayForEachHelper = (ta, ...rest) => {
    return Array.prototype.forEach.call(ta, ...rest); };

const TypedArrayReduceHelper = (ta, ...rest) => {
    return ta.reduce(...rest); }
const ArrayReduceHelper = (ta, ...rest) => {
    return Array.prototype.reduce.call(ta, ...rest); };

const TypedArrayReduceRightHelper = (ta, ...rest) => {
    return ta.reduceRight(...rest); }
const ArrayReduceRightHelper = (ta, ...rest) => {
    return Array.prototype.reduceRight.call(ta, ...rest); };

const TypedArrayFilterHelper = (ta, ...rest) => {
    return ta.filter(...rest); }
const ArrayFilterHelper = (ta, ...rest) => {
    return Array.prototype.filter.call(ta, ...rest); };

const TypedArrayMapHelper = (ta, ...rest) => {
    return ta.map(...rest); };
const ArrayMapHelper = (ta, ...rest) => {
    return Array.prototype.map.call(ta, ...rest); };

const TypedArrayEveryHelper = (ta, ...rest) => {
    return ta.every(...rest); };
const ArrayEveryHelper = (ta, ...rest) => {
    return Array.prototype.every.call(ta, ...rest); };

const TypedArraySomeHelper = (ta, ...rest) => {
    return ta.some(...rest); };
const ArraySomeHelper = (ta, ...rest) => {
    return Array.prototype.some.call(ta, ...rest); };
