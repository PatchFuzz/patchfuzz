class MyError {}

async function print(f)
{
    let caught = false;
    try {
        await f();
    } catch (e) {
        caught = true;
        print(e.constructor, MyError);
    }
    print(caught, true);
}

registerModule("a", parseModule(`
    throw new MyError();
`));

let c = registerModule("c", parseModule(`
    import "a";
`));
moduleLink(c);
print(() => moduleEvaluate(c));

let b = registerModule('b', parseModule(`
    import * as ns0 from 'a'
`));
moduleLink(b);
print(() => moduleEvaluate(b));

drainJobQueue();
