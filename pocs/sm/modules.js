import('./invalid-json-module.json', { with: { type: 'json' }})
    .then(() => {
        print(true, false, "unreachable");
    })
    .catch(e => {
        print(e.fileName.endsWith('invalid-json-module.json'), true);
        print(e.lineNumber, 1);
        print(e.columnNumber, 6);
    });
