

function assert(b) {
    if (!b)
        throw new Error;
}

function main() {
    let result;
    const v35 = [0, 0, {b:"AAAAA"}];
    
    async function v36(arr) {
        edenGC();  
        for (let i = 0; i < 2; i++) {
            const v201 = ` 
                var someVar; 

                for (let j = 0; j < 60000; j++) { }

                const v222 = {"__proto__":[[]], "a":0, "b":0};
                for (const prop in v222) {
                    result = arr[prop];
                    v222.__proto__ = {};
                }
            `;
            eval(v201); 
        }
    }
    v35.filter(v36);
    assert(result === "AAAAA");
}
main();
