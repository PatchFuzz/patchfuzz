try {
    eval("{const x = 1;}print(x);");
} catch(e) {
    print(e);
}




try {
    eval("--foo 0");
} catch(e) {
    print(e);
}
