function blockScopeEvalTestFunc() {
    eval("{ let b = 1; b++;  }");
    return 0;
}
blockScopeEvalTestFunc();
print("PASSED");
