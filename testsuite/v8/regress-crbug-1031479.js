







var i = 0;
function main() {
function v0() {
   function v10(a) {
        i++;
        var cur_i = i;
        try {
            
            
            
            [].e = 1;

            
            
            if (cur_i == 2) throw 1;
        } catch(v22) {
            
            for (const v24 in "c19rXGEC2E") {
            }
        }
   }
   const v25 = v10(1);
   
   const v21 = Object.defineProperty([].__proto__,"e",{set:v10});
}
const v26 = v0();

gc();
assertThrows(v0, TypeError);
}
main();
