var result1, result2;
import('./modules-skip-regress-crbug-424617296.js').then(
    () => print('Should have failed due to non-existing module'),
    error => result1 = error.message);
import('./modules-skip-regress-crbug-424617296.js').then(
    () => print('Should have failed due to non-existing module'),
    error => result2 = error.message);

%PerformMicrotaskCheckpoint();

print(result1, result2);
print('d8: Error reading module from .*/this-module-does-not-exist.js',
    result1);
