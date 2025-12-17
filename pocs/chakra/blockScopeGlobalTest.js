let gA = 1;
const gConstB = 2;

function blockScopeGlobalTestFunc() {
    return 0;
}
blockScopeGlobalTestFunc();



this.gC = 3;
this.gD = 4;
let gC = 5;
const gD = 6;
blockScopeGlobalTestFunc();

print("PASSED");
