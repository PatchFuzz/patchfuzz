const typeError = /incompatible super type/;

var code =`
(module
    (type $A (sub (struct (field i32))))
    (type $B (sub $A (struct (field i32) (field i32))))
    (type $C (sub $B (struct (field i32) (field i32) (field i64))))

    ;; Can't declare a super type with the final flag
    (type $D (sub final $C (struct (field i32) (field i32) (field f32))))
    (type $E (sub $D (struct (field i32) (field i32) (field f32))))
)`;

wasmFailValidateText(code, typeError);

code =`
(module
    (type $A (sub (struct (field i32))))
    (type $B (sub $A (struct (field i32) (field i32))))
    (type $C (sub $B (struct (field i32) (field i32))))

    ;; $D is final, without any supertype
    (type $D (sub final (struct (field i32) (field i32) (field f32))))
    (type $E (sub $D (struct (field i32) (field i32) (field f32))))
)`;

wasmFailValidateText(code, typeError);


code =`
(module
    (type $A (struct (field i32)))
    (type $B (sub $A (struct (field i32) (field i32))))
)`;

wasmFailValidateText(code, typeError);


code =`
(module
    (type $A (sub (struct (field i32))))
    (type $B (sub $B (struct (field i32) (field i32))))
)`;

wasmFailValidateText(code, /invalid super type index/);
