



const promiseAllCallOnNonObjectErrorMessage =
    'Promise.all called on non-object';
const promiseAllSettledCallOnNonObjectErrorMessage =
    'Promise.allSettled called on non-object';

assertThrows(
    () => Promise.all.call(), TypeError, promiseAllCallOnNonObjectErrorMessage);
assertThrows(
    () => Promise.allSettled.call(), TypeError,
    promiseAllSettledCallOnNonObjectErrorMessage);
assertThrows(
    () => Promise.all.apply(), TypeError,
    promiseAllCallOnNonObjectErrorMessage);
assertThrows(
    () => Promise.allSettled.apply(), TypeError,
    promiseAllSettledCallOnNonObjectErrorMessage);
