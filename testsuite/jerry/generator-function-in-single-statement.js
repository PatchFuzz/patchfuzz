


function parse(txt) {
    try {
        eval(txt)
        assert(false)
    } catch (e) {
        assert(e instanceof SyntaxError)
    }
}

parse("if (true) function* g() {  }")
parse("if (false) ; else function* g() {  }")
