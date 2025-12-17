try {
  
  new ArrayBuffer(1, {maxByteLength: 2147483647});
  new ArrayBuffer(1, {maxByteLength: 9007199254740000});
} catch (e) {

}
