a = [];
for (i = 0; i < 1000; ++i) {
    a.push("x" + i);
}


parseModule(`
    let ${a.join(",")};
    `);


parseModule(`
    let ${a.join(",")};
    await 1;
    `);
