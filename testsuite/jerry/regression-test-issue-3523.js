













var obj = {
    sort: Array.prototype.sort,
    $: 0
}
assert(obj.sort() === obj);
