



assertThrows(`
{
    function a() {}
}

{
    
    
    
    let a;
    function a() {};
}
`, SyntaxError)
