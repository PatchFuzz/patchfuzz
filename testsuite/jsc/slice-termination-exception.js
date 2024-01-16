
async function infiniteLoop() {
  await undefined;
  while (1) ;
}

infiniteLoop();
drainMicrotasks();
[].slice();
