













try {
    eval ("export class Dog {constructor() {}}; for (var a")
} catch (e) {
    assert (e instanceof SyntaxError)
}
