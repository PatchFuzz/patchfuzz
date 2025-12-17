Promise.resolve()
    .then(()=>quit(0));
Promise.resolve()
    .then(()=>print("Must not run any more promise jobs after quitting"));