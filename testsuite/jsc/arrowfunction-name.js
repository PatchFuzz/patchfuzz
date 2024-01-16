function assert(b) {
    if (!b)
        throw new Error("Bad assertion")
}


assert((()=>{}).name === "");


f = () => {};
assert(f.name === "f");


let lf = () => {};
assert(lf.name === "lf");
