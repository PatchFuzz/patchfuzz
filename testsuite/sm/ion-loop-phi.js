

wasmEvalText(`(module
  (func)
  (func (local i32)
    try
      loop
        call 0
        i32.const 0
        br_if 0
      end
    catch_all
    end
  )
)`);



wasmEvalText(`(module
  (func)
  (func (local i32)
    try
      try
        loop
          call 0
          i32.const 0
          br_if 0
        end
      delegate 0
    catch_all
    end
  )
)`);


wasmEvalText(`(module
  (func)
  (func (local i32)
    loop
      try
        (; catch patch to try block is added ;)
        call 0
        (; br_if ensures we will need a backedge ;)
        i32.const 0
        br_if 1
      (; catch patches are relocated to body ;)
      delegate 1
    (; finishing loop backedge must fixup patches stored in body ;)
    end

    (; add another catch patch to body so that the landing pad will be a
       join point between two edges, forcing a use of the dangling phi,
       hitting the debug assertion
    ;)
    try
      call 0
    delegate 0
  )
)`);
