
let code = `
function* g1() {}
function* g2() {}
g1().next();
g2().next();
`;


for (var i=0; i < 1e3; i++)
    runString(code);
