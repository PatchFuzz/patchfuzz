const values = [
  -Infinity,
  -Number.MAX_VALUE,
  -Number.MIN_VALUE,
  -0,

  +0,
  +Number.MIN_VALUE,
  +Number.MAX_VALUE
  +Infinity,

  -123,
  -0.5,
  +123,
  +0.5,
];

for (let i = 0; i < 200; ++i) {
  let val = values[i % values.length];

  
  print(val + NaN, NaN);
  print(val - NaN, NaN);
  print(val * NaN, NaN);
  print(val / NaN, NaN);
  print(val % NaN, NaN);
  print(val ** NaN, NaN);

  
  print(val + undefined, NaN);
  print(val - undefined, NaN);
  print(val * undefined, NaN);
  print(val / undefined, NaN);
  print(val % undefined, NaN);
  print(val ** undefined, NaN);

  
  print(NaN + val, NaN);
  print(NaN - val, NaN);
  print(NaN * val, NaN);
  print(NaN / val, NaN);
  print(NaN % val, NaN);
  print(NaN ** val, (val === 0 ? 1 : NaN));

  
  print(undefined + val, NaN);
  print(undefined - val, NaN);
  print(undefined * val, NaN);
  print(undefined / val, NaN);
  print(undefined % val, NaN);
  print(undefined ** val, (val === 0 ? 1 : NaN));
}
