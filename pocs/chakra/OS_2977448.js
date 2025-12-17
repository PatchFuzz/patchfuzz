try {
    
    eval("ⸯ");
} catch (e) {
    if (e instanceof SyntaxError) {
        print("PASS");
    } else {
        print(e);
    }
}
