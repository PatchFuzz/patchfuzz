async function foo() {
    for (let q in 'a'.repeat(1000)) {
      await Math.floor(); 
      edenGC();
    }
}
foo();
