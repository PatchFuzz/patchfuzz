



let theCode = `
for (let i=0; i<10000; i++) {
    0 .toLocaleString();
}
`;

for (let i = 0; i < hardness; i++)
    $.agent.start(theCode);
