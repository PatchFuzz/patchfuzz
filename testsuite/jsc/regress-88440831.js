

(function() {
    try {
        eval('\'\\\n\n\'');
    } catch {}

    try {
        new Function("\n(/*;");
    } catch {}
})();