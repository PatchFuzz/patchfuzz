function write(x) { print(x); }


try {
    eval(
            "(function () {" +
            "   let x = 'let x';" +
            "   var x = 'redeclaration error';" +
            "   write(x);" +
            "})();"
        );
} catch (e) {
    write(e);
}








try {
    eval(
            "(function () {" +
            "   {" +
            "       let x = 'let x';" +
            "       var x = 'var x';" +
            "       write(x);" +
            "   }" +
            "   write(x);" +
            "   {" +
            "       let y = 'let y';" +
            "       write(y);" +
            "       var y = 'var y';" +
            "       write(y);" +
            "   }" +
            "   write(y);" +
            "})();"
        );
} catch (e) {
    write(e);
}



try {
    eval(
            "(function () {" +
            "   {" +
            "       var x = 'var x';" +
            "       let x = 'let x';" +
            "       write(x);" +
            "   }" +
            "   write(x);" +
            "})();"
        );
} catch (e) {
    write(e);
}
