let g = newGlobal({newCompartment: true});
g.evaluate(`
    function factory() {
        return function() { };
    }
`);


g.factory()();
finishgc();
startgc(0, 'shrinking');
g.factory()();
