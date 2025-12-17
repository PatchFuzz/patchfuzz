function Run(){
    let a = 1;
    const b = 2;
    {
        eval('let a = 2');
        print(a); 
    }
    with({b:2}){
        const b = 2;
        {
            let b = 3;
            const a = 4;
			
            print(b); 
        }
        print(b); 
    }
    print(a); 
}


print(Run);