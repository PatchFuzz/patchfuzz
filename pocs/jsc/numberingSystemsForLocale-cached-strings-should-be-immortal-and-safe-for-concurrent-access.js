let theCode = `
for (let i=0; i<testLoopCount; i++) {
    0 .toLocaleString();
}
`;

for (let i = 0; i < hardness; i++)
    $.agent.start(theCode);
