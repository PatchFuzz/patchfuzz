




eval(`import('modules-skip-2.js');`).then(
    print,
    () => { });
eval(`eval(import('modules-skip-2.js'));`).then(
    print,
    () => { });
