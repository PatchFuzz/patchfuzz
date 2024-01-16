







var a = 1; 
function someFuncThatsCalled() {
    a = 2; 
    let x = 2;
    let y = 2;
    a = 2; 
}
someFuncThatsCalled();
a = 2; 
a = 2; 
a = 2; 


function someFuncThatsRunning() {
    let x1 = 1;
    a = 2; 
}
someFuncThatsRunning();
a = 2; 