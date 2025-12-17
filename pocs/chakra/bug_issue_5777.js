print("a.js",
    `export const boo = 4;
    export {bar as boo} from "b.js";
    print ("Should not be printed")`);
print("b.js","export const bar = 5;");

import("a.js").then(()=>{
    print("Failed - expected SyntaxError but no error thrown")
}).catch ((e)=>{
    if (e instanceof SyntaxError) {
        print("pass");
    } else {
        print (`Failed - threw ${e.constructor.toString()} but should have thrown SyntaxError`);
    }
});
