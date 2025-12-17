function testOne() {
    const v2 = [13.37,13.37,13.37,13.37,13.37];
    async function v4(v5,v6,v7,v8) {
        const v10 = 0;
        for (let v14 = 0; v14 < 8; v14++) {
            v5["vEBD7ei78q"] = v14;
        }
        for (let v16 = 1; v16 < 1337; v16++) {
            const v17 = v2.__proto__;
            const v23 = [13.37,13.37,-2.2250738585072014e-308,13.37,13.37];
            const v24 = v23.length;
            const v25 = "-4294967296";
            const v26 = 7;
            function* v28(v29,v30,v31,...v32) {}
            let v33 = -2.2250738585072014e-308;
            const v34 = v28(v33,Object,Object);
            const v35 = 13.37;
            const v36 = 2384357829;
            const v37 = await "-4294967296";
            const v38 = --v33;
        }
        const v39 = 128;
    }
    return v4("vEBD7ei78q");
}


function testTwo() {
    let finallyCount = 0;
    let throwCount = 0;
    async function asyncFinally() {
        for (let i = 0; i < 1000; ++i){
            try {
                if (i > 170) {
                    ++throwCount;
                    throw 1;
                }
            }
            finally {
                ++finallyCount;
            }
        }
    }
    return asyncFinally ().catch((e) => {
        if (throwCount != 1) {
            throw new Error ("Wrong number of throws within async function expected 1 but received " + throwCount);
        }
        if (e != 1) {
            throw new Error ("Wrong value thrown from async function expected 1 but received " + e);
        }
        if (finallyCount != 172) {
            throw new Error ("Wrong number of finally calls from async function expected 172 but received " + finallyCount);
        }
    });
}

function testThree() {
    let finallyCount = 0;
    let throwCount = 0;
    async function asyncFinallyAwait() {
        for (let i = 0; i < 1000; ++i){
            try {
                if (i > 170) {
                    ++throwCount;
                    throw 1;
                }
            }
            finally {
                await 5;
                ++finallyCount;
            }
        }
    }
    return asyncFinallyAwait().catch((e) => {
        if (throwCount != 1) {
            throw new Error ("Wrong number of throws within async function expected 1 but received " + throwCount);
        }
        if (e != 1) {
            throw new Error ("Wrong value thrown from async function expected 1 but received " + e);
        }
        if (finallyCount != 172) {
            throw new Error ("Wrong number of finally calls from async function expected 172 but received " + finallyCount);
        }
    });
}


function testFour()
{
    async function test() {
        var i8 = new Int8Array(256);
        var IntArr0 = [];
        for (var _strvar1 of i8) {
            for (var _strvar1 of IntArr0) {}
        }
    }
    return test();
}


Promise.all([testOne(), testTwo(), testThree(), testFour()]).then(()=>{print("pass")}, (e)=>{print (e)});
