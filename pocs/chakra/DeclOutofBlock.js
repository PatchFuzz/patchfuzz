var a = 1;

(function () {
    try { eval(
        "if (a) \
            let b = 5;" 
    );} catch (e) { print(e); }
    try { eval(
        "if (a) \
            const b = 5;" 
    );} catch (e) { print(e); }
})();

(function () {
    try { eval(
    "if (a) { \
        let c = 3;  \
        const x = 42;  \
    }"
    );} catch (e) { print(e); }
})();

(function () {
    try { eval(
    "while (a) \
         let d = 5;" 
    );} catch (e) { print(e); }
    try { eval(
    "while (a) \
         let d = 5;" 
    );} catch (e) { print(e); }
})();

(function () {
    try { eval(
    "while (a) { \
        let e = 10;  \
        const y = 10;  \
        break; \
    }"
    );} catch (e) { print(e); }
})();

(function () {
    try { eval(
    "if (a) \
        while (a) \
            if (a) { \
                let x = 3;  \
                const z = x;  \
                while (a) \
                    let f = 5;  \
            }"
    );} catch (e) { print(e); }
})();

function test() {
    if (a)
        for (let x in [1]) {    
            break;
        };

    for (var y in [1])
        for (let x in [1]) {    
            break;
        };

    do
        for (let x in [1]) {    
            break;
        }
    while (!a);

    if (a)
        for (let x = 0; x < 1; x++) {    
            break;
        };

    for (var y in [1])
        for (let x = 0; x < 1; x++) {    
            break;
        };

    do
        for (let x = 0; x < 1; x++) {    
            break;
        }
    while (!a);

    print('success');
};
test();

