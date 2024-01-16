




let arr = [...Array(9000)];
for (let j = 0; j < 40; j++) {
  Reflect.ownKeys(arr).shift();
  Array(64386);
}
