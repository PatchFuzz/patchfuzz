function testStepping(script, expected) {
    let g = newGlobal({newCompartment: true});
    let f = g.eval(script);

    let log = [];
    function maybePause(frame) {
        let previousLine = log[log.length - 1]; 
        let line = frame.script.getOffsetLocation(frame.offset).lineNumber;
        if (line !== previousLine)
            log.push(line);
    }

    let dbg = new Debugger(g);
    dbg.onEnterFrame = frame => {
        
        maybePause(frame);

        
        frame.onStep = function() { maybePause(this); };

        
        dbg.onEnterFrame = undefined;
    };

    f();

    print(log.join(","), expected.join(","));
}
