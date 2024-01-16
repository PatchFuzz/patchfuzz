

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}

shouldThrow(() => {
    Array.prototype.group.call(null, () => {  })
}, `TypeError: Array.prototype.group requires that |this| not be null or undefined`);
shouldThrow(() => {
    Array.prototype.group.call(undefined, () => {  })
}, `TypeError: Array.prototype.group requires that |this| not be null or undefined`);

shouldThrow(() => {
    Array.prototype.groupToMap.call(null, () => {  })
}, `TypeError: Array.prototype.groupToMap requires that |this| not be null or undefined`);
shouldThrow(() => {
    Array.prototype.groupToMap.call(undefined, () => {  })
}, `TypeError: Array.prototype.groupToMap requires that |this| not be null or undefined`);
