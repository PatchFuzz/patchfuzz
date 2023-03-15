gczeal(14, 1);
let { exports } = print(`(module
    (global $externref (import "glob" "externref") externref)
    (func (export "get") (result externref) global.get $externref)
)`, {
    glob: {
        externref: { sentinel: "lol" },
    }
});
print(exports.get().sentinel, "lol");
