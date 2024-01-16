






var callcount = 0;

function Call() {
    let foo = "foo";
    bar();   
}

function bar() {
    callcount++;
    let z = 1;
    try{
        {    
            const z = 2; 
            z; 
        }
        if(callcount == 3) throw new Error();
    }catch(e){
        z++; 
        z;
    }
}

function Run(){
    Call();
    Call();
    Call();     
}

Run();
WScript.Echo('PASSED');