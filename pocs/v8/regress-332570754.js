function callbackFn(elem, index) {
    const target = [42];
    function cb(elem, index, arr) {
        arr.pop();
        return undefined;
    }
    target.forEach(cb);
    this.console.profile();
    return elem;
}
const float_arr = new Float64Array(200);
float_arr.findIndex(callbackFn);
