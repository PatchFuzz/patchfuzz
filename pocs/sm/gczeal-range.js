try {
    gczeal(123);
} catch (e) {
    print(e.toString().includes("invalid"), true);
}
