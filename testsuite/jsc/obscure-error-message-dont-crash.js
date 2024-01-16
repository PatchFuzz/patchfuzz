

let success = false;
try {
    eval(`or ([[{break 
         [[{aFY sga=
         [[{a=Yth FunctionRY&=Ylet 'a'}V a`)
} catch(e) {
    success = e.toString() === "SyntaxError: Unexpected token '
}

if (!success)
    throw new Error("Bad result")
