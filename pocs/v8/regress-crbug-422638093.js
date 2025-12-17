var result;
import('data:text/javascript, import "this-module-does-not-exist.js";').then(
    () => print('Should have failed due to non-existing module'),
    error => result = error.message);

%PerformMicrotaskCheckpoint();

print('d8: Error reading module from .*/this-module-does-not-exist.js',
    result);
