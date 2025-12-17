function parse(txt) {
    try {
        eval(txt)
        assert(false)
    } catch (e) {
        assert(e instanceof SyntaxError)
    }
}

parse("for (var x = 1 of []) { }")
