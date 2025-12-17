for (let i = 100; i; (() => {    
    --i;
    const regexp = /x[0-9][a-z]/i;
    function f() {
        %PretenureAllocationSite([{},1,arguments]);
    }
    f(0, -35066, -35066, 0, 0, 0, f, -35066, f, 0, f, 0, -35066, 0, 0, 0, -35066, f, 0,  regexp);
})()) {
}
