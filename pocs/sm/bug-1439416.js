function parseAsModule(source) {
    return Reflect.parse(source, {
        target: "module",
        line: 0
    });
}
parseAsModule("import d from 'a'");
