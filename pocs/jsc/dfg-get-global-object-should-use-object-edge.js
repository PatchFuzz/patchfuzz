function opt(arg) {
    try {
        arg.test({ test: "padEnd" });
    } catch (e) { }
    arg.test(/123/);
}

for (let i = 0; i < 50; i++) {
    opt({ test: opt });
}
