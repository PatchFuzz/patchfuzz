const v0 = `
    const v1 = \`
        v1 >>> v1;
    \`;
    eval(v1);
`;
%RuntimeEvaluateREPL(v0);
