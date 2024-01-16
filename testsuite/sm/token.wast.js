




assert_malformed(() => instantiate(`(func (drop (i32.const0))) `), `unknown operator`);


assert_malformed(() => instantiate(`(func br 0drop) `), `unknown operator`);
