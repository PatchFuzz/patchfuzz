var g = newGlobal({newCompartment: true});
var dbg1 = new Debugger(g);
var dbg2 = new Debugger(g);

var log;
var frames = [];
var firstPop = true;

function handleEnter(frame) {
    log += '(';
    frames.push(frame);
    frame.onPop = function handlePop(completion) {
        log += ')';
        print(completion.return, 42);
        if (firstPop) {
            
            if (this == frames[0])
                frames[1].onPop = undefined;
            else
                frames[0].onPop = undefined;
            gc();
        } else {
            print("second pop handler was called",
                     "second pop handler should not be called");
        }
        firstPop = false;
    };
};

dbg1.onEnterFrame = handleEnter;
dbg2.onEnterFrame = handleEnter;

log = '';
print(g.eval('40 + 2'), 42);
print(log, '(()');
