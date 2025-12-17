var result;

import("../".repeat(42)).then(
    () => print('Should have failed due to non-existing module'),
    error => result = error.message);

%PerformMicrotaskCheckpoint();

print('d8: Error reading module from ', result);
