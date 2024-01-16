



(function () {
    
    let data = new Array(1600).fill(null).map((e, i) => ({
        invariantKey: 'v',
        ['randomKey' + i]: 'w',

    }));

    
    data = JSON.parse(JSON.stringify(data))

    
    for (const t of data) {
      assertFalse(Object.keys(t).some(k => !t[k]));
    }
})()
