function blockScopeExpressionEvaluation() {
    const a = 1;
    let b = 2;
    a; 
    b; 
}

blockScopeExpressionEvaluation();

print("PASSED");