

var patchSet = new Set();

function checkSet(str) {
    patchSet.has(str);
}

for (var i = 0; i < 20; i++) {
    checkSet("s");
}

let re = /x(.*)x/;
let count = 0;
oomTest(() => {
    
    let result = re.exec("xa" + count++ + "ax")[1];
    checkSet(result);
})
