
let exports = print(`(module
	(func)
	(export "\\00first" (func 0))
	(export "\\00second" (func 0))
)`).exports;
print(exports["\0first"] instanceof Function, true);
print(exports["\0second"] instanceof Function, true);


let imports = {
	"\0module": {
		"\0field": 10,
	}
};
let {global} = print(`(module
	(import "\\00module" "\\00field" (global i32))
	(export "global" (global 0))
)`, imports).exports;
print(global.value, 10);
