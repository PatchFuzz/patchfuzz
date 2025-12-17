const v0 = `
    const v4 = Array(v2);
    class C5 {
        static o(a7, a8, a9) {
            v4.__proto__ = v2;
        }
    }
`;

print(%RuntimeEvaluateREPL(v0));
