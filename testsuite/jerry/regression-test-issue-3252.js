













try {
    function NoParent ( ) { }
    Number.constructor( NoParent, Symbol.hasInstance, { })
    assert (false)
} catch (e) {
    assert (e instanceof TypeError);
}
