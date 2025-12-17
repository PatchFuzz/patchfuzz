for (let v3 = 0; v3 < 1000; v3++) {
    const v4 = `
        class C6 {
        }
        for (let v7 = 0; v7 < 5; v7++) {
            C6 ? -6 : C6;
        }
    `;
    eval(v4);
}
