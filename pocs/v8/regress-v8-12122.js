const promiseAllCallOnNonObjectErrorMessage =
    'Promise.all called on non-object';
const promiseAllSettledCallOnNonObjectErrorMessage =
    'Promise.allSettled called on non-object';

print(
    () => Promise.all.call(), TypeError, promiseAllCallOnNonObjectErrorMessage);
print(
    () => Promise.allSettled.call(), TypeError,
    promiseAllSettledCallOnNonObjectErrorMessage);
print(
    () => Promise.all.apply(), TypeError,
    promiseAllCallOnNonObjectErrorMessage);
print(
    () => Promise.allSettled.apply(), TypeError,
    promiseAllSettledCallOnNonObjectErrorMessage);
