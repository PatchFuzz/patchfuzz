print(`
    function __v_0() {
        function __v_2() {
            try {
                function* __v_0() {}
                function __v_0() {}
            }
        }
    }`, SyntaxError);
