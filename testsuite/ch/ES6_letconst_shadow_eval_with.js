







function Run(){
    let a = 1;
    const b = 2;
    {
        eval('let a = 2');
        WScript.Echo(a); 
    }
    with({b:2}){
        const b = 2;
        {
            let b = 3;
            const a = 4;
			
            WScript.Echo(b); 
        }
        WScript.Echo(b); 
    }
    WScript.Echo(a); 
}


WScript.Attach(Run);