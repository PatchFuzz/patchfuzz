




try {
    
    eval("ⸯ");
} catch (e) {
    if (e instanceof SyntaxError) {
        WScript.Echo("PASS");
    } else {
        WScript.Echo(e);
    }
}
