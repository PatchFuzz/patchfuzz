




eval(`import('modules-skip-2.js');`).then(
    assertUnreachable,
    () => { });
eval(`eval(import('modules-skip-2.js'));`).then(
    assertUnreachable,
    () => { });
