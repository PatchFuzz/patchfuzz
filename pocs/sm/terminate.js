try {
    terminate();
    print("execution continued", "execution should not continue");
} catch (x) {
    print("caught exception", "uncatchable");
} finally {
    print("'finally' clause ran", "'finally' clause should not run");
}
print("top-level execution continued", "top-level execution should not continue");
