
try {
    (function () {
        let a = {
            get val() {
                [...{a = 1.45}] = [];
                a.val.x;
            },
        };

        a.val;
    })();
} catch (e) {
}
