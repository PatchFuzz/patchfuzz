async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const container = {};

function opt() {
    const object = container.abc;

    return object.x;
}

async function main() {
    const array = [];
    array[1000] = 1.1;
    array.fill(1.1);
    array.unshift(1.1);

    array.__defineGetter__('x', () => 1);

    container.abc = array;

    for (let i = 0; i < testLoopCount; i++) {
        opt();
    }

    await sleep(250);

    array.y = 0x2222;
    array.unshift(1.1, 2.2, 3.3);

    await sleep(2000);
}

main();
