for (let i = 0; i < 100; ++i) {
  
  let ab = createExternalArrayBuffer(0);

  
  let source = new Float64Array(ab);

  
  
  let target = new Float64Array(source);

  
  print(ab.byteLength, 0);
  print(source.byteLength, 0);
  print(target.byteLength, 0);
}


for (let i = 0; i < 100; ++i) {
  let ab = createUserArrayBuffer(0);
  let source = new Float64Array(ab);
  let target = new Float64Array(source);

  print(ab.byteLength, 0);
  print(source.byteLength, 0);
  print(target.byteLength, 0);
}
