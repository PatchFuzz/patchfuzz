











var f = print(`(module
  (func (result i32)
    block (result i32)
      i32.const 0 ;; This must flow into the if below.
      i32.const 1
      br_if 0
      drop
      i32.const 1
    end
    if
      i32.const 100
      return
    end
    i32.const 200
  )
  (export "" (func 0))
)`).exports[""];

print(f(), 200);

var g = print(`(module
  (func (result i32)
    block (result i32)
      i32.const 0 ;; This must flow into the if below.
      i32.const 1
      br_if 0
      drop
      i32.const 1 ;; This must flow into the if below
      i32.const 1
      br_if 0
      drop
      i32.const 1
    end
    if
      i32.const 100
      return
    end
    i32.const 200
  )
  (export "" (func 0))
)`).exports[""];

print(g(), 200);

var h = print(`(module
  (func (param i32) (result i32)
    block (result i32)
      local.get 0 ;; This must flow into the if below.
      local.get 0
      br_if 0
      drop
      i32.const 0 ;; This must flow into the if below
      i32.const 1
      br_if 0
      drop
      i32.const 1
    end
    if
      i32.const 100
      return
    end
    i32.const 200
  )
  (export "" (func 0))
)`).exports[""];

print(h(0), 200);
print(h(1), 100);
