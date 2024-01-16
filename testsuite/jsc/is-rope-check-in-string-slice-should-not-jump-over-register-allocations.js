

function foo() {
    for (let i = 0; i < 400; i++) {
        const s = 'a'+'a';
        function bar() {
            s.slice(0);
        }
        for (const _ in {}) {
        }
        const o = {
        };
        bar([], [], [], [], {});
        o ** '';
    }
}
foo();
