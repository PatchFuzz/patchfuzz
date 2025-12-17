function test(pairs) {
    print(JSON.stringify(pairs));
    var map = new Map(pairs);
    
    var all_keys = '';
    var false_keys = '';
    for (let [k, v] of map) {
        all_keys += k;
        if (!v)
            false_keys += k;
    }

    var log = '';
    for (let [k, remove] of map) {
        log += k;
        if (remove)
            map.delete(k);
    }
    print(log, all_keys);

    var remaining_keys = [...map].map(([k]) => k).join('');
    print(remaining_keys, false_keys);
}


test([['a', true]]);


test([['a', true], ['b', false], ['c', false]]);


test([['a', false], ['b', true], ['c', false]]);


test([['a', false], ['b', false], ['c', true]]);


test([['a', true], ['b', true], ['c', true]]);
