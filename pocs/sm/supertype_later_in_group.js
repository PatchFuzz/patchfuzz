wasmValidateText(`
(module
    (rec
        (type $a (sub (struct (field (ref $notParsedYet)))))
        (type $b (sub $a (struct (field (ref $notParsedYet2)))))

        (type $notParsedYet (sub (struct)))
        (type $notParsedYet2 (sub $notParsedYet (struct (field i32))))
    )
)`);
