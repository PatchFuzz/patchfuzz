


function callInIon() {
    return inIon();
};

function test() {
    
    while(!inIon());

    
    while(!callInIon());

    
    while(!inIon()) gc(this, 'shrinking');
};

test();

