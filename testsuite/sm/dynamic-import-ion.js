

for (let i = 0; i < 2; i++) {
    let result = null;
    let error = null;
    let promise = import("../../modules/module1.js");
    promise.then((ns) => {
        result = ns;
    }).catch((e) => {
        error = e;
    });

    drainJobQueue();
    assertEq(error, null);
    assertEq(result.a, 1);
}
