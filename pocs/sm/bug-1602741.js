let finalizeRan = false;
let promiseRan = false;

let fr = new FinalizationRegistry(() => {
  finalizeRan = true;
  Promise.resolve().then(() => {
    promiseRan = true;
  });
});

fr.register({}, {});

gc();

print(finalizeRan, false);
print(promiseRan, false);

drainJobQueue();

print(finalizeRan, true);
print(promiseRan, true);
