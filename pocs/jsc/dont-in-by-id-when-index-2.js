function print(b) {
    if (!b)
        throw new Error;
}

function main() {
    let v249;

    const v178 = [];

    v179 = class V179 {
        constructor(v181,v182,v183) {
        }
    };

    const v195 = [v178,v179,1];
    const v203 = {};
    const v204 = [v179,v195];
    const v205 = v204.toLocaleString();

    for (const v223 of v205) {
        const v232 = {};
        v232[v223] = "number";

        async function v244() {
            v249 = "1" in v232;
            const v250 = 0;
        }
        v244();
    }

    print(v249 === true);
}

main();
