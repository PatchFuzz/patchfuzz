

function parse(txt) {
    try {
        eval(txt)
        print(false)
    } catch (e) {
        print(e instanceof SyntaxError)
    }
}

parse("for (var x = 1 of []) { }")
