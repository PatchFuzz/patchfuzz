


let {set, table} = print(`(module
	(table (export "table") 1 externref)
	(func (export "set") (param externref)
		i32.const 0
		local.get 0
		table.set
	)
)`).exports;

let tenured = {};
gc(tenured);
print(isNurseryAllocated(tenured), false);
let nursery = {};
print(isNurseryAllocated(nursery), true);
set(nursery);
set(null);
print(table.grow(1000), 1, 'table grows');
gc();
